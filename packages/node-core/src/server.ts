// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IServerInfo } from "@twin.org/api-models";
import { GeneralError, Is } from "@twin.org/core";
import { buildEngineConfiguration, Engine } from "@twin.org/engine";
import { FileStateStorage } from "@twin.org/engine-core";
import { EngineCoreFactory, type IEngineStateStorage } from "@twin.org/engine-models";
import { buildEngineServerConfiguration, EngineServer } from "@twin.org/engine-server";
import type { IEngineServerConfig } from "@twin.org/engine-server-types";
import {
	BlobStorageConnectorType,
	EntityStorageConnectorType,
	type IEngineConfig
} from "@twin.org/engine-types";
import { bootstrap } from "./bootstrap";
import type { INodeState } from "./models/INodeState";
import type { INodeVariables } from "./models/INodeVariables";

/**
 * Start the engine server.
 * @param serverInfo The server information.
 * @param envVarsPrefix The prefix for the environment variables.
 * @param envVars The environment variables.
 * @param openApiSpecFile Path to the OpenAPI spec file.
 * @param stateStorage The state storage.
 * @param customConfig Extends the engine configuration with any additional custom configuration.
 * @returns The engine server.
 */
export async function start(
	serverInfo: IServerInfo,
	envVarsPrefix: string,
	envVars: INodeVariables,
	openApiSpecFile?: string,
	stateStorage?: IEngineStateStorage,
	customConfig?: (config: IEngineConfig) => Promise<void>
): Promise<
	| {
			engine: Engine<IEngineServerConfig, INodeState>;
			server: EngineServer;
	  }
	| undefined
> {
	envVars.storageFileRoot ??= "";

	if (
		(envVars.entityStorageConnectorType === EntityStorageConnectorType.File ||
			envVars.blobStorageConnectorType === BlobStorageConnectorType.File ||
			Is.empty(stateStorage)) &&
		!Is.stringValue(envVars.storageFileRoot)
	) {
		throw new GeneralError("node", "storageFileRootNotSet", {
			storageFileRoot: `${envVarsPrefix}_STORAGE_FILE_ROOT`
		});
	}

	// Build the engine configuration from the environment variables.
	const engineConfig = buildEngineConfiguration(envVars);

	// Extend the engine configuration with a custom type.
	if (Is.function(customConfig)) {
		await customConfig(engineConfig);
	}

	// Build the server configuration from the environment variables.
	const serverConfig = buildEngineServerConfiguration(
		envVars,
		engineConfig,
		serverInfo,
		openApiSpecFile
	);

	// Create the engine instance using file state storage and custom bootstrap.
	const engine = new Engine<IEngineServerConfig, INodeState>({
		config: { ...engineConfig, ...serverConfig },
		stateStorage: stateStorage ?? new FileStateStorage(envVars.stateFilename ?? ""),
		customBootstrap: async (core, engineContext) => bootstrap(core, engineContext, envVars)
	});

	// Need to register the engine with the factory so that background tasks
	// can clone it to spawn new instances.
	EngineCoreFactory.register("engine", () => engine);

	// Construct the server with the engine.
	const server = new EngineServer({ engineCore: engine });

	// Start the server, which also starts the engine.
	const canContinue = await server.start();

	if (canContinue) {
		return {
			engine,
			server
		};
	}
}
