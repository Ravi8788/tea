# Krushnai Amrutulya — Complete Project Reference

Everything used in this system, in one place.

---

## 1. What this project is

| Item | Details |
|------|---------|
| **Purpose** | Luxury marketing website for a premium **jaggery tea premix** brand |
| **Type** | Static website (no backend, no database) |
| **Built for** | Brand visibility, product showcase, bulk/dealer enquiries, SEO, mobile users in India |
| **Live domain** | https://krushnaiamrutulya.com |
| **GitHub** | https://github.com/Ravi8788/tea |
| **Primary hosting** | Hostinger shared hosting (`public_html`, Apache) |
| **Alternate hosting** | Netlify (via `netlify.toml`) |

---

## 2. Tech stack (why each tool)

| Technology | Version | Role |
|------------|---------|------|
| **Node.js** | 22.12+ | Build environment only (not on server) |
| **Astro 4** | ^4.16 | Static site generator — fast HTML, `.astro` components |
| **Tailwind CSS** | ^3.4 | Utility styling + design tokens |
| **GSAP** | ^3.15 | Scroll reveals, counters, page animations |
| **ScrollTrigger** | (GSAP plugin) | Animate sections on scroll |
| **Lenis** | ^1.3 | Smooth scroll on **desktop only** |
| **Swiper** | ^12.2 | Hero banner slideshow + product carousel |
| **Sharp** | ^0.34 | Image optimization (Astro image pipeline) |
| **@astrojs/tailwind** | ^6.0 | Tailwind integration |
| **@astrojs/sitemap** | ^3.7 | Sitemap support (custom script also used) |

**Why static?** Hostinger shared hosting serves HTML/CSS/JS files. No Node server needed in production — build once, upload `dist/`.

---

## 3. Business & contact info

**Single source of truth:** `src/data/company.ts`

| Field | Value |
|-------|--------|
| **Brand** | Krushnai Amrutulya |
| **Legal company** | Shree Krishna Enterprises |
| **Owner / founder** | Vinod Bhanaram Parihar |
| **Title** | Founder & Managing Director |
| **Phone** | +91 73404 11200 (`7340411200`) |
| **WhatsApp** | https://wa.me/917340411200 |
| **Email** | info@krushnaiamrutulya.com |
| **FSSAI license** | 12225036000072 |
| **Address** | Ward No. 29, Ganga Petrol Pump Ke Piche, Basni Road, Sojat City, Pali, Rajasthan – 306104 |
| **Designer credit** | Impulse Macro Innovation Pvt Ltd |
| **Site URL (SEO)** | https://krushnaiamrutulya.com |

---

## 4. Products (4 blends)

**Data file:** `src/data/products.ts`

| Slug | Product | Badge |
|------|---------|--------|
| `jaggery-cardamom` | Jaggery Cardamom Tea Premix | Est. Seller |
| `sugar-cardamom` | Sugar Cardamom Tea Premix | Customer Favorite |
| `rose-tea` | Rose Tea Premix | Premium Blend |
| `jaggery-basundi` | Jaggery Basundi Tea Premix | Signature Product |

Each product includes: description, ingredients, weight options, preparation, ideal customers (hotels, cafés, etc.).

---

## 5. Site pages & structure

| URL | File | Main sections |
|-----|------|----------------|
| `/` | `src/pages/index.astro` | Hero (slideshow + video), premium showcase, products, story timeline, why choose us, tea journey, stats, testimonials, dealer program, CTA |
| `/about/` | `src/pages/about.astro` | Heritage, founder, timeline, ingredients, certificates |
| `/products/` | `src/pages/products.astro` | Full catalog, heritage, dealer block, final CTA |
| `/products/[slug]/` | `src/pages/products/[slug].astro` | Individual product detail |
| `/contact/` | `src/pages/contact.astro` | Address, phone, WhatsApp, map (no contact form) |
| `/404` | `src/pages/404.astro` | Not found |

**Layout:** `src/layouts/BaseLayout.astro` — meta tags, SEO schema, loading screen, global scripts.

**Shared UI:** `Header.astro`, `Footer.astro`, `btn-gold`, `btn-outline`, glass cards, ornament dividers.

---

## 6. Design system

### Fonts (Google Fonts)

- **Cinzel** — headings, luxury feel
- **Cinzel Decorative** — accent titles
- **Poppins** — body, buttons, UI
- **Playfair Display** — quotes / italic accents

### Colors

| Token | Hex | Use |
|-------|-----|-----|
| Gold | `#C9A227` | Brand, buttons, accents |
| Gold luxury | `#D4AF37` | Gradients |
| Cream | `#FAF8F3` | Soft backgrounds |
| Dark | `#1E1E1E` | Text |
| Page bg | `#FFFFFF` | Main background |

### UI patterns

- Gold gradient buttons with shine animation
- Glassmorphism cards (`backdrop-filter`)
- Mughal-style texture backgrounds
- Scroll reveal animations (`.reveal`, `.reveal-left`, `.reveal-right`)
- Loading screen with progress bar

---

## 7. Key features built

| Feature | Implementation |
|---------|----------------|
| Hero banner slideshow | Swiper — 2 PNG banners |
| Hero video | `/videos/advertisment.mp4` (muted autoplay) |
| Product carousel | Swiper on homepage |
| Mobile menu | Hamburger + overlay + close (×) top-right |
| Mobile scroll | Lenis off on touch; native scroll + `touch-action: pan-y` |
| Dealer partner CTA | `DealerProgram.astro` — responsive card |
| Premium showcase | `HomePremiumShowcase.astro` + group photo |
| Story timeline (home) | `HomeStoryTimelineLuxury.astro` |
| Stats counters | GSAP animated numbers |
| Google Maps embed | Sojat City, Pali |
| FSSAI badge | Certificates section |
| SEO / schema | `src/lib/seo.ts`, `src/data/seo.ts` |
| Sitemap | `scripts/generate-sitemap.mjs` → `public/sitemap.xml` |

---

## 8. Project folder layout

```
tea/
├── src/
│   ├── pages/              # Routes
│   ├── components/         # Header, Footer, Hero, etc.
│   ├── layouts/            # BaseLayout.astro
│   ├── data/
│   │   ├── company.ts      # ★ Business info
│   │   ├── products.ts     # Product catalog
│   │   ├── seo.ts          # Page titles & meta
│   │   └── productsPage.ts
│   ├── lib/seo.ts          # JSON-LD structured data
│   ├── scripts/            # nav, gsap, lenis, device, animations
│   └── styles/
│       ├── global.css
│       └── mobile.css
├── public/                 # Static files → dist/
│   ├── .htaccess
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   ├── images/, videos/, certificates/
├── scripts/
│   ├── generate-sitemap.mjs
│   ├── verify-hostinger-build.mjs
│   └── hostinger-ready.mjs
├── dist/                   # Build output → Hostinger
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

---

## 9. NPM scripts

| Command | What it does |
|---------|----------------|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server → http://localhost:4321 |
| `npm run build` | Sitemap + Astro build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run build:hostinger` | Build + verify critical files |
| `npm run package:hostinger` | Build + zip + upload checklist |
| `npm run hostinger:ready` | One command for full Hostinger package |

---

## 10. SEO & marketing tech

| Item | Location |
|------|----------|
| Page titles & descriptions | `src/data/seo.ts` |
| Keywords per page | `src/data/seo.ts` |
| JSON-LD schemas | `src/lib/seo.ts` |
| Organization, LocalBusiness, Product, FAQ, Video, Breadcrumb | `src/lib/seo.ts` |
| Open Graph / Twitter | `BaseLayout.astro` |
| Geo tags | Sojat City, Pali, Rajasthan |
| `robots.txt` | `public/robots.txt` |
| `sitemap.xml` | Auto-generated (8 URLs) |
| `site.webmanifest` | Mobile browser branding |
| Founder in schema | Vinod Bhanaram Parihar |

---

## 11. Hosting & deployment

### Hostinger (primary)

1. Run `npm run hostinger:ready`
2. Upload `dist-hostinger.zip` to `public_html` and extract (or upload all of `dist/`)
3. Confirm `.htaccess` is present (show hidden files)
4. Enable SSL in hPanel

### Netlify (optional)

- Build: `npm run build`
- Publish: `dist`
- Node: 22
- Config: `netlify.toml`

---

## 12. Mobile-first behavior

| Desktop | Mobile / tablet |
|---------|------------------|
| Lenis smooth scroll | Native touch scroll |
| Full GSAP slide animations | Vertical fade reveals |
| Hero fade transition | Hero slide + dot pagination |
| Longer loading animation | ~800ms + 2.8s failsafe |
| Swiper horizontal swipe | `touch-action: pan-y` so page still scrolls |

---

## 13. Assets & media

| Asset | Path |
|-------|------|
| Logo | `/images/logo.png`, `/images/logo-header.png` |
| Hero banners | `/images/hero/hero-jaggery-cardamom.png`, `hero-jaggery-basundi.png` |
| Advertisement video | `/videos/advertisment.mp4` |
| Founder photos | `/images/founder.png`, `founder-avatar.jpg` |
| Product images | `/images/products/*.png` |
| Premium section photo | `/images/home/premium-showcase.jpg` |
| OG image | `/og-image.jpg` |
| FSSAI | `/certificates/fssai.svg` |

---

## 14. What is NOT in this system

- No CMS (WordPress, etc.)
- No database
- No user login / admin panel
- No contact form (WhatsApp + phone only)
- No payment gateway
- No e-commerce cart
- No API backend

Updates = edit data files → rebuild → re-upload `dist/`.

---

## 15. Quick edit cheat sheet

| Change | Edit file |
|--------|-----------|
| Phone, WhatsApp, owner, address | `src/data/company.ts` |
| Products | `src/data/products.ts` |
| SEO text | `src/data/seo.ts` + `src/lib/seo.ts` |
| Domain | `astro.config.mjs` → `site:` |
| Colors / fonts | `src/styles/global.css`, `tailwind.config.mjs` |
| Homepage sections | `src/pages/index.astro` + components |

---

## 16. Components index

| Component | Used on |
|-----------|---------|
| `Header.astro` | All pages |
| `Footer.astro` | All pages |
| `HeroSection.astro` | Home |
| `HomePremiumShowcase.astro` | Home |
| `ProductShowcase.astro` | Home |
| `HomeStoryTimelineLuxury.astro` | Home |
| `WhyChooseUs.astro` | Home |
| `TeaJourney.astro` | Home |
| `StatsSection.astro` | Home |
| `Testimonials.astro` | Home |
| `DealerProgram.astro` | Home |
| `FinalCTA.astro` | Home |
| `BrandHeritage.astro` | (optional / products) |
| `HomeStoryLuxury.astro` | Unused alternate story block |
| `ProductImage.astro` | Product cards |

---

## 17. Scripts index

| Script | Purpose |
|--------|---------|
| `nav.js` | Sticky header, mobile menu open/close |
| `smooth-scroll.js` | Lenis (desktop) or native scroll (mobile) |
| `gsap-init.js` | Scroll animations, loading screen |
| `device.js` | Mobile detection, reduced motion |
| `ready.js` | App ready state |
| `hero-animations.js` | Homepage hero entrance |
| `products-page-animations.js` | Products page |
| `products-hero-animations.js` | Products hero |

---

*Last updated: June 2026 — matches repo state with Vinod Bhanaram Parihar, +91 73404 11200, Sojat City address.*
