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
import type { INodeVariables } from "../src/models/INodeVariables";
import { start } from "../src/server";
import { initialiseLocales } from "../src/utils";

describe("node-core", () => {
	beforeEach(() => {
		Factory.clearFactories();
	});

	test("Can start and bootstrap the server with minimal config in memory", async () => {
		const config: INodeVariables = {
			debug: "true",
			entityStorageConnectorType: EntityStorageConnectorType.Memory
		};

		await initialiseLocales("./dist/locales/");

		const memoryStateStorage = new MemoryStateStorage(false, {
			nodeIdentity: "bob",
			componentStates: {}
		});

		const startResult = await start(
			{
				name: "foo",
				version: "0.0.0"
			},
			"TWIN_NODE_",
			config,
			"",
			memoryStateStorage
		);

		expect(startResult).toBeDefined();

		const res = await fetch("http://localhost:3000/info");
		expect(await res.json()).toEqual({
			name: "foo",
			version: "0.0.0"
		});

		expect(ComponentFactory.names()).toEqual([
			"logging",
			"pap",
			"rights-management",
			"information"
		]);

		const buildRestRoutes = startResult?.server?.getRestRoutes() ?? [];
		expect(buildRestRoutes.map(r => r.path)).toEqual([
			"/",
			"/info",
			"/health",
			"/spec",
			"logging/",
			"logging/",
			"rights-management/pap/",
			"rights-management/pap/:id",
			"rights-management/pap/:id",
			"rights-management/pap/:id",
			"rights-management/pap/query"
		]);

		await startResult?.server.stop();
	});

	test("Can start and bootstrap the server in memory", async () => {
		const config: INodeVariables = {
			entityStorageConnectorType: EntityStorageConnectorType.Memory,
			blobStorageConnectorType: BlobStorageConnectorType.Memory,
			loggingConnector: LoggingConnectorType.EntityStorage,
			telemetryConnector: TelemetryConnectorType.EntityStorage,
			backgroundTaskConnector: BackgroundTaskConnectorType.EntityStorage,
			vaultConnector: VaultConnectorType.EntityStorage,
			identityConnector: IdentityConnectorType.EntityStorage,
			identityResolverConnector: IdentityResolverConnectorType.EntityStorage,
			identityProfileConnector: IdentityProfileConnectorType.EntityStorage,
			nftConnector: NftConnectorType.EntityStorage,
			verifiableStorageConnector: VerifiableStorageConnectorType.EntityStorage,
			attestationConnector: AttestationConnectorType.Nft,
			faucetConnector: FaucetConnectorType.EntityStorage,
			walletConnector: WalletConnectorType.EntityStorage,
			dataConverterConnectors: "json,xml",
			dataExtractorConnectors: "json-path",
			authProcessorType: AuthenticationComponentType.EntityStorage,
			blobStorageEnableEncryption: "true",
			features: "node-identity,node-user"
		};

		await initialiseLocales("./dist/locales/");

		const memoryStateStorage = new MemoryStateStorage();

		const startResult = await start(
			{
				name: "foo",
				version: "0.0.0"
			},
			"TWIN_NODE_",
			config,
			"",
			memoryStateStorage
		);

		expect(startResult).toBeDefined();

		const res = await fetch("http://localhost:3000/info");
		expect(await res.json()).toEqual({
			name: "foo",
			version: "0.0.0"
		});

		expect(ComponentFactory.names()).toEqual([
			"logging",
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
			"authentication/login",
			"authentication/logout",
			"authentication/refresh",
			"logging/",
			"logging/",
			"telemetry/metric",
			"telemetry/metric/:id",
			"telemetry/metric/:id",
			"telemetry/metric/:id/value",
			"telemetry/metric/:id",
			"telemetry/metric",
			"telemetry/metric/:id/value",
			"blob/",
			"blob/:id",
			"blob/:id/content",
			"blob/:id",
			"blob/:id",
			"blob/",
			"identity/",
			"identity/:identity/verification-method",
			"identity/:identity/verification-method/:verificationMethodId",
			"identity/:identity/service",
			"identity/:identity/service/:serviceId",
			"identity/:identity/verifiable-credential",
			"identity/verifiable-credential/verify",
			"identity/:identity/verifiable-credential/revoke/:revocationIndex",
			"identity/:identity/verifiable-credential/unrevoke/:revocationIndex",
			"identity/:identity/verifiable-presentation",
			"identity/verifiable-presentation/verify",
			"identity/:identity/proof",
			"identity/proof/verify",
			"identity/:identity",
			"identity/profile/",
			"identity/profile/",
			"identity/profile/:identity/public",
			"identity/profile/",
			"identity/profile/",
			"identity/profile/query/",
			"nft/",
			"nft/:id",
			"nft/:id",
			"nft/:id/transfer",
			"nft/:id",
			"verifiable/",
			"verifiable/:id",
			"verifiable/:id",
			"verifiable/:id",
			"attestation/",
			"attestation/:id",
			"attestation/:id/transfer",
			"attestation/:id",
			"immutable-proof/",
			"immutable-proof/:id",
			"immutable-proof/:id/verify",
			"aig/",
			"aig/:id",
			"aig/:id",
			"aig/",
			"ais/",
			"ais/:id",
			"ais/:id",
			"ais/:id",
			"ais/",
			"ais/:id",
			"ais/:id/:entryId",
			"ais/:id/:entryId/object",
			"ais/:id/:entryId",
			"ais/:id/:entryId",
			"ais/:id/entries",
			"ais/:id/entries/objects",
			"data-processing/rule-group/:id",
			"data-processing/rule-group/:id",
			"data-processing/rule-group/:id",
			"data-processing/extract",
			"data-processing/convert",
			"data-processing/rule-group",
			"documents/",
			"documents/:auditableItemGraphDocumentId",
			"documents/:auditableItemGraphDocumentId",
			"documents/:auditableItemGraphDocumentId/:revision",
			"documents/:auditableItemGraphDocumentId/:revision",
			"documents/",
			"federated-catalogue/participant-credentials",
			"federated-catalogue/service-offering-credentials",
			"federated-catalogue/data-resource-credentials",
			"federated-catalogue/data-space-connector-credentials",
			"federated-catalogue/participants",
			"federated-catalogue/participants/:id",
			"federated-catalogue/service-offerings",
			"federated-catalogue/service-offerings/:id",
			"federated-catalogue/data-resources",
			"federated-catalogue/data-resources/:id",
			"federated-catalogue/data-space-connectors",
			"federated-catalogue/data-space-connectors/:id",
			"rights-management/pap/",
			"rights-management/pap/:id",
			"rights-management/pap/:id",
			"rights-management/pap/:id",
			"rights-management/pap/query"
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
		const config: INodeVariables = {
			entityStorageConnectorType: EntityStorageConnectorType.Memory,
			blobStorageConnectorType: BlobStorageConnectorType.Memory,
			loggingConnector: LoggingConnectorType.EntityStorage,
			telemetryConnector: TelemetryConnectorType.EntityStorage,
			backgroundTaskConnector: BackgroundTaskConnectorType.EntityStorage,
			vaultConnector: VaultConnectorType.EntityStorage,
			identityConnector: IdentityConnectorType.EntityStorage,
			identityResolverConnector: IdentityResolverConnectorType.EntityStorage,
			identityProfileConnector: IdentityProfileConnectorType.EntityStorage,
			nftConnector: NftConnectorType.EntityStorage,
			verifiableStorageConnector: VerifiableStorageConnectorType.EntityStorage,
			attestationConnector: AttestationConnectorType.Nft,
			faucetConnector: FaucetConnectorType.EntityStorage,
			walletConnector: WalletConnectorType.EntityStorage,
			dataConverterConnectors: "json,xml",
			dataExtractorConnectors: "json-path",
			authProcessorType: AuthenticationComponentType.EntityStorage,
			blobStorageEnableEncryption: "true",
			features: "node-identity,node-user"
		};

		await initialiseLocales("./dist/locales/");

		const memoryStateStorage = new MemoryStateStorage();

		const startResult = await start(
			{
				name: "foo",
				version: "0.0.0"
			},
			"TWIN_NODE_",
			config,
			"",
			memoryStateStorage
		);

		await startResult?.server.stop();

		if (startResult?.engine) {
			const mem = await memoryStateStorage.load(startResult?.engine);

			const memoryStateStorage2 = new MemoryStateStorage(false, {
				nodeIdentity: mem?.nodeIdentity,
				componentStates: {}
			});

			const startResult2 = await start(
				{
					name: "foo",
					version: "0.0.0"
				},
				"TWIN_NODE_",
				config,
				"",
				memoryStateStorage2
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
});
