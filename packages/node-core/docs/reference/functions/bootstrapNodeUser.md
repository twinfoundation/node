# Function: bootstrapNodeUser()

> **bootstrapNodeUser**(`engineCore`, `context`, `envVars`, `features`): `Promise`\<`void`\>

Bootstrap the user.

## Parameters

### engineCore

`IEngineCore`

The engine core for the node.

### context

`IEngineCoreContext`\<`IEngineServerConfig`, [`INodeState`](../interfaces/INodeState.md)\>

The context for the node.

### envVars

[`INodeVariables`](../interfaces/INodeVariables.md)

The environment variables for the node.

### features

[`NodeFeatures`](../type-aliases/NodeFeatures.md)[]

The features that are enabled on the node.

## Returns

`Promise`\<`void`\>
