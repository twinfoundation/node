# Function: start()

> **start**(`serverInfo`, `envVars`, `openApiSpecFile?`, `stateStorage?`, `customConfig?`): `Promise`\<`undefined` \| \{ `engine`: `Engine`\<`IEngineServerConfig`, [`INodeState`](../interfaces/INodeState.md)\>; `server`: `EngineServer`; \}\>

Start the engine server.

## Parameters

### serverInfo

`IServerInfo`

The server information.

### envVars

[`INodeVariables`](../interfaces/INodeVariables.md)

The environment variables.

### openApiSpecFile?

`string`

Path to the OpenAPI spec file.

### stateStorage?

`IEngineStateStorage`\<`IEngineState`\>

The state storage.

### customConfig?

(`config`) => `Promise`\<`void`\>

Extends the engine configuration with any additional custom configuration.

## Returns

`Promise`\<`undefined` \| \{ `engine`: `Engine`\<`IEngineServerConfig`, [`INodeState`](../interfaces/INodeState.md)\>; `server`: `EngineServer`; \}\>

The engine server.
