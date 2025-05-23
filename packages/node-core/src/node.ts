// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* eslint-disable no-console */
import path from "node:path";
import type { IServerInfo } from "@twin.org/api-models";
import { EnvHelper, ErrorHelper, Is } from "@twin.org/core";
import * as dotenv from "dotenv";
import type { INodeVariables } from "./models/INodeVariables";
import { start } from "./server";
import { fileExists, getExecutionDirectory, initialiseLocales } from "./utils";

/**
 * Run the TWIN Node server.
 * @param options Optional options for the server.
 * @param options.serverName Optional name of the server, defaults to "TWIN Node Server".
 * @param options.serverVersion Optional version of the server, defaults to current version.
 * @param options.envFilenames Additional environment variable filenames to load, defaults to .env.
 * @param options.envPrefix Optional prefix for environment variables, defaults to "TWIN_NODE_".
 * @param options.executionDirectory Optional directory to override the execution location, defaults to process directory.
 * @param options.localesDirectory Optional directory to override the locales directory, defaults to the locales directory.
 * @param options.openApiSpecFile Optional path to the OpenAPI spec file, defaults to docs/open-api/spec.json.
 * @returns A promise that resolves when the server is started.
 */
export async function run(options?: {
	serverName?: string;
	serverVersion?: string;
	envFilenames?: string[];
	envPrefix?: string;
	executionDirectory?: string;
	localesDirectory?: string;
	openApiSpecFile?: string;
}): Promise<void> {
	try {
		const serverInfo: IServerInfo = {
			name: options?.serverName ?? "TWIN Node Server",
			version: options?.serverVersion ?? "0.0.1-next.1" // x-release-please-version
		};

		console.log(`\u001B[4m🌩️  ${serverInfo.name} v${serverInfo.version}\u001B[24m\n`);

		const executionDirectory = options?.executionDirectory ?? getExecutionDirectory();
		console.info("Execution Directory:", process.cwd());

		await initialiseLocales(
			options?.localesDirectory ?? path.resolve(path.join(executionDirectory, "dist", "locales"))
		);

		if (Is.empty(options?.openApiSpecFile)) {
			const specFile = path.resolve(path.join(executionDirectory, "docs", "open-api", "spec.json"));
			console.info("Default OpenAPI Spec File:", specFile);
			if (await fileExists(specFile)) {
				options ??= {};
				options.openApiSpecFile = specFile;
			}
		}

		if (Is.empty(options?.envFilenames)) {
			const envFile = path.resolve(path.join(executionDirectory, ".env"));
			console.info("Default Environment File:", envFile);
			options ??= {};
			options.envFilenames = [envFile];
		}

		dotenv.config({
			path: options?.envFilenames
		});

		const envPrefix = options?.envPrefix ?? "TWIN_NODE_";
		console.info("Environment Prefix:", envPrefix);
		const envVars = EnvHelper.envToJson<INodeVariables>(process.env, envPrefix);

		console.info();
		const startResult = await start(serverInfo, envVars, options?.openApiSpecFile);
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
