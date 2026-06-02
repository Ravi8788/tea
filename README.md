# Krushnai Amrutulya — Website

Luxury static website for **Krushnai Amrutulya** (Shree Krishna Enterprises) — premium jaggery tea premix from Rajasthan, India.

**Production domain:** [https://krushnaiamrutulya.com](https://krushnaiamrutulya.com)  
**Hosting:** Hostinger shared hosting (Apache, static files)  
**Mobile-first:** Native scroll on phones, lighter animations, autoplay hero video + slideshow tested for mobile.

---

## Tech stack

| Tool | Purpose |
|------|---------|
| [Astro 4](https://astro.build) | Static site generator |
| Tailwind CSS | Styling |
| GSAP + ScrollTrigger | Scroll animations |
| Lenis | Smooth scrolling |
| Swiper | Product carousels |

This is a **static site** — no Node.js server is needed on Hostinger. You build on your computer and upload the `dist/` folder.

---

## Site pages (8 pages)

| URL | Page |
|-----|------|
| `/` | Home |
| `/about/` | About Us |
| `/products/` | All products |
| `/products/jaggery-cardamom/` | Jaggery Cardamom |
| `/products/sugar-cardamom/` | Sugar Cardamom |
| `/products/rose-tea/` | Rose Tea |
| `/products/jaggery-basundi/` | Jaggery Basundi |
| `/contact/` | Contact |

---

## Local development

### Requirements

- **Node.js 22.12+** — [https://nodejs.org](https://nodejs.org)
- npm (included with Node.js)

### Commands

```bash
# Install dependencies (first time only)
npm install

# Start dev server → http://localhost:4321
npm run dev

# Production build → outputs to dist/
npm run build

# Preview production build locally
npm run preview

# Build + create dist-hostinger.zip for upload
npm run package:hostinger
```

---

## Before you deploy — update these values

Edit **`src/data/company.ts`** (one file controls most business info):

| Field | What to set |
|-------|-------------|
| `whatsappUrl` | WhatsApp link (e.g. `https://wa.me/918554857776`) |
| `phone` | 10-digit mobile (no +91) |
| `phoneDisplay` | How the number appears on site |
| `email` | Business email |

After editing, run `npm run build:hostinger` before uploading.

### Domain in config

`astro.config.mjs` already has:

```js
site: 'https://krushnaiamrutulya.com'
```

Change this only if you use a different domain.

---

## Netlify deployment (preview / alternate hosting)

If you deploy to [Netlify](https://netlify.com) instead of Hostinger, the repo includes **`netlify.toml`** with the correct settings.

### Netlify site settings (must match)

| Setting | Value |
|---------|-------|
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Node version** | 22 |

In Netlify: **Site configuration → Build & deploy → Build settings**

### Connect GitHub repo

1. Netlify → **Add new site → Import an existing project**
2. Choose **GitHub** → select `Ravi8788/tea`
3. Netlify reads `netlify.toml` automatically — verify **Publish directory = `dist`**
4. Deploy

### Fix for "404 Not Found" on homepage

This happens when Netlify publishes the **repo root** instead of **`dist/`**:

1. **Site configuration → Build & deploy → Build settings**
2. Set **Publish directory** to `dist` (not empty, not `/`)
3. Set **Build command** to `npm run build`
4. **Deploys → Trigger deploy → Clear cache and deploy site**

Check the deploy log — build must finish with `Complete!` and `dist/index.html` must exist.

### Custom domain on Netlify

**Domain management → Add domain** → `krushnaiamrutulya.com`  
Update DNS at your registrar to Netlify's nameservers or A/CNAME records.

---

## Hostinger deployment guide (primary hosting)

### Mobile behaviour on live site

The site is tuned for **phones first** on Hostinger:

| Feature | Mobile behaviour |
|---------|------------------|
| Scroll | **Native touch scroll** (Lenis smooth scroll disabled on phones — faster, no jank) |
| Animations | Shorter, lighter GSAP reveals |
| Hero | Banner slideshow + autoplay video below (muted, playsinline) |
| Loading screen | Faster on mobile (~1s) |
| Reduced motion | Respects system “reduce motion” setting |

Always test on a real phone after upload: hero slideshow swipe, video autoplay, WhatsApp buttons, product carousel.

### What you need from Hostinger

1. **Web Hosting plan** (Premium or Business — any plan with `public_html` and Apache)
2. **Domain** `krushnaiamrutulya.com` pointed to Hostinger
3. **SSL certificate** (free Let's Encrypt in hPanel)

### Step 1 — Build the site on your computer

```bash
cd d:\tea
npm install
npm run build:hostinger
```

`build:hostinger` builds the site **and verifies** required Hostinger files (`.htaccess`, video, sitemap, pages).

This creates the **`dist/`** folder — upload **all contents** to `public_html`:

```
dist/
├── index.html
├── about/index.html
├── contact/index.html
├── products/index.html
├── products/*/index.html
├── 404.html
├── .htaccess               ← HTTPS, routes, caching, video MIME
├── robots.txt
├── sitemap.xml
├── videos/advertisment.mp4 ← Homepage hero video
├── assets/                 ← CSS & JavaScript
└── images/                 ← Logo, hero banners, products
```

Optional zip for File Manager upload:

```bash
npm run package:hostinger
```

This creates **`dist-hostinger.zip`** in the project root.

---

### Step 2 — Log in to Hostinger hPanel

1. Go to [https://hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Open your hosting account for **krushnaiamrutulya.com**

---

### Step 3 — Connect the domain (if not done)

1. **Websites → Manage** → select your site
2. **Domain** → ensure `krushnaiamrutulya.com` is the primary domain
3. If the domain is elsewhere, update nameservers at your registrar to Hostinger's (exact values shown in your hPanel)

DNS can take **15 minutes to 48 hours** to propagate.

---

### Step 4 — Enable free SSL (HTTPS)

1. hPanel → **Security → SSL**
2. Select your domain → **Install SSL** (Let's Encrypt)
3. Wait until status shows **Active**
4. The site's `.htaccess` already redirects HTTP → HTTPS

---

### Step 5 — Upload files to `public_html`

#### Option A — File Manager (easiest)

1. hPanel → **Files → File Manager**
2. Open **`public_html`**
3. **Delete** default files if present (`default.php`, old `index.html`, etc.)
4. Upload **all contents inside `dist/`** (not the `dist` folder itself)
5. If using zip: upload `dist-hostinger.zip` → right-click → **Extract**

#### Option B — FTP (FileZilla)

| Setting | Value |
|---------|-------|
| Host | From hPanel → **FTP Accounts** |
| Username | Your FTP username |
| Password | Your FTP password |
| Port | `21` |
| Remote folder | `/public_html` |

Upload everything from `dist/` into `/public_html`.

---

### Step 6 — Verify the live site

Open these URLs:

- [https://krushnaiamrutulya.com](https://krushnaiamrutulya.com)
- [https://krushnaiamrutulya.com/about/](https://krushnaiamrutulya.com/about/)
- [https://krushnaiamrutulya.com/products/](https://krushnaiamrutulya.com/products/)
- [https://krushnaiamrutulya.com/contact/](https://krushnaiamrutulya.com/contact/)

**Checklist (desktop + phone):**

- [ ] Home: banner slideshow swipes / auto-advances
- [ ] Home: video plays below slideshow (muted)
- [ ] Premium “Modern Businesses” section + Our Story timeline visible
- [ ] Product carousel swipes on mobile
- [ ] WhatsApp / Call links work (`+91 85548 57776`)
- [ ] All pages open (`/about/`, `/products/`, `/contact/`)
- [ ] `.htaccess` uploaded (show hidden files in File Manager)
- [ ] HTTPS padlock active
- [ ] Scroll feels smooth on phone (no stuck sections)

---

## Updating the website later

Every time you change content or design:

```bash
npm run build
```

Then re-upload the full `dist/` contents to `public_html`.

---

## Project structure (source code)

```
d:\tea\
├── src/
│   ├── pages/           ← Page files
│   ├── components/      ← Header, Footer, Hero, etc.
│   ├── data/
│   │   ├── company.ts   ← Business info — edit before launch
│   │   └── products.ts  ← Product data
│   ├── layouts/
│   └── styles/
├── public/              ← Static assets (copied to dist/ on build)
├── dist/                ← Upload this to Hostinger
├── astro.config.mjs
├── package.json
└── README.md
```

---

## Business information (on site)

| Item | Value |
|------|-------|
| Brand | Krushnai Amrutulya |
| Company | Shree Krishna Enterprises |
| FSSAI | 12225036000072 |
| Address | Ward No. 29, Ganga Petrol Pump Ke Piche, Basni Road, Sojat City, Pali, Rajasthan – 306104 |
| Designer credit | Impulse Macro Innovation Pvt Ltd |

---

## Troubleshooting

### Site shows "Index of /" or blank page
Ensure `index.html` is directly inside `public_html`, not inside a `dist` subfolder.

### Pages return 404 (e.g. `/about`)
Confirm `.htaccess` was uploaded (enable "show hidden files" in File Manager).

### Images or CSS not loading
Hard refresh with `Ctrl + Shift + R`. Check `assets/` and `images/` exist in `public_html`.

### HTTPS not working
Install SSL in hPanel first. Wait 10–15 minutes after activation.

### Video does not play on phone
Ensure `videos/advertisment.mp4` is inside `public_html/videos/`. Video is muted for autoplay (required by browsers).

### Animations feel slow or sticky on mobile
Clear cache. Site uses native scroll on phones by design — re-upload latest `dist/assets/` JS files.

### Old content still showing
Clear browser cache or purge cache in hPanel → **Cache Manager**.

---

## SEO (Search Engine Optimization)

The site is fully SEO-ready for Google and social sharing.

### What's included

| Feature | Details |
|---------|---------|
| Page titles & descriptions | Unique per page in `src/data/seo.ts` |
| Keywords | Tea premix, Rajasthan, bulk orders, FSSAI |
| Canonical URLs | Prevents duplicate content |
| Open Graph & Twitter cards | Rich previews on WhatsApp, Facebook, LinkedIn |
| JSON-LD schema | Organization, LocalBusiness, Product, BreadcrumbList |
| sitemap.xml | Auto-generated on every `npm run build` |
| robots.txt | Allows indexing, points to sitemap |
| Geo tags | Local SEO for Sojat City, Pali, Rajasthan |
| site.webmanifest | Mobile browser branding |
| 404 noindex | Error page excluded from search |

### After going live — Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://krushnaiamrutulya.com`
3. Verify via DNS TXT record in Hostinger hPanel
4. Submit sitemap: `https://krushnaiamrutulya.com/sitemap.xml`
5. Request indexing for `/` and `/products/`

### Edit SEO content

- Page titles/descriptions: `src/data/seo.ts`
- Schema & structured data: `src/lib/seo.ts`
- Business info: `src/data/company.ts`

---

## SEO files

| File | Purpose |
|------|---------|
| `sitemap.xml` | Auto-generated — submit to Google Search Console |
| `robots.txt` | Crawler rules |
| `og-image.jpg` | Social sharing preview |
| `site.webmanifest` | Mobile browser icon & theme |

Submit: `https://krushnaiamrutulya.com/sitemap.xml`

---

## Quick deploy cheat sheet

```bash
# 1. Update src/data/company.ts if needed
# 2. Build + verify
npm run build:hostinger

# 3. Upload ALL files inside dist/ → Hostinger public_html
# 4. Enable SSL in hPanel
# 5. Test on phone + desktop: https://krushnaiamrutulya.com
```
