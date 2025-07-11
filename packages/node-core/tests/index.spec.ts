// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { AuthenticationUser } from "@twin.org/api-auth-entity-storage-service";
import { ComponentFactory, Factory } from "@twin.org/core";
import { MemoryStateStorage } from "@twin.org/engine-core";
import { AuthenticationComponentType } from "@twin.org/engine-server-types";
import {
	AttestationConnectorType,
	BackgroundTaskConnectorType,
	BlobStorageConnectorType,
	EntityStorageConnectorType,
	FaucetConnectorType,
	IdentityConnectorType,
	IdentityProfileConnectorType,
	IdentityResolverConnectorType,
	LoggingConnectorType,
	NftConnectorType,
	TelemetryConnectorType,
	VaultConnectorType,
	VerifiableStorageConnectorType,
	WalletConnectorType
} from "@twin.org/engine-types";
import type { MemoryEntityStorageConnector } from "@twin.org/entity-storage-connector-memory";
import { EntityStorageConnectorFactory } from "@twin.org/entity-storage-models";
import type {
	IdentityDocument,
	IdentityProfile
} from "@twin.org/identity-connector-entity-storage";
import type { VaultKey, VaultSecret } from "@twin.org/vault-connector-entity-storage";
import type { INodeOptions } from "../src/models/INodeOptions";
import { buildConfiguration } from "../src/node";
import { start } from "../src/server";
import { initialiseLocales } from "../src/utils";

describe("node-core", () => {
	beforeEach(() => {
		Factory.clearFactories();
	});

	test("Can start and bootstrap the server with minimal config in memory", async () => {
		const envVars: { [id: string]: string } = {
			TWIN_NODE_DEBUG: "true",
			TWIN_NODE_ENTITY_STORAGE_CONNECTOR_TYPE: EntityStorageConnectorType.Memory,
			TWIN_NODE_TASK_SCHEDULER_ENABLED: "false"
		};

		await initialiseLocales("./dist/locales/");

		const memoryStateStorage = new MemoryStateStorage(false, {
			nodeIdentity: "bob",
			componentStates: {}
		});

		const nodeOptions: INodeOptions = { envPrefix: "TWIN_NODE_", stateStorage: memoryStateStorage };

		const { engineServerConfig, nodeEnvVars } = await buildConfiguration(envVars, nodeOptions, {
			name: "foo",
			version: "0.0.0"
		});

		const startResult = await start(nodeOptions, engineServerConfig, nodeEnvVars);

		expect(startResult).toBeDefined();

		const res = await fetch("http://localhost:3000/info");
		expect(await res.json()).toEqual({
			name: "foo",
			version: "0.0.0"
		});

		expect(ComponentFactory.names()).toEqual(["logging", "information"]);

		const buildRestRoutes = startResult?.server?.getRestRoutes() ?? [];
		expect(buildRestRoutes.map(r => r.path)).toEqual([
			"/",
			"/info",
			"/health",
			"/spec",
			"/logging",
			"/logging"
		]);

		await startResult?.server.stop();
	});

	test("Can start and bootstrap the server in memory", async () => {
		const envVars: { [id: string]: string } = {
			TWIN_NODE_ENTITY_STORAGE_CONNECTOR_TYPE: EntityStorageConnectorType.Memory,
			TWIN_NODE_BLOB_STORAGE_CONNECTOR_TYPE: BlobStorageConnectorType.Memory,
			TWIN_NODE_LOGGING_CONNECTOR: LoggingConnectorType.EntityStorage,
			TWIN_NODE_TELEMETRY_CONNECTOR: TelemetryConnectorType.EntityStorage,
			TWIN_NODE_BACKGROUND_TASK_CONNECTOR: BackgroundTaskConnectorType.EntityStorage,
			TWIN_NODE_VAULT_CONNECTOR: VaultConnectorType.EntityStorage,
			TWIN_NODE_IDENTITY_CONNECTOR: IdentityConnectorType.EntityStorage,
			TWIN_NODE_IDENTITY_RESOLVER_CONNECTOR: IdentityResolverConnectorType.EntityStorage,
			TWIN_NODE_IDENTITY_PROFILE_CONNECTOR: IdentityProfileConnectorType.EntityStorage,
			TWIN_NODE_NFT_CONNECTOR: NftConnectorType.EntityStorage,
			TWIN_NODE_VERIFIABLE_STORAGE_CONNECTOR: VerifiableStorageConnectorType.EntityStorage,
			TWIN_NODE_ATTESTATION_CONNECTOR: AttestationConnectorType.Nft,
			TWIN_NODE_FAUCET_CONNECTOR: FaucetConnectorType.EntityStorage,
			TWIN_NODE_WALLET_CONNECTOR: WalletConnectorType.EntityStorage,
			TWIN_NODE_DATA_CONVERTER_CONNECTORS: "json,xml",
			TWIN_NODE_DATA_EXTRACTOR_CONNECTORS: "json-path",
			TWIN_NODE_AUTH_PROCESSOR_TYPE: AuthenticationComponentType.EntityStorage,
			TWIN_NODE_BLOB_STORAGE_ENABLE_ENCRYPTION: "true",
			TWIN_NODE_FEATURES: "node-identity,node-user",
			TWIN_NODE_RIGHTS_MANAGEMENT_ENABLED: "true"
		};

		await initialiseLocales("./dist/locales/");

		const memoryStateStorage = new MemoryStateStorage();

		const nodeOptions: INodeOptions = { envPrefix: "TWIN_NODE_", stateStorage: memoryStateStorage };

		const { engineServerConfig, nodeEnvVars } = await buildConfiguration(envVars, nodeOptions, {
			name: "foo",
			version: "0.0.0"
		});

		const startResult = await start(nodeOptions, engineServerConfig, nodeEnvVars);

		expect(startResult).toBeDefined();

		const res = await fetch("http://localhost:3000/info");
		expect(await res.json()).toEqual({
			name: "foo",
			version: "0.0.0"
		});

		expect(ComponentFactory.names()).toEqual([
			"logging",
			"task-scheduler",
			"telemetry",
			"blob",
			"verifiable",
			"identity",
			"identity-resolver",
			"identity-profile",
			"nft",
			"immutable-proof",
			"attestation",
			"aig",
			"ais",
			"data-processing",
			"documents",
			"fedcat",
			"pap",
			"rights-management",
			"authentication-entity-storage",
			"information"
		]);

		const buildRestRoutes = startResult?.server?.getRestRoutes() ?? [];
		expect(buildRestRoutes.map(r => r.path)).toEqual([
			"/",
			"/info",
			"/health",
			"/spec",
			"/authentication/login",
			"/authentication/logout",
			"/authentication/refresh",
			"/logging",
			"/logging",
			"/telemetry/metric",
			"/telemetry/metric/:id",
			"/telemetry/metric/:id",
			"/telemetry/metric/:id/value",
			"/telemetry/metric/:id",
			"/telemetry/metric",
			"/telemetry/metric/:id/value",
			"/blob",
			"/blob/:id",
			"/blob/:id/content",
			"/blob/:id",
			"/blob/:id",
			"/blob",
			"/identity",
			"/identity/:identity/verification-method",
			"/identity/:identity/verification-method/:verificationMethodId",
			"/identity/:identity/service",
			"/identity/:identity/service/:serviceId",
			"/identity/:identity/verifiable-credential",
			"/identity/verifiable-credential/verify",
			"/identity/:identity/verifiable-credential/revoke/:revocationIndex",
			"/identity/:identity/verifiable-credential/unrevoke/:revocationIndex",
			"/identity/:identity/verifiable-presentation",
			"/identity/verifiable-presentation/verify",
			"/identity/:identity/proof",
			"/identity/proof/verify",
			"/identity/:identity",
			"/identity/profile",
			"/identity/profile",
			"/identity/profile/:identity/public",
			"/identity/profile",
			"/identity/profile",
			"/identity/profile/query",
			"/nft",
			"/nft/:id",
			"/nft/:id",
			"/nft/:id/transfer",
			"/nft/:id",
			"/verifiable",
			"/verifiable/:id",
			"/verifiable/:id",
			"/verifiable/:id",
			"/attestation",
			"/attestation/:id",
			"/attestation/:id/transfer",
			"/attestation/:id",
			"/immutable-proof",
			"/immutable-proof/:id",
			"/immutable-proof/:id/verify",
			"/aig",
			"/aig/:id",
			"/aig/:id",
			"/aig",
			"/ais",
			"/ais/:id",
			"/ais/:id",
			"/ais/:id",
			"/ais",
			"/ais/:id",
			"/ais/:id/:entryId",
			"/ais/:id/:entryId/object",
			"/ais/:id/:entryId",
			"/ais/:id/:entryId",
			"/ais/:id/entries",
			"/ais/:id/entries/objects",
			"/data-processing/rule-group/:id",
			"/data-processing/rule-group/:id",
			"/data-processing/rule-group/:id",
			"/data-processing/extract",
			"/data-processing/convert",
			"/data-processing/rule-group",
			"/documents",
			"/documents/:auditableItemGraphDocumentId",
			"/documents/:auditableItemGraphDocumentId",
			"/documents/:auditableItemGraphDocumentId/:revision",
			"/documents/:auditableItemGraphDocumentId/:revision",
			"/documents",
			"/federated-catalogue/participant-credentials",
			"/federated-catalogue/service-offering-credentials",
			"/federated-catalogue/data-resource-credentials",
			"/federated-catalogue/data-space-connector-credentials",
			"/federated-catalogue/participants",
			"/federated-catalogue/participants/:id",
			"/federated-catalogue/service-offerings",
			"/federated-catalogue/service-offerings/:id",
			"/federated-catalogue/data-resources",
			"/federated-catalogue/data-resources/:id",
			"/federated-catalogue/data-space-connectors",
			"/federated-catalogue/data-space-connectors/:id",
			"/rights-management/pap",
			"/rights-management/pap/:id",
			"/rights-management/pap/:id",
			"/rights-management/pap/:id",
			"/rights-management/pap/query"
		]);

		if (startResult?.engine) {
			const memory = await memoryStateStorage.load(startResult?.engine);

			const identityDocumentEntityStorage =
				EntityStorageConnectorFactory.get<MemoryEntityStorageConnector<IdentityDocument>>(
					"identity-document"
				);
			const identityDocumentStore = identityDocumentEntityStorage.getStore();

			expect(identityDocumentStore.length).toEqual(1);
			expect(identityDocumentStore[0].id).toEqual(memory?.nodeIdentity);
			expect(identityDocumentStore[0].document.assertionMethod?.length).toEqual(2);

			const vaultSecretStorage =
				EntityStorageConnectorFactory.get<MemoryEntityStorageConnector<VaultSecret>>(
					"vault-secret"
				);
			const secretStore = vaultSecretStorage.getStore();
			expect(secretStore[0].id).toBeDefined();
			expect((secretStore[0].data as string).split(" ").length).toEqual(24);

			const vaultKeyStorage =
				EntityStorageConnectorFactory.get<MemoryEntityStorageConnector<VaultKey>>("vault-key");
			const keyStore = vaultKeyStorage.getStore();
			expect(keyStore.length).toEqual(5);

			expect(keyStore[0].id).toEqual(`${identityDocumentStore[0].id}/did`);
			expect(keyStore[1].id).toEqual(`${identityDocumentStore[0].id}/auth-signing`);
			expect(keyStore[2].id).toEqual(`${identityDocumentStore[0].id}/blob-encryption`);
			expect(keyStore[3].id).toEqual(`${identityDocumentStore[0].id}/attestation-assertion`);
			expect(keyStore[4].id).toEqual(`${identityDocumentStore[0].id}/immutable-proof-assertion`);

			const authenticationUserEntityStorage =
				EntityStorageConnectorFactory.get<MemoryEntityStorageConnector<AuthenticationUser>>(
					"authentication-user"
				);
			const authUserStore = authenticationUserEntityStorage.getStore();
			expect(authUserStore.length).toEqual(1);
			expect(authUserStore[0].identity).toEqual(identityDocumentStore[0].id);

			const identityProfileEntityStorage =
				EntityStorageConnectorFactory.get<MemoryEntityStorageConnector<IdentityProfile>>(
					"identity-profile"
				);
			const identityProfileStore = identityProfileEntityStorage.getStore();
			expect(authUserStore.length).toEqual(1);
			expect(identityProfileStore[0].identity).toEqual(identityDocumentStore[0].id);
		}

		await startResult?.server.stop();
	});

	test("Can start and bootstrap the server in memory, and restart with existing data", async () => {
		const envVars: { [key: string]: string } = {
			TWIN_NODE_ENTITY_STORAGE_CONNECTOR_TYPE: EntityStorageConnectorType.Memory,
			TWIN_NODE_BLOB_STORAGE_CONNECTOR_TYPE: BlobStorageConnectorType.Memory,
			TWIN_NODE_LOGGING_CONNECTOR: LoggingConnectorType.EntityStorage,
			TWIN_NODE_TELEMETRY_CONNECTOR: TelemetryConnectorType.EntityStorage,
			TWIN_NODE_BACKGROUND_TASK_CONNECTOR: BackgroundTaskConnectorType.EntityStorage,
			TWIN_NODE_VAULT_CONNECTOR: VaultConnectorType.EntityStorage,
			TWIN_NODE_IDENTITY_CONNECTOR: IdentityConnectorType.EntityStorage,
			TWIN_NODE_IDENTITY_RESOLVER_CONNECTOR: IdentityResolverConnectorType.EntityStorage,
			TWIN_NODE_IDENTITY_PROFILE_CONNECTOR: IdentityProfileConnectorType.EntityStorage,
			TWIN_NODE_NFT_CONNECTOR: NftConnectorType.EntityStorage,
			TWIN_NODE_VERIFIABLE_STORAGE_CONNECTOR: VerifiableStorageConnectorType.EntityStorage,
			TWIN_NODE_ATTESTATION_CONNECTOR: AttestationConnectorType.Nft,
			TWIN_NODE_FAUCET_CONNECTOR: FaucetConnectorType.EntityStorage,
			TWIN_NODE_WALLET_CONNECTOR: WalletConnectorType.EntityStorage,
			TWIN_NODE_DATA_CONVERTER_CONNECTORS: "json,xml",
			TWIN_NODE_DATA_EXTRACTOR_CONNECTORS: "json-path",
			TWIN_NODE_AUTH_PROCESSOR_TYPE: AuthenticationComponentType.EntityStorage,
			TWIN_NODE_BLOB_STORAGE_ENABLE_ENCRYPTION: "true",
			TWIN_NODE_FEATURES: "node-identity,node-user",
			TWIN_NODE_RIGHTS_MANAGEMENT_ENABLED: "true"
		};

		await initialiseLocales("./dist/locales/");

		const memoryStateStorage = new MemoryStateStorage();

		const nodeOptions: INodeOptions = { envPrefix: "TWIN_NODE_", stateStorage: memoryStateStorage };

		const { engineServerConfig, nodeEnvVars } = await buildConfiguration(envVars, nodeOptions, {
			name: "foo",
			version: "0.0.0"
		});

		const startResult = await start(nodeOptions, engineServerConfig, nodeEnvVars);

		await startResult?.server.stop();

		if (startResult?.engine) {
			const mem = await memoryStateStorage.load(startResult?.engine);

			const memoryStateStorage2 = new MemoryStateStorage(false, {
				nodeIdentity: mem?.nodeIdentity,
				componentStates: {}
			});

			const startResult2 = await start(
				{ envPrefix: "TWIN_NODE_", stateStorage: memoryStateStorage2 },
				engineServerConfig,
				nodeEnvVars
			);

			await startResult2?.server.stop();

			expect(memoryStateStorage2).toEqual(memoryStateStorage);

			const memory = await memoryStateStorage.load(startResult?.engine);

			const identityDocumentEntityStorage =
				EntityStorageConnectorFactory.get<MemoryEntityStorageConnector<IdentityDocument>>(
					"identity-document"
				);
			const identityDocumentStore = identityDocumentEntityStorage.getStore();

			expect(identityDocumentStore.length).toEqual(1);
			expect(identityDocumentStore[0].id).toEqual(memory?.nodeIdentity);
			expect(identityDocumentStore[0].document.assertionMethod?.length).toEqual(2);

			const vaultSecretStorage =
				EntityStorageConnectorFactory.get<MemoryEntityStorageConnector<VaultSecret>>(
					"vault-secret"
				);
			const secretStore = vaultSecretStorage.getStore();
			expect(secretStore[0].id).toBeDefined();
			expect((secretStore[0].data as string).split(" ").length).toEqual(24);

			const vaultKeyStorage =
				EntityStorageConnectorFactory.get<MemoryEntityStorageConnector<VaultKey>>("vault-key");
			const keyStore = vaultKeyStorage.getStore();
			expect(keyStore.length).toEqual(5);

			expect(keyStore[0].id).toEqual(`${identityDocumentStore[0].id}/did`);
			expect(keyStore[1].id).toEqual(`${identityDocumentStore[0].id}/auth-signing`);
			expect(keyStore[2].id).toEqual(`${identityDocumentStore[0].id}/blob-encryption`);
			expect(keyStore[3].id).toEqual(`${identityDocumentStore[0].id}/attestation-assertion`);
			expect(keyStore[4].id).toEqual(`${identityDocumentStore[0].id}/immutable-proof-assertion`);

			const authenticationUserEntityStorage =
				EntityStorageConnectorFactory.get<MemoryEntityStorageConnector<AuthenticationUser>>(
					"authentication-user"
				);
			const authUserStore = authenticationUserEntityStorage.getStore();
			expect(authUserStore.length).toEqual(1);
			expect(authUserStore[0].identity).toEqual(identityDocumentStore[0].id);

			const identityProfileEntityStorage =
				EntityStorageConnectorFactory.get<MemoryEntityStorageConnector<IdentityProfile>>(
					"identity-profile"
				);
			const identityProfileStore = identityProfileEntityStorage.getStore();
			expect(authUserStore.length).toEqual(1);
			expect(identityProfileStore[0].identity).toEqual(identityDocumentStore[0].id);
		}
	});

	test("Can start a server and intercept custom callbacks", async () => {
		const envVars: { [id: string]: string } = {
			TWIN_NODE_DEBUG: "true",
			TWIN_NODE_ENTITY_STORAGE_CONNECTOR_TYPE: EntityStorageConnectorType.Memory,
			TWIN_NODE_TASK_SCHEDULER_ENABLED: "false"
		};

		await initialiseLocales("./dist/locales/");

		const memoryStateStorage = new MemoryStateStorage(false, {
			nodeIdentity: "bob",
			componentStates: {}
		});

		let extendEnvVarsCalled = false;
		let extendConfigCalled = false;
		let extendEngineCalled = false;
		let extendEngineServerCalled = false;

		const nodeOptions: INodeOptions = {
			envPrefix: "TWIN_NODE_",
			extendEnvVars: async env => {
				extendEnvVarsCalled = true;
			},
			extendConfig: async config => {
				extendConfigCalled = true;
			},
			extendEngine: async engine => {
				extendEngineCalled = true;
			},
			extendEngineServer: async server => {
				extendEngineServerCalled = true;
			},
			stateStorage: memoryStateStorage
		};

		const { engineServerConfig, nodeEnvVars } = await buildConfiguration(envVars, nodeOptions, {
			name: "foo",
			version: "0.0.0"
		});

		const startResult = await start(nodeOptions, engineServerConfig, nodeEnvVars);

		expect(startResult).toBeDefined();

		const res = await fetch("http://localhost:3000/info");
		expect(await res.json()).toEqual({
			name: "foo",
			version: "0.0.0"
		});

		expect(extendEnvVarsCalled).toBe(true);
		expect(extendConfigCalled).toBe(true);
		expect(extendEngineCalled).toBe(true);
		expect(extendEngineServerCalled).toBe(true);

		expect(ComponentFactory.names()).toEqual(["logging", "information"]);

		const buildRestRoutes = startResult?.server?.getRestRoutes() ?? [];
		expect(buildRestRoutes.map(r => r.path)).toEqual([
			"/",
			"/info",
			"/health",
			"/spec",
			"/logging",
			"/logging"
		]);

		await startResult?.server.stop();
	});

	test("Can start a server and load a custom env file", async () => {
		const envVars: { [id: string]: string } = {
			TWIN_NODE_DEBUG: "false",
			TWIN_NODE_ENTITY_STORAGE_CONNECTOR_TYPE: EntityStorageConnectorType.Memory,
			TWIN_NODE_TASK_SCHEDULER_ENABLED: "false"
		};

		await initialiseLocales("./dist/locales/");

		const memoryStateStorage = new MemoryStateStorage(false, {
			nodeIdentity: "bob",
			componentStates: {}
		});

		const nodeOptions: INodeOptions = {
			envPrefix: "TWIN_NODE_",
			envFilenames: ["tests/.test-env"],
			stateStorage: memoryStateStorage
		};

		const { engineServerConfig, nodeEnvVars } = await buildConfiguration(envVars, nodeOptions, {
			name: "foo",
			version: "0.0.0"
		});

		const startResult = await start(nodeOptions, engineServerConfig, nodeEnvVars);

		expect(startResult).toBeDefined();

		const res = await fetch("http://localhost:3000/info");
		expect(await res.json()).toEqual({
			name: "foo",
			version: "0.0.0"
		});

		expect(engineServerConfig.debug).toBe(true);

		expect(ComponentFactory.names()).toEqual(["logging", "information"]);

		const buildRestRoutes = startResult?.server?.getRestRoutes() ?? [];
		expect(buildRestRoutes.map(r => r.path)).toEqual([
			"/",
			"/info",
			"/health",
			"/spec",
			"/logging",
			"/logging"
		]);

		await startResult?.server.stop();
	});

	test("Can start a server and load a custom config file", async () => {
		const envVars: { [id: string]: string } = {
			TWIN_NODE_DEBUG: "false"
		};

		await initialiseLocales("./dist/locales/");

		const memoryStateStorage = new MemoryStateStorage(false, {
			nodeIdentity: "bob",
			componentStates: {}
		});

		const nodeOptions: INodeOptions = {
			envPrefix: "TWIN_NODE_",
			configFilenames: ["tests/test-config.json"],
			stateStorage: memoryStateStorage
		};

		const { engineServerConfig, nodeEnvVars } = await buildConfiguration(envVars, nodeOptions, {
			name: "foo",
			version: "0.0.0"
		});

		const startResult = await start(nodeOptions, engineServerConfig, nodeEnvVars);

		expect(startResult).toBeDefined();

		const res = await fetch("http://localhost:3000/info");
		expect(await res.json()).toEqual({
			name: "foo",
			version: "0.0.0"
		});

		expect(engineServerConfig.debug).toBe(true);

		expect(ComponentFactory.names()).toEqual(["logging", "task-scheduler", "information"]);

		const buildRestRoutes = startResult?.server?.getRestRoutes() ?? [];
		expect(buildRestRoutes.map(r => r.path)).toEqual([
			"/",
			"/info",
			"/health",
			"/spec",
			"/logging",
			"/logging"
		]);

		await startResult?.server.stop();
	});

	test("Can start a server and load an embedded config file", async () => {
		const envVars: { [id: string]: string } = {
			TWIN_NODE_TEST_EMBEDDED: "@file:tests/embedded.json"
		};

		await initialiseLocales("./dist/locales/");

		const memoryStateStorage = new MemoryStateStorage(false, {
			nodeIdentity: "bob",
			componentStates: {}
		});

		const nodeOptions: INodeOptions = {
			envPrefix: "TWIN_NODE_",
			stateStorage: memoryStateStorage
		};

		const { engineServerConfig, nodeEnvVars } = await buildConfiguration(envVars, nodeOptions, {
			name: "foo",
			version: "0.0.0"
		});

		const startResult = await start(nodeOptions, engineServerConfig, nodeEnvVars);

		expect(startResult).toBeDefined();

		expect(nodeEnvVars.testEmbedded).toEqual({
			foo: "bar"
		});
	});
});
