/**
 * Verifies dist/ is ready to upload to Hostinger public_html.
 */
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const required = [
	'index.html',
	'.htaccess',
	'robots.txt',
	'sitemap.xml',
	'404.html',
	'about/index.html',
	'contact/index.html',
	'products/index.html',
	'videos/advertisment.mp4',
	'images/logo-header.png',
];

let ok = true;

if (!existsSync(dist)) {
	console.error('ERROR: dist/ not found. Run: npm run build');
	process.exit(1);
}

for (const file of required) {
	const path = join(dist, file);
	if (!existsSync(path)) {
		console.error(`MISSING: dist/${file}`);
		ok = false;
	}
}

if (ok) {
	console.log('Hostinger build OK — upload everything inside dist/ to public_html');
	console.log(`  ${required.length} critical files verified`);
} else {
	process.exit(1);
}
