# Function: run()

> **run**(`options?`): `Promise`\<`void`\>

Run the TWIN Node server.

## Parameters

### options?

Optional options for the server.

#### serverName?

`string`

Optional name of the server, defaults to "TWIN Node Server".

#### serverVersion?

`string`

Optional version of the server, defaults to current version.

#### envFilenames?

`string`[]

Additional environment variable filenames to load, defaults to .env.

#### envPrefix?

`string`

Optional prefix for environment variables, defaults to "TWIN_NODE_".

#### executionDirectory?

`string`

Optional directory to override the execution location, defaults to process directory.

#### localesDirectory?

`string`

Optional directory to override the locales directory, defaults to the locales directory.

#### openApiSpecFile?

`string`

Optional path to the OpenAPI spec file, defaults to docs/open-api/spec.json.

## Returns

`Promise`\<`void`\>

A promise that resolves when the server is started.
