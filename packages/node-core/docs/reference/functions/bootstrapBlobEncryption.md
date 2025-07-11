# Function: bootstrapBlobEncryption()

> **bootstrapBlobEncryption**(`engineCore`, `context`, `envVars`, `features`): `Promise`\<`void`\>

Bootstrap the keys for blob encryption.

## Parameters

### engineCore

`IEngineCore`

The engine core for the node.

### context

`IEngineCoreContext`\<`IEngineServerConfig`, `IEngineState`\>

The context for the node.

### envVars

[`INodeEnvironmentVariables`](../interfaces/INodeEnvironmentVariables.md)

The environment variables for the node.

### features

[`NodeFeatures`](../type-aliases/NodeFeatures.md)[]

The features that are enabled on the node.

## Returns

`Promise`\<`void`\>
