# Interface: INodeVariables

The environment variables for the node.

## Extends

- `IEngineEnvironmentVariables`.`IEngineServerEnvironmentVariables`

## Properties

### features?

> `optional` **features**: `string`

The features that are enabled on the node.

#### Default

```ts
[NodeFeatures.NodeIdentity]
```

***

### identity?

> `optional` **identity**: `string`

The identity of the node which, if empty and node-identity feature is enabled it will be generated.

***

### mnemonic?

> `optional` **mnemonic**: `string`

The mnemonic for the identity, if empty and node-identity feature is enabled it will be randomly generated.

***

### username?

> `optional` **username**: `string`

If the node-user feature is enabled, this will be the name of the user.

#### Default

```ts
admin@node
```

***

### password?

> `optional` **password**: `string`

If the node-user feature is enabled, this will be the password of the user, if empty it will be randomly generated.
