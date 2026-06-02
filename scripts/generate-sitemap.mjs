/**
 * Generates public/sitemap.xml before build.
 * Run automatically via npm run build.
 */
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const site = 'https://krushnaiamrutulya.com';
const lastmod = new Date().toISOString().slice(0, 10);

const pages = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about/', changefreq: 'monthly', priority: '0.9' },
  { loc: '/products/', changefreq: 'weekly', priority: '0.95' },
  { loc: '/products/jaggery-cardamom/', changefreq: 'monthly', priority: '0.85' },
  { loc: '/products/sugar-cardamom/', changefreq: 'monthly', priority: '0.85' },
  { loc: '/products/rose-tea/', changefreq: 'monthly', priority: '0.85' },
  { loc: '/products/jaggery-basundi/', changefreq: 'monthly', priority: '0.85' },
  { loc: '/contact/', changefreq: 'monthly', priority: '0.85' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${site}${page.loc === '/' ? '/' : page.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml updated (${pages.length} URLs, lastmod ${lastmod})`);
