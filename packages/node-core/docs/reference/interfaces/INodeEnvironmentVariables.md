# Interface: INodeEnvironmentVariables

The environment variables for the node.

## Extends

- [`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md)

## Properties

### debug?

> `optional` **debug**: `string`

Start the engine in debug mode.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`debug`](IEngineEnvironmentVariables.md#debug)

***

### storageFileRoot?

> `optional` **storageFileRoot**: `string`

The root directory for storing items like state file.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`storageFileRoot`](IEngineEnvironmentVariables.md#storagefileroot)

***

### stateFilename?

> `optional` **stateFilename**: `string`

The name of the state file.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`stateFilename`](IEngineEnvironmentVariables.md#statefilename)

***

### entityStorageConnectorType?

> `optional` **entityStorageConnectorType**: `string`

The type of the default entity storage: file, memory, aws-dynamodb, azure-cosmosdb, gcp-firestoredb, scylladb, mysql, mongodb, postgresql.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`entityStorageConnectorType`](IEngineEnvironmentVariables.md#entitystorageconnectortype)

***

### entityStorageTablePrefix?

> `optional` **entityStorageTablePrefix**: `string`

A prefix for all the table in entity-storage, can be empty.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`entityStorageTablePrefix`](IEngineEnvironmentVariables.md#entitystoragetableprefix)

***

### entityFileEnable?

> `optional` **entityFileEnable**: `string`

Enable the file entity storage connector.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`entityFileEnable`](IEngineEnvironmentVariables.md#entityfileenable)

***

### entityMemoryEnable?

> `optional` **entityMemoryEnable**: `string`

Enable the memory entity storage connector.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`entityMemoryEnable`](IEngineEnvironmentVariables.md#entitymemoryenable)

***

### awsDynamodbAccessKeyId?

> `optional` **awsDynamodbAccessKeyId**: `string`

AWS Dynamo DB access key id.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`awsDynamodbAccessKeyId`](IEngineEnvironmentVariables.md#awsdynamodbaccesskeyid)

***

### awsDynamodbEndpoint?

> `optional` **awsDynamodbEndpoint**: `string`

AWS Dynamo DB Endpoint if running local instance.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`awsDynamodbEndpoint`](IEngineEnvironmentVariables.md#awsdynamodbendpoint)

***

### awsDynamodbRegion?

> `optional` **awsDynamodbRegion**: `string`

AWS Dynamo DB region.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`awsDynamodbRegion`](IEngineEnvironmentVariables.md#awsdynamodbregion)

***

### awsDynamodbSecretAccessKey?

> `optional` **awsDynamodbSecretAccessKey**: `string`

AWS Dynamo DB secret access key.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`awsDynamodbSecretAccessKey`](IEngineEnvironmentVariables.md#awsdynamodbsecretaccesskey)

***

### azureCosmosdbKey?

> `optional` **azureCosmosdbKey**: `string`

Azure Cosmos DB key.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`azureCosmosdbKey`](IEngineEnvironmentVariables.md#azurecosmosdbkey)

***

### azureCosmosdbContainerId?

> `optional` **azureCosmosdbContainerId**: `string`

Azure Cosmos DB container id.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`azureCosmosdbContainerId`](IEngineEnvironmentVariables.md#azurecosmosdbcontainerid)

***

### azureCosmosdbDatabaseId?

> `optional` **azureCosmosdbDatabaseId**: `string`

Azure Cosmos DB database id.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`azureCosmosdbDatabaseId`](IEngineEnvironmentVariables.md#azurecosmosdbdatabaseid)

***

### azureCosmosdbEndpoint?

> `optional` **azureCosmosdbEndpoint**: `string`

Azure Cosmos DB endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`azureCosmosdbEndpoint`](IEngineEnvironmentVariables.md#azurecosmosdbendpoint)

***

### gcpFirestoreCollectionName?

> `optional` **gcpFirestoreCollectionName**: `string`

GCP Firestore collection name.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`gcpFirestoreCollectionName`](IEngineEnvironmentVariables.md#gcpfirestorecollectionname)

***

### gcpFirestoreCredentials?

> `optional` **gcpFirestoreCredentials**: `string`

GCP Firestore credentials.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`gcpFirestoreCredentials`](IEngineEnvironmentVariables.md#gcpfirestorecredentials)

***

### gcpFirestoreDatabaseId?

> `optional` **gcpFirestoreDatabaseId**: `string`

GCP Firestore database id.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`gcpFirestoreDatabaseId`](IEngineEnvironmentVariables.md#gcpfirestoredatabaseid)

***

### gcpFirestoreApiEndpoint?

> `optional` **gcpFirestoreApiEndpoint**: `string`

GCP Firestore endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`gcpFirestoreApiEndpoint`](IEngineEnvironmentVariables.md#gcpfirestoreapiendpoint)

***

### gcpFirestoreProjectId?

> `optional` **gcpFirestoreProjectId**: `string`

GCP Firestore project id.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`gcpFirestoreProjectId`](IEngineEnvironmentVariables.md#gcpfirestoreprojectid)

***

### scylladbHosts?

> `optional` **scylladbHosts**: `string`

ScyllaDB hosts as comma separated string.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`scylladbHosts`](IEngineEnvironmentVariables.md#scylladbhosts)

***

### scylladbKeyspace?

> `optional` **scylladbKeyspace**: `string`

ScyllaDB keyspace.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`scylladbKeyspace`](IEngineEnvironmentVariables.md#scylladbkeyspace)

***

### scylladbLocalDataCenter?

> `optional` **scylladbLocalDataCenter**: `string`

ScyllaDB local data center.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`scylladbLocalDataCenter`](IEngineEnvironmentVariables.md#scylladblocaldatacenter)

***

### mySqlHost?

> `optional` **mySqlHost**: `string`

MySQL host.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`mySqlHost`](IEngineEnvironmentVariables.md#mysqlhost)

***

### mySqlPort?

> `optional` **mySqlPort**: `number`

MySQL port.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`mySqlPort`](IEngineEnvironmentVariables.md#mysqlport)

***

### mySqlUser?

> `optional` **mySqlUser**: `string`

MySQL username.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`mySqlUser`](IEngineEnvironmentVariables.md#mysqluser)

***

### mySqlPassword?

> `optional` **mySqlPassword**: `string`

MySQL password.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`mySqlPassword`](IEngineEnvironmentVariables.md#mysqlpassword)

***

### mySqlDatabase?

> `optional` **mySqlDatabase**: `string`

MySQL Database.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`mySqlDatabase`](IEngineEnvironmentVariables.md#mysqldatabase)

***

### mongoDbHost?

> `optional` **mongoDbHost**: `string`

MongoDB host.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`mongoDbHost`](IEngineEnvironmentVariables.md#mongodbhost)

***

### mongoDbPort?

> `optional` **mongoDbPort**: `number`

MongoDB port.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`mongoDbPort`](IEngineEnvironmentVariables.md#mongodbport)

***

### mongoDbUser?

> `optional` **mongoDbUser**: `string`

MongoDB username.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`mongoDbUser`](IEngineEnvironmentVariables.md#mongodbuser)

***

### mongoDbPassword?

> `optional` **mongoDbPassword**: `string`

MongoDB password.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`mongoDbPassword`](IEngineEnvironmentVariables.md#mongodbpassword)

***

### mongoDbDatabase?

> `optional` **mongoDbDatabase**: `string`

MongoDB Database.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`mongoDbDatabase`](IEngineEnvironmentVariables.md#mongodbdatabase)

***

### postgreSqlHost?

> `optional` **postgreSqlHost**: `string`

PostgreSQl host.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`postgreSqlHost`](IEngineEnvironmentVariables.md#postgresqlhost)

***

### postgreSqlPort?

> `optional` **postgreSqlPort**: `number`

PostgreSQl port.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`postgreSqlPort`](IEngineEnvironmentVariables.md#postgresqlport)

***

### postgreSqlUser?

> `optional` **postgreSqlUser**: `string`

PostgreSQl username.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`postgreSqlUser`](IEngineEnvironmentVariables.md#postgresqluser)

***

### postgreSqlPassword?

> `optional` **postgreSqlPassword**: `string`

PostgreSQl password.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`postgreSqlPassword`](IEngineEnvironmentVariables.md#postgresqlpassword)

***

### postgreSqlDatabase?

> `optional` **postgreSqlDatabase**: `string`

PostgreSQl Database.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`postgreSqlDatabase`](IEngineEnvironmentVariables.md#postgresqldatabase)

***

### ipfsBearerToken?

> `optional` **ipfsBearerToken**: `string`

The security token for accessing IPFS API.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`ipfsBearerToken`](IEngineEnvironmentVariables.md#ipfsbearertoken)

***

### ipfsApiUrl?

> `optional` **ipfsApiUrl**: `string`

The url for accessing IPFS API.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`ipfsApiUrl`](IEngineEnvironmentVariables.md#ipfsapiurl)

***

### blobStorageConnectorType?

> `optional` **blobStorageConnectorType**: `string`

The type of the default blob storage: memory, file, ipfs, aws-s3, azure-storage, gcp-storage.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`blobStorageConnectorType`](IEngineEnvironmentVariables.md#blobstorageconnectortype)

***

### blobStorageEnableEncryption?

> `optional` **blobStorageEnableEncryption**: `string`

Enable encryption for the blob storage.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`blobStorageEnableEncryption`](IEngineEnvironmentVariables.md#blobstorageenableencryption)

***

### blobStorageEncryptionKey?

> `optional` **blobStorageEncryptionKey**: `string`

The encryption key for the blob storage.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`blobStorageEncryptionKey`](IEngineEnvironmentVariables.md#blobstorageencryptionkey)

***

### blobStoragePrefix?

> `optional` **blobStoragePrefix**: `string`

A prefix for all the blobs in blob-storage, can be empty.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`blobStoragePrefix`](IEngineEnvironmentVariables.md#blobstorageprefix)

***

### blobFileEnable?

> `optional` **blobFileEnable**: `string`

Enable the file blob storage connector.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`blobFileEnable`](IEngineEnvironmentVariables.md#blobfileenable)

***

### blobMemoryEnable?

> `optional` **blobMemoryEnable**: `string`

Enable the memory blob storage connector.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`blobMemoryEnable`](IEngineEnvironmentVariables.md#blobmemoryenable)

***

### awsS3AccessKeyId?

> `optional` **awsS3AccessKeyId**: `string`

AWS S3 access key id.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`awsS3AccessKeyId`](IEngineEnvironmentVariables.md#awss3accesskeyid)

***

### awsS3BucketName?

> `optional` **awsS3BucketName**: `string`

AWS S3 bucket name.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`awsS3BucketName`](IEngineEnvironmentVariables.md#awss3bucketname)

***

### awsS3Endpoint?

> `optional` **awsS3Endpoint**: `string`

AWS S3 endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`awsS3Endpoint`](IEngineEnvironmentVariables.md#awss3endpoint)

***

### awsS3Region?

> `optional` **awsS3Region**: `string`

AWS S3 region.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`awsS3Region`](IEngineEnvironmentVariables.md#awss3region)

***

### awsS3SecretAccessKey?

> `optional` **awsS3SecretAccessKey**: `string`

AWS S3 secret access key.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`awsS3SecretAccessKey`](IEngineEnvironmentVariables.md#awss3secretaccesskey)

***

### azureStorageAccountKey?

> `optional` **azureStorageAccountKey**: `string`

Azure Storage account key.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`azureStorageAccountKey`](IEngineEnvironmentVariables.md#azurestorageaccountkey)

***

### azureStorageAccountName?

> `optional` **azureStorageAccountName**: `string`

Azure Storage account name.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`azureStorageAccountName`](IEngineEnvironmentVariables.md#azurestorageaccountname)

***

### azureStorageContainerName?

> `optional` **azureStorageContainerName**: `string`

Azure Storage container.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`azureStorageContainerName`](IEngineEnvironmentVariables.md#azurestoragecontainername)

***

### azureStorageEndpoint?

> `optional` **azureStorageEndpoint**: `string`

Azure Storage endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`azureStorageEndpoint`](IEngineEnvironmentVariables.md#azurestorageendpoint)

***

### gcpStorageBucketName?

> `optional` **gcpStorageBucketName**: `string`

GCP Storage bucket.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`gcpStorageBucketName`](IEngineEnvironmentVariables.md#gcpstoragebucketname)

***

### gcpStorageCredentials?

> `optional` **gcpStorageCredentials**: `string`

GCP Storage credentials.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`gcpStorageCredentials`](IEngineEnvironmentVariables.md#gcpstoragecredentials)

***

### gcpStorageEndpoint?

> `optional` **gcpStorageEndpoint**: `string`

GCP Storage endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`gcpStorageEndpoint`](IEngineEnvironmentVariables.md#gcpstorageendpoint)

***

### gcpStorageProjectId?

> `optional` **gcpStorageProjectId**: `string`

GCP Storage project id.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`gcpStorageProjectId`](IEngineEnvironmentVariables.md#gcpstorageprojectid)

***

### vaultConnector?

> `optional` **vaultConnector**: `string`

The type of the default vault connector: entity-storage, hashicorp.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`vaultConnector`](IEngineEnvironmentVariables.md#vaultconnector)

***

### hashicorpVaultToken?

> `optional` **hashicorpVaultToken**: `string`

Hashicorp Vault token.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`hashicorpVaultToken`](IEngineEnvironmentVariables.md#hashicorpvaulttoken)

***

### hashicorpVaultEndpoint?

> `optional` **hashicorpVaultEndpoint**: `string`

Hashicorp Vault endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`hashicorpVaultEndpoint`](IEngineEnvironmentVariables.md#hashicorpvaultendpoint)

***

### loggingConnector?

> `optional` **loggingConnector**: `string`

The type of background task connector, can be a comma separated list: console, entity-storage.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`loggingConnector`](IEngineEnvironmentVariables.md#loggingconnector)

***

### backgroundTaskConnector?

> `optional` **backgroundTaskConnector**: `string`

The type of background task connector: entity-storage.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`backgroundTaskConnector`](IEngineEnvironmentVariables.md#backgroundtaskconnector)

***

### eventBusConnector?

> `optional` **eventBusConnector**: `string`

The type of event bus connector: local.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`eventBusConnector`](IEngineEnvironmentVariables.md#eventbusconnector)

***

### eventBusComponent?

> `optional` **eventBusComponent**: `string`

The type of event bus component: service.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`eventBusComponent`](IEngineEnvironmentVariables.md#eventbuscomponent)

***

### messagingEmailConnector?

> `optional` **messagingEmailConnector**: `string`

The type of messaging email connector: entity-storage, aws.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`messagingEmailConnector`](IEngineEnvironmentVariables.md#messagingemailconnector)

***

### messagingSmsConnector?

> `optional` **messagingSmsConnector**: `string`

The type of messaging sms connector: entity-storage, aws.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`messagingSmsConnector`](IEngineEnvironmentVariables.md#messagingsmsconnector)

***

### messagingPushNotificationConnector?

> `optional` **messagingPushNotificationConnector**: `string`

The type of messaging push notification connector: entity-storage, aws.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`messagingPushNotificationConnector`](IEngineEnvironmentVariables.md#messagingpushnotificationconnector)

***

### awsMessagingPushNotificationApplications?

> `optional` **awsMessagingPushNotificationApplications**: `string`

The applications for the push notifications JSON stringified array of IAwsApplicationSettings.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`awsMessagingPushNotificationApplications`](IEngineEnvironmentVariables.md#awsmessagingpushnotificationapplications)

***

### messagingComponent?

> `optional` **messagingComponent**: `string`

The type of messaging component: service.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`messagingComponent`](IEngineEnvironmentVariables.md#messagingcomponent)

***

### telemetryConnector?

> `optional` **telemetryConnector**: `string`

The type of telemetry connector: entity-storage.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`telemetryConnector`](IEngineEnvironmentVariables.md#telemetryconnector)

***

### faucetConnector?

> `optional` **faucetConnector**: `string`

The type of faucet connector: entity-storage, iota.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`faucetConnector`](IEngineEnvironmentVariables.md#faucetconnector)

***

### walletConnector?

> `optional` **walletConnector**: `string`

The type of wallet connector: entity-storage, iota.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`walletConnector`](IEngineEnvironmentVariables.md#walletconnector)

***

### nftConnector?

> `optional` **nftConnector**: `string`

The type of NFT connector: entity-storage, iota.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`nftConnector`](IEngineEnvironmentVariables.md#nftconnector)

***

### identityConnector?

> `optional` **identityConnector**: `string`

The type of identity connector: entity-storage, iota.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`identityConnector`](IEngineEnvironmentVariables.md#identityconnector)

***

### identityResolverConnector?

> `optional` **identityResolverConnector**: `string`

The type of identity resolver connector: entity-storage, iota.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`identityResolverConnector`](IEngineEnvironmentVariables.md#identityresolverconnector)

***

### verifiableStorageConnector?

> `optional` **verifiableStorageConnector**: `string`

The type of verifiable storage connector: entity-storage, iota.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`verifiableStorageConnector`](IEngineEnvironmentVariables.md#verifiablestorageconnector)

***

### iotaFaucetEndpoint?

> `optional` **iotaFaucetEndpoint**: `string`

IOTA Faucet Endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`iotaFaucetEndpoint`](IEngineEnvironmentVariables.md#iotafaucetendpoint)

***

### iotaNodeEndpoint?

> `optional` **iotaNodeEndpoint**: `string`

IOTA Node Endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`iotaNodeEndpoint`](IEngineEnvironmentVariables.md#iotanodeendpoint)

***

### iotaNetwork?

> `optional` **iotaNetwork**: `string`

IOTA network.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`iotaNetwork`](IEngineEnvironmentVariables.md#iotanetwork)

***

### iotaCoinType?

> `optional` **iotaCoinType**: `string`

IOTA coin type.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`iotaCoinType`](IEngineEnvironmentVariables.md#iotacointype)

***

### iotaExplorerEndpoint?

> `optional` **iotaExplorerEndpoint**: `string`

IOTA Explorer Endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`iotaExplorerEndpoint`](IEngineEnvironmentVariables.md#iotaexplorerendpoint)

***

### iotaGasStationEndpoint?

> `optional` **iotaGasStationEndpoint**: `string`

IOTA Gas Station Endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`iotaGasStationEndpoint`](IEngineEnvironmentVariables.md#iotagasstationendpoint)

***

### iotaGasStationAuthToken?

> `optional` **iotaGasStationAuthToken**: `string`

IOTA Gas Station Authentication Token.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`iotaGasStationAuthToken`](IEngineEnvironmentVariables.md#iotagasstationauthtoken)

***

### universalResolverEndpoint?

> `optional` **universalResolverEndpoint**: `string`

Universal Resolver Endpoint.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`universalResolverEndpoint`](IEngineEnvironmentVariables.md#universalresolverendpoint)

***

### identityProfileConnector?

> `optional` **identityProfileConnector**: `string`

The type of identity profile connector: entity-storage.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`identityProfileConnector`](IEngineEnvironmentVariables.md#identityprofileconnector)

***

### immutableProofVerificationMethodId?

> `optional` **immutableProofVerificationMethodId**: `string`

The identity verification method id to use with immutable proofs.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`immutableProofVerificationMethodId`](IEngineEnvironmentVariables.md#immutableproofverificationmethodid)

***

### attestationConnector?

> `optional` **attestationConnector**: `string`

The type of attestation connector: entity-storage, iota.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`attestationConnector`](IEngineEnvironmentVariables.md#attestationconnector)

***

### attestationVerificationMethodId?

> `optional` **attestationVerificationMethodId**: `string`

The identity verification method id to use with attestation.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`attestationVerificationMethodId`](IEngineEnvironmentVariables.md#attestationverificationmethodid)

***

### dataConverterConnectors?

> `optional` **dataConverterConnectors**: `string`

The type of the default data converters, can be a comma separated list: json, xml.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`dataConverterConnectors`](IEngineEnvironmentVariables.md#dataconverterconnectors)

***

### dataExtractorConnectors?

> `optional` **dataExtractorConnectors**: `string`

The type of the default data extractor, can be a comma separated list: json-path.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`dataExtractorConnectors`](IEngineEnvironmentVariables.md#dataextractorconnectors)

***

### federatedCatalogueCacheTtlMs?

> `optional` **federatedCatalogueCacheTtlMs**: `number`

Federated catalog TTL for the cache.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`federatedCatalogueCacheTtlMs`](IEngineEnvironmentVariables.md#federatedcataloguecachettlms)

***

### federatedCatalogueClearingHouseApproverList?

> `optional` **federatedCatalogueClearingHouseApproverList**: `string`

Federated catalog clearing house approver list, stringified array of DIDs.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`federatedCatalogueClearingHouseApproverList`](IEngineEnvironmentVariables.md#federatedcatalogueclearinghouseapproverlist)

***

### rightsManagementEnabled?

> `optional` **rightsManagementEnabled**: `string`

Is the rights management enabled, defaults to false.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`rightsManagementEnabled`](IEngineEnvironmentVariables.md#rightsmanagementenabled)

***

### taskSchedulerEnabled?

> `optional` **taskSchedulerEnabled**: `string`

Is the task scheduler enabled, defaults to true.

#### Inherited from

[`IEngineEnvironmentVariables`](IEngineEnvironmentVariables.md).[`taskSchedulerEnabled`](IEngineEnvironmentVariables.md#taskschedulerenabled)

***

### port?

> `optional` **port**: `string`

The port to serve the API from.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`port`](IEngineServerEnvironmentVariables.md#port)

***

### host?

> `optional` **host**: `string`

The host to serve the API from.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`host`](IEngineServerEnvironmentVariables.md#host)

***

### corsOrigins?

> `optional` **corsOrigins**: `string`

The CORS origins to allow, defaults to *.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`corsOrigins`](IEngineServerEnvironmentVariables.md#corsorigins)

***

### httpMethods?

> `optional` **httpMethods**: `string`

The CORS methods to allow, defaults to GET, POST, PUT, DELETE, OPTIONS.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`httpMethods`](IEngineServerEnvironmentVariables.md#httpmethods)

***

### httpAllowedHeaders?

> `optional` **httpAllowedHeaders**: `string`

The CORS headers to allow.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`httpAllowedHeaders`](IEngineServerEnvironmentVariables.md#httpallowedheaders)

***

### httpExposedHeaders?

> `optional` **httpExposedHeaders**: `string`

The CORS headers to expose.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`httpExposedHeaders`](IEngineServerEnvironmentVariables.md#httpexposedheaders)

***

### authAdminProcessorType?

> `optional` **authAdminProcessorType**: `string`

The type of auth admin processor to use on the API: entity-storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`authAdminProcessorType`](IEngineServerEnvironmentVariables.md#authadminprocessortype)

***

### authProcessorType?

> `optional` **authProcessorType**: `string`

The type of auth processor to use on the API: entity-storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`authProcessorType`](IEngineServerEnvironmentVariables.md#authprocessortype)

***

### authSigningKeyId?

> `optional` **authSigningKeyId**: `string`

The id of the key in the vault to use for signing in auth operations.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`authSigningKeyId`](IEngineServerEnvironmentVariables.md#authsigningkeyid)

***

### mimeTypeProcessors?

> `optional` **mimeTypeProcessors**: `string`

Additional MIME type processors to include, comma separated.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mimeTypeProcessors`](IEngineServerEnvironmentVariables.md#mimetypeprocessors)

***

### disableNodeIdentity?

> `optional` **disableNodeIdentity**: `string`

Disable Node Identity route processors.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`disableNodeIdentity`](IEngineServerEnvironmentVariables.md#disablenodeidentity)

***

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
