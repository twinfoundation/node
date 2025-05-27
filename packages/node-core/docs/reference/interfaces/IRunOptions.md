# Interface: IRunOptions

The options when running the node.

## Properties

### serverName?

> `optional` **serverName**: `string`

The name of the server, defaults to "TWIN Node Server".

#### Default

```ts
"TWIN Node Server"
```

***

### serverVersion?

> `optional` **serverVersion**: `string`

The version of the server, defaults to the current version.

***

### envFilenames?

> `optional` **envFilenames**: `string`[]

Additional environment variable filenames to load, defaults to .env.

***

### envPrefix?

> `optional` **envPrefix**: `string`

The prefix for environment variables, defaults to "TWIN_NODE_".

***

### executionDirectory?

> `optional` **executionDirectory**: `string`

The directory to override the execution location, defaults to process directory.

***

### localesDirectory?

> `optional` **localesDirectory**: `string`

The directory to override the locales directory, defaults to the locales directory.

***

### openApiSpecFile?

> `optional` **openApiSpecFile**: `string`

The path to the OpenAPI spec file, defaults to docs/open-api/spec.json.

***

### customConfig()?

> `optional` **customConfig**: (`config`) => `Promise`\<`void`\>

Method to extend the engine configuration with any additional custom configuration.

#### Parameters

##### config

`IEngineConfig`

#### Returns

`Promise`\<`void`\>

***

### stateStorage?

> `optional` **stateStorage**: `IEngineStateStorage`\<`IEngineState`\>

The state storage to use for the engine.
If not provided, a default file-based state storage will be used.
