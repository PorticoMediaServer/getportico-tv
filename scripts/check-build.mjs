import { access, readFile, readdir } from 'node:fs/promises';
const root = new URL('../dist/', import.meta.url);
const required = [
  'index.html',
  'features/index.html',
  'download/index.html',
  'docs/index.html',
  'developers/index.html',
  'privacy/index.html',
  'terms/index.html',
  'license/index.html',
  '404.html',
  'sitemap-index.xml'
];

await Promise.all(required.map((file) => access(new URL(file, root))));

const downloadHtml = await readFile(new URL('download/index.html', root), 'utf8');
const labels = [...downloadHtml.matchAll(/class="download-(?:action|status)[^"]*"[^>]*>([^<]+)</g)].map((match) => match[1].trim());
const invalidLabels = labels.filter((label) => label !== 'Download' && label !== 'Coming soon');
if (labels.length < 10 || invalidLabels.length > 0) {
  throw new Error(`Invalid download actions: ${invalidLabels.join(', ') || 'missing client actions'}`);
}

for (const asset of ['brand/portico-wordmark-white.svg', 'brand/portico-wordmark-black.svg', 'media/portico-home.png', 'media/portico-detail.png']) {
  await access(new URL(asset, root));
}

const docsRoot = new URL('docs/', root);
const docsEntries = await readdir(docsRoot, { recursive: true });
const articleCount = docsEntries.filter((entry) => entry.endsWith('index.html')).length;
if (articleCount < 25) {
  throw new Error(`Documentation build is too small: ${articleCount} generated pages`);
}

const allEntries = await readdir(root, { recursive: true });
const htmlFiles = allEntries.filter((entry) => entry.endsWith('.html'));
const broken = [];

for (const file of htmlFiles) {
  const html = await readFile(new URL(file, root), 'utf8');
  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (!reference.startsWith('/') || reference.startsWith('//')) continue;
    const clean = reference.split('#')[0].split('?')[0];
    if (!clean) continue;
    const target = clean.endsWith('/') ? `${clean.slice(1)}index.html` : clean.slice(1);
    try {
      await access(new URL(target, root));
    } catch {
      broken.push(`${file}: ${reference}`);
    }
  }
}

if (broken.length > 0) {
  throw new Error(`Broken internal references:\n${broken.join('\n')}`);
}

console.log(`Verified ${htmlFiles.length} static pages, ${articleCount} documentation pages, ${labels.length} client actions, and all internal references.`);
