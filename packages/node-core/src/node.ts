// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* eslint-disable no-console */
import path from "node:path";
import type { IServerInfo } from "@twin.org/api-models";
import { EnvHelper, ErrorHelper, Is } from "@twin.org/core";
import type { IEngineServerConfig } from "@twin.org/engine-server-types";
import * as dotenv from "dotenv";
import { buildEngineConfiguration } from "./builders/engineEnvBuilder";
import { buildEngineServerConfiguration } from "./builders/engineServerEnvBuilder";
import type { INodeEnvironmentVariables } from "./models/INodeEnvironmentVariables";
import type { INodeOptions } from "./models/INodeOptions";
import { start } from "./server";
import { fileExists, getExecutionDirectory, initialiseLocales, loadJsonFile } from "./utils";

/**
 * Run the TWIN Node server.
 * @param nodeOptions Optional configuration options for running the server.
 * @returns A promise that resolves when the server is started.
 */
export async function run(nodeOptions?: INodeOptions): Promise<void> {
	try {
		nodeOptions ??= {};

		const serverInfo: IServerInfo = {
			name: nodeOptions?.serverName ?? "TWIN Node Server",
			version: nodeOptions?.serverVersion ?? "0.0.1-next.9" // x-release-please-version
		};

		console.log(`\u001B[4m🌩️  ${serverInfo.name} v${serverInfo.version}\u001B[24m\n`);

		if (!Is.stringValue(nodeOptions?.executionDirectory)) {
			nodeOptions.executionDirectory = getExecutionDirectory();
		}
		console.info("Execution Directory:", nodeOptions.executionDirectory);

		nodeOptions.localesDirectory =
			nodeOptions?.localesDirectory ??
			path.resolve(path.join(nodeOptions.executionDirectory, "dist", "locales"));

		console.info("Locales Directory:", nodeOptions.localesDirectory);
		await initialiseLocales(nodeOptions.localesDirectory);

		if (Is.empty(nodeOptions?.openApiSpecFile)) {
			const specFile = path.resolve(
				path.join(nodeOptions.executionDirectory, "docs", "open-api", "spec.json")
			);
			console.info("Default OpenAPI Spec File:", specFile);
			if (await fileExists(specFile)) {
				nodeOptions ??= {};
				nodeOptions.openApiSpecFile = specFile;
			}
		}

		nodeOptions.envPrefix ??= "TWIN_NODE_";
		console.info("Environment Prefix:", nodeOptions.envPrefix);

		const { engineServerConfig, nodeEnvVars: envVars } = await buildConfiguration(
			process.env as {
				[id: string]: string;
			},
			nodeOptions,
			serverInfo
		);

		console.info();
		const startResult = await start(nodeOptions, engineServerConfig, envVars);

		if (!Is.empty(startResult)) {
			for (const signal of ["SIGHUP", "SIGINT", "SIGTERM"]) {
				process.on(signal, async () => {
					await startResult.server.stop();
				});
			}
		}
	} catch (err) {
		console.error(ErrorHelper.formatErrors(err).join("\n"));
		// eslint-disable-next-line unicorn/no-process-exit
		process.exit(1);
	}
}

/**
 * Build the configuration for the TWIN Node server.
 * @param processEnv The environment variables from the process.
 * @param options The options for running the server.
 * @param serverInfo The server information.
 * @returns A promise that resolves to the engine server configuration, environment prefix, environment variables,
 * and options.
 */
export async function buildConfiguration(
	processEnv: {
		[id: string]: string;
	},
	options: INodeOptions,
	serverInfo: IServerInfo
): Promise<{
	nodeEnvVars: INodeEnvironmentVariables & { [id: string]: string | unknown };
	engineServerConfig: IEngineServerConfig;
}> {
	let defaultEnvOnly = false;
	if (Is.empty(options?.envFilenames)) {
		const envFile = path.resolve(path.join(options.executionDirectory ?? "", ".env"));
		console.info("Default Environment File:", envFile);
		options ??= {};
		options.envFilenames = [envFile];
		defaultEnvOnly = true;
	}

	if (Is.arrayValue(options?.envFilenames)) {
		const output = dotenv.config({
			path: options?.envFilenames
		});

		// We don't want to throw an error if the default environment file is not found.
		// Only if we have custom environment files.
		if (!defaultEnvOnly && output.error) {
			throw output.error;
		}

		if (Is.objectValue(output.parsed)) {
			Object.assign(processEnv, output.parsed);
		}
	}

	const envVars = EnvHelper.envToJson<{ [id: string]: string | unknown }>(
		processEnv,
		options.envPrefix ?? ""
	);

	// Expand any environment variables that use the @file: syntax
	const keys = Object.keys(envVars);
	for (const key of keys) {
		if (Is.stringValue(envVars[key]) && envVars[key].startsWith("@file:")) {
			const filePath = envVars[key].slice(6).trim();
			const embeddedFile = path.resolve(path.join(options.executionDirectory ?? "", filePath));
			console.info(`Expanding Environment Variable: ${key} from file: ${embeddedFile}`);
			const fileContent = await loadJsonFile(embeddedFile);
			envVars[key] = fileContent;
		}
	}

	// Extend the environment variables with any additional custom configuration.
	if (Is.function(options?.extendEnvVars)) {
		console.info("Extending Environment Variables");
		await options.extendEnvVars(envVars);
	}

	// Build the engine configuration from the environment variables.
	const coreConfig = buildEngineConfiguration(envVars);
	const engineServerConfig = buildEngineServerConfiguration(
		envVars,
		coreConfig,
		serverInfo,
		options?.openApiSpecFile
	);

	// Merge any custom configuration provided in the options.
	if (Is.arrayValue(options?.configFilenames)) {
		for (const configFile of options.configFilenames) {
			console.info("Loading Configuration File:", configFile);
			const configFilePath = path.resolve(path.join(options.executionDirectory ?? "", configFile));
			const config = await loadJsonFile(configFilePath);
			Object.assign(engineServerConfig, config);
		}
	}

	if (Is.objectValue(options?.config)) {
		console.info("Merging Custom Configuration");
		Object.assign(engineServerConfig, options.config);
	}

	// Merge any custom configuration provided in the options.
	if (Is.function(options?.extendConfig)) {
		console.info("Extending Configuration");
		await options.extendConfig(engineServerConfig);
	}
	return { engineServerConfig, nodeEnvVars: envVars };
}
