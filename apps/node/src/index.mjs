// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import path from 'node:path';
import { run } from '@twin.org/node-core';

await run({
	openApiSpecFile: path.resolve('docs/open-api/spec.json')
});
