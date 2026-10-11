// Runs automatically after `vite build` (see "postbuild" in package.json).
//
// Static hosts only serve files that exist. Without a "/* -> /index.html" rewrite,
// every React route except "/" returns 404 to visitors and to Google. This script
// writes a copy of the built index.html for every URL in public/sitemap.xml, e.g.
//   dist/services/index.html
//   dist/services/web-development/index.html
// with the canonical and og:url pointed at that route, so each indexable page is a
// real file. The runtime still handles routing, metadata and content as before.
//
// Dynamic routes (/testimonial/:token, /blog/:id, unknown URLs) are not covered;
// those still need the host rewrite.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const indexPath = join(dist, 'index.html');
if (!existsSync(indexPath)) {
  console.error('postbuild-routes: dist/index.html not found, run vite build first');
  process.exit(1);
}

const SITE = 'https://aventix.co.in';
const html = readFileSync(indexPath, 'utf8');
const sitemap = readFileSync(join(root, 'public', 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
  .map((m) => m[1].replace(SITE, '').replace(/\/+$/, ''))
  .filter((p) => p && p !== '/');

let written = 0;
for (const route of routes) {
  const url = `${SITE}${route}`;
  const page = html
    .replace(/<link rel="canonical"([^>]*)href="[^"]*"/, `<link rel="canonical"$1href="${url}"`)
    .replace(/<meta property="og:url"([^>]*)content="[^"]*"/, `<meta property="og:url"$1content="${url}"`);
  const dir = join(dist, ...route.split('/').filter(Boolean));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), page);
  written += 1;
}
console.log(`postbuild-routes: wrote ${written} route pages from sitemap.xml`);
