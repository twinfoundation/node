// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IEngineStateStorage } from "@twin.org/engine-models";
import type { IEngineConfig } from "@twin.org/engine-types";

/**
 * The options when running the node.
 */
export interface IRunOptions {
	/**
	 * The name of the server, defaults to "TWIN Node Server".
	 * @default "TWIN Node Server"
	 */
	serverName?: string;

	/**
	 * The version of the server, defaults to the current version.
	 */
	serverVersion?: string;

	/**
	 * Additional environment variable filenames to load, defaults to .env.
	 */
	envFilenames?: string[];

	/**
	 * The prefix for environment variables, defaults to "TWIN_NODE_".
	 */
	envPrefix?: string;

	/**
	 * The directory to override the execution location, defaults to process directory.
	 */
	executionDirectory?: string;

	/**
	 * The directory to override the locales directory, defaults to the locales directory.
	 */
	localesDirectory?: string;

	/**
	 * The path to the OpenAPI spec file, defaults to docs/open-api/spec.json.
	 */
	openApiSpecFile?: string;

	/**
	 * Method to extend the engine configuration with any additional custom configuration.
	 */
	customConfig?: (config: IEngineConfig) => Promise<void>;

	/**
	 * The state storage to use for the engine.
	 * If not provided, a default file-based state storage will be used.
	 */
	stateStorage?: IEngineStateStorage;
}
