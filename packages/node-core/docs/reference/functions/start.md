# Function: start()

> **start**(`serverInfo`, `envVarsPrefix`, `envVars`, `openApiSpecFile?`, `stateStorage?`, `extendConfig?`, `extendEngine?`, `extendEngineServer?`): `Promise`\<`undefined` \| \{ `engine`: `Engine`\<`IEngineServerConfig`, [`INodeState`](../interfaces/INodeState.md)\>; `server`: `EngineServer`; \}\>

Start the engine server.

## Parameters

### serverInfo

`IServerInfo`

The server information.

### envVarsPrefix

`string`

The prefix for the environment variables.

### envVars

[`INodeVariables`](../interfaces/INodeVariables.md)

The environment variables.

### openApiSpecFile?

`string`

Path to the OpenAPI spec file.

### stateStorage?

`IEngineStateStorage`\<`IEngineState`\>

The state storage.

### extendConfig?

(`config`) => `Promise`\<`void`\>

Extends the engine configuration with any additional custom configuration.

### extendEngine?

(`engine`) => `Promise`\<`void`\>

Extends the engine with any additional options.

### extendEngineServer?

(`engineServer`) => `Promise`\<`void`\>

Extends the engine server with any additional options.

## Returns

`Promise`\<`undefined` \| \{ `engine`: `Engine`\<`IEngineServerConfig`, [`INodeState`](../interfaces/INodeState.md)\>; `server`: `EngineServer`; \}\>

The engine server.
