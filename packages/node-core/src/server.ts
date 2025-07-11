// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* eslint-disable no-console */
import { GeneralError, Is } from "@twin.org/core";
import { Engine } from "@twin.org/engine";
import { FileStateStorage } from "@twin.org/engine-core";
import { EngineCoreFactory, type IEngineState } from "@twin.org/engine-models";
import { EngineServer } from "@twin.org/engine-server";
import type { IEngineServerConfig } from "@twin.org/engine-server-types";
import { BlobStorageConnectorType, EntityStorageConnectorType } from "@twin.org/engine-types";
import { bootstrap } from "./bootstrap";
import type { INodeEnvironmentVariables } from "./models/INodeEnvironmentVariables";
import type { INodeOptions } from "./models/INodeOptions";

/**
 * Start the engine server.
 * @param nodeOptions Optional run options for the engine server.
 * @param engineServerConfig The configuration for the engine server.
 * @param envVars The environment variables.
 * @returns The engine server.
 */
export async function start(
	nodeOptions: INodeOptions | undefined,
	engineServerConfig: IEngineServerConfig,
	envVars: INodeEnvironmentVariables
): Promise<
	| {
			engine: Engine<IEngineServerConfig, IEngineState>;
			server: EngineServer;
	  }
	| undefined
> {
	envVars.storageFileRoot ??= "";

	if (
		(envVars.entityStorageConnectorType === EntityStorageConnectorType.File ||
			envVars.blobStorageConnectorType === BlobStorageConnectorType.File ||
			Is.empty(nodeOptions?.stateStorage)) &&
		!Is.stringValue(envVars.storageFileRoot)
	) {
		throw new GeneralError("node", "storageFileRootNotSet", {
			storageFileRoot: `${nodeOptions?.envPrefix ?? ""}_STORAGE_FILE_ROOT`
		});
	}

	// Create the engine instance using file state storage and custom bootstrap.
	const engine = new Engine<IEngineServerConfig, IEngineState>({
		config: engineServerConfig,
		stateStorage: nodeOptions?.stateStorage ?? new FileStateStorage(envVars.stateFilename ?? ""),
		customBootstrap: async (core, engineContext) => bootstrap(core, engineContext, envVars)
	});

	// Extend the engine.
	if (Is.function(nodeOptions?.extendEngine)) {
		console.info("Extending Engine");
		await nodeOptions.extendEngine(engine);
	}

	// Construct the server with the engine.
	const server = new EngineServer({ engineCore: engine });

	// Extend the engine server.
	if (Is.function(nodeOptions?.extendEngineServer)) {
		console.info("Extending Engine Server");
		await nodeOptions?.extendEngineServer(server);
	}

	// Need to register the engine with the factory so that background tasks
	// can clone it to spawn new instances.
	EngineCoreFactory.register("engine", () => engine);

	// Start the server, which also starts the engine.
	const canContinue = await server.start();

	if (canContinue) {
		return {
			engine,
			server
		};
	}
}
