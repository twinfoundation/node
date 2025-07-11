# Interface: IEngineServerEnvironmentVariables

The engine server environment variables.

## Extended by

- [`INodeEnvironmentVariables`](INodeEnvironmentVariables.md)

## Properties

### port?

> `optional` **port**: `string`

The port to serve the API from.

***

### host?

> `optional` **host**: `string`

The host to serve the API from.

***

### corsOrigins?

> `optional` **corsOrigins**: `string`

The CORS origins to allow, defaults to *.

***

### httpMethods?

> `optional` **httpMethods**: `string`

The CORS methods to allow, defaults to GET, POST, PUT, DELETE, OPTIONS.

***

### httpAllowedHeaders?

> `optional` **httpAllowedHeaders**: `string`

The CORS headers to allow.

***

### httpExposedHeaders?

> `optional` **httpExposedHeaders**: `string`

The CORS headers to expose.

***

### authAdminProcessorType?

> `optional` **authAdminProcessorType**: `string`

The type of auth admin processor to use on the API: entity-storage.

***

### authProcessorType?

> `optional` **authProcessorType**: `string`

The type of auth processor to use on the API: entity-storage.

***

### authSigningKeyId?

> `optional` **authSigningKeyId**: `string`

The id of the key in the vault to use for signing in auth operations.

***

### mimeTypeProcessors?

> `optional` **mimeTypeProcessors**: `string`

Additional MIME type processors to include, comma separated.

***

### disableNodeIdentity?

> `optional` **disableNodeIdentity**: `string`

Disable Node Identity route processors.
