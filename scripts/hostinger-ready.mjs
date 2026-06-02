/**
 * Post-build summary for Hostinger upload (run after package:hostinger).
 */
import { existsSync, statSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const zipPath = join(root, 'dist-hostinger.zip');

function countFiles(dir) {
	let n = 0;
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, entry.name);
		if (entry.isDirectory()) n += countFiles(p);
		else n += 1;
	}
	return n;
}

if (!existsSync(dist)) {
	console.error('ERROR: dist/ missing. Run: npm run build:hostinger');
	process.exit(1);
}

const fileCount = countFiles(dist);
const zipInfo = existsSync(zipPath)
	? `${(statSync(zipPath).size / (1024 * 1024)).toFixed(2)} MB — ${zipPath}`
	: 'not found (run: npm run package:hostinger)';

const instructions = `KRUSHNAI AMRUTULYA — HOSTINGER UPLOAD
=====================================
Built: ${new Date().toISOString().slice(0, 10)}
Files in dist/: ${fileCount}
Zip package: ${zipInfo}

UPLOAD (choose one)
-------------------
A) File Manager (hPanel)
   1. https://hpanel.hostinger.com → Files → public_html
   2. Upload dist-hostinger.zip from project root
   3. Extract here (overwrite existing files)
   4. Enable "Show hidden files" — confirm .htaccess exists

B) FTP (FileZilla)
   Upload ALL contents inside dist/ into /public_html/
   (not the dist folder itself)

AFTER UPLOAD
------------
[ ] SSL enabled in hPanel (HTTPS)
[ ] https://krushnaiamrutulya.com loads
[ ] Homepage video plays (muted autoplay)
[ ] Mobile: scroll + menu close button work
[ ] Contact page shows Sojat City address
[ ] robots.txt: /robots.txt
[ ] sitemap: /sitemap.xml

Domain note: site is configured for krushnaiamrutulya.com
If using krushnaiamrutulya.in, point domain to same public_html or update astro.config.mjs site URL and rebuild.
`;

writeFileSync(join(dist, 'HOSTINGER-UPLOAD.txt'), instructions, 'utf8');

console.log('\n✓ Hostinger deploy package ready\n');
console.log(instructions);
