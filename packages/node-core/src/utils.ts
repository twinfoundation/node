// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* eslint-disable no-console */
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { I18n, Is, type ILocaleDictionary } from "@twin.org/core";
import type { INodeEnvironmentVariables } from "./models/INodeEnvironmentVariables";
import { NodeFeatures } from "./models/nodeFeatures";

/**
 * Initialise the locales for the application.
 * @param localesDirectory The directory containing the locales.
 */
export async function initialiseLocales(localesDirectory: string): Promise<void> {
	const localesFile = path.resolve(path.join(localesDirectory, "en.json"));
	console.info("Locales File:", localesFile);
	if (await fileExists(localesFile)) {
		const enLangContent = await readFile(localesFile, "utf8");
		I18n.addDictionary("en", JSON.parse(enLangContent) as ILocaleDictionary);
	} else {
		console.warn(`Locales file not found: ${localesFile}`);
	}
}

/**
 * Get the directory where the application is being executed.
 * @returns The execution directory.
 */
export function getExecutionDirectory(): string {
	return process.cwd();
}

/**
 * Does the specified file exist.
 * @param filename The filename to check for existence.
 * @returns True if the file exists.
 */
export async function fileExists(filename: string): Promise<boolean> {
	try {
		const stats = await stat(filename);
		return stats.isFile();
	} catch {
		return false;
	}
}

/**
 * Load the JSON file.
 * @param filename The filename of the JSON file to load.
 * @returns The contents of the JSON file or null if it could not be loaded.
 */
export async function loadJsonFile<T>(filename: string): Promise<T> {
	const content = await readFile(filename, "utf8");
	return JSON.parse(content) as T;
}

/**
 * Get the features that are enabled on the node.
 * @param env The environment variables for the node.
 * @returns The features that are enabled on the node.
 */
export function getFeatures(env: INodeEnvironmentVariables): NodeFeatures[] {
	if (Is.empty(env.features)) {
		return [];
	}

	const features: NodeFeatures[] = [];
	const allFeatures = Object.values(NodeFeatures);

	const splitFeatures = env.features.split(",");
	for (const feature of splitFeatures) {
		const featureTrimmed = feature.trim() as NodeFeatures;
		if (allFeatures.includes(featureTrimmed)) {
			features.push(featureTrimmed);
		}
	}

	return features;
}
