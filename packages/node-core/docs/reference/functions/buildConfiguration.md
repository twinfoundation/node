# Function: buildConfiguration()

> **buildConfiguration**(`processEnv`, `options`, `serverInfo`): `Promise`\<\{ `nodeEnvVars`: [`INodeEnvironmentVariables`](../interfaces/INodeEnvironmentVariables.md) & `object`; `engineServerConfig`: `IEngineServerConfig`; \}\>

Build the configuration for the TWIN Node server.

## Parameters

### processEnv

The environment variables from the process.

### options

[`INodeOptions`](../interfaces/INodeOptions.md)

The options for running the server.

### serverInfo

`IServerInfo`

The server information.

## Returns

`Promise`\<\{ `nodeEnvVars`: [`INodeEnvironmentVariables`](../interfaces/INodeEnvironmentVariables.md) & `object`; `engineServerConfig`: `IEngineServerConfig`; \}\>

A promise that resolves to the engine server configuration, environment prefix, environment variables,
and options.
