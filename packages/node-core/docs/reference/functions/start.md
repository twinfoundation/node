# Function: start()

> **start**(`nodeOptions`, `engineServerConfig`, `envVars`): `Promise`\<`undefined` \| \{ `engine`: `Engine`\<`IEngineServerConfig`, `IEngineState`\>; `server`: `EngineServer`; \}\>

Start the engine server.

## Parameters

### nodeOptions

Optional run options for the engine server.

`undefined` | [`INodeOptions`](../interfaces/INodeOptions.md)

### engineServerConfig

`IEngineServerConfig`

The configuration for the engine server.

### envVars

[`INodeEnvironmentVariables`](../interfaces/INodeEnvironmentVariables.md)

The environment variables.

## Returns

`Promise`\<`undefined` \| \{ `engine`: `Engine`\<`IEngineServerConfig`, `IEngineState`\>; `server`: `EngineServer`; \}\>

The engine server.
