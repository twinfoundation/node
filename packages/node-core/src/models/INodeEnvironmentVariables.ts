// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IEngineEnvironmentVariables } from "./IEngineEnvironmentVariables";
import type { IEngineServerEnvironmentVariables } from "./IEngineServerEnvironmentVariables";

/**
 * The environment variables for the node.
 */
export interface INodeEnvironmentVariables
	extends IEngineEnvironmentVariables,
		IEngineServerEnvironmentVariables {
	/**
	 * The features that are enabled on the node.
	 * @default [NodeFeatures.NodeIdentity]
	 */
	features?: string;

	/**
	 * The identity of the node which, if empty and node-identity feature is enabled it will be generated.
	 */
	identity?: string;

	/**
	 * The mnemonic for the identity, if empty and node-identity feature is enabled it will be randomly generated.
	 */
	mnemonic?: string;

	/**
	 * If the node-user feature is enabled, this will be the name of the user.
	 * @default admin@node
	 */
	username?: string;

	/**
	 * If the node-user feature is enabled, this will be the password of the user, if empty it will be randomly generated.
	 */
	password?: string;
}
