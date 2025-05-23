// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The features that can be enabled on the node.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const NodeFeatures = {
	/**
	 * NodeIdentity - generates an identity for the node if not provided in config.
	 */
	NodeIdentity: "node-identity",

	/**
	 * NodeUser - generates a user for the node if not provided in config.
	 */
	NodeUser: "node-user"
} as const;

/**
 * The features that can be enabled on the node.
 */
export type NodeFeatures = (typeof NodeFeatures)[keyof typeof NodeFeatures];
