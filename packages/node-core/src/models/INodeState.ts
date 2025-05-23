// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IEngineState } from "@twin.org/engine-models";

/**
 * The state for the node.
 */
export interface INodeState extends IEngineState {
	/**
	 * List of addresses for the node.
	 */
	addresses?: string[];
}
