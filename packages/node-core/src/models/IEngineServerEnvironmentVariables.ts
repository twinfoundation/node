// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The engine server environment variables.
 */
export interface IEngineServerEnvironmentVariables {
	/**
	 * The port to serve the API from.
	 */
	port?: string;

	/**
	 * The host to serve the API from.
	 */
	host?: string;

	/**
	 * The CORS origins to allow, defaults to *.
	 */
	corsOrigins?: string;

	/**
	 * The CORS methods to allow, defaults to GET, POST, PUT, DELETE, OPTIONS.
	 */
	httpMethods?: string;

	/**
	 * The CORS headers to allow.
	 */
	httpAllowedHeaders?: string;

	/**
	 * The CORS headers to expose.
	 */
	httpExposedHeaders?: string;

	/**
	 * The type of auth admin processor to use on the API: entity-storage.
	 */
	authAdminProcessorType?: string;

	/**
	 * The type of auth processor to use on the API: entity-storage.
	 */
	authProcessorType?: string;

	/**
	 * The id of the key in the vault to use for signing in auth operations.
	 */
	authSigningKeyId?: string;

	/**
	 * Additional MIME type processors to include, comma separated.
	 */
	mimeTypeProcessors?: string;

	/**
	 * Disable Node Identity route processors.
	 */
	disableNodeIdentity?: string;
}
