// Builds src/data/api/reference.json from Portico Server's OpenAPI contract and the
// curated public list in src/data/api/public-api.json. Only curated operations are
// copied, so the site never publishes first-party-only routes.
//
// Usage: node scripts/sync-api.mjs <path to portico-server checkout>

import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const serverRoot = process.argv[2] ?? process.env.PORTICO_SERVER_DIR;
if (!serverRoot) {
  console.error('Usage: node scripts/sync-api.mjs <path to portico-server checkout>');
  process.exit(1);
}

const spec = JSON.parse(await readFile(resolve(serverRoot, 'server/api/portico.openapi.json'), 'utf8'));
const curationPath = process.env.PORTICO_API_CURATION ?? resolve(projectRoot, 'src/data/api/public-api.json');
const curation = JSON.parse(await readFile(curationPath, 'utf8'));
const serverCommit = execFileSync('git', ['-C', serverRoot, 'rev-parse', '--short', 'HEAD'], { encoding: 'utf8' }).trim();

const SAFE_INT = 9007199254740991;
const KEEP_EXTENSIONS = new Set(['x-scope', 'x-access', 'x-error-codes', 'x-max-body-bytes']);

// Drop the full-range integer bounds the generator adds to every integer; they carry no meaning.
const clean = (value) => {
  if (Array.isArray(value)) return value.map(clean);
  if (!value || typeof value !== 'object') return value;
  const out = {};
  for (const [key, child] of Object.entries(value)) {
    if ((key === 'maximum' && child === SAFE_INT) || (key === 'minimum' && child === -SAFE_INT)) continue;
    out[key] = clean(child);
  }
  return out;
};

const operations = [];
const missing = [];
for (const entry of curation.operations) {
  const operation = spec.paths?.[entry.path]?.[entry.method];
  if (!operation || operation.operationId !== entry.operationId) {
    missing.push(`${entry.method.toUpperCase()} ${entry.path} (${entry.operationId})`);
    continue;
  }
  const extensions = Object.fromEntries(Object.entries(operation).filter(([key]) => KEEP_EXTENSIONS.has(key)));
  operations.push({
    operationId: entry.operationId,
    method: entry.method,
    path: entry.path,
    group: entry.group,
    core: Boolean(entry.core),
    title: entry.title,
    description: entry.description ?? '',
    notes: entry.notes ?? [],
    parameters: clean(operation.parameters ?? []).map((parameter) => ({
      ...parameter,
      description: entry.params?.[parameter.name] ?? parameter.description ?? ''
    })),
    requestBody: clean(operation.requestBody ?? null),
    responses: clean(operation.responses ?? {}),
    scope: extensions['x-scope'],
    access: extensions['x-access'],
    errorCodes: extensions['x-error-codes'] ?? [],
    maxBodyBytes: extensions['x-max-body-bytes'] ?? null
  });
}

if (missing.length > 0) {
  console.error(`Curated operations missing from the server contract:\n${missing.join('\n')}`);
  process.exit(1);
}

const groupIds = new Set(curation.groups.map((group) => group.id));
const orphans = operations.filter((operation) => !groupIds.has(operation.group));
if (orphans.length > 0) {
  console.error(`Operations reference unknown groups: ${orphans.map((operation) => operation.operationId).join(', ')}`);
  process.exit(1);
}

const reference = {
  info: { title: spec.info?.title ?? 'Portico API', version: spec.info?.version ?? '1', openapi: spec.openapi, serverCommit },
  groups: curation.groups,
  operations
};

await writeFile(resolve(projectRoot, 'src/data/api/reference.json'), `${JSON.stringify(reference)}\n`);
console.log(`Wrote ${operations.length} public operations in ${curation.groups.length} groups from portico-server ${serverCommit}.`);
