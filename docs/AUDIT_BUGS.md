# Audit — Bugs

| # | Severity | File | Line | Status | Description |
|---|----------|------|------|--------|-------------|
| B1 | **High** | `twobotagency/src/Components/contact.jsx` | 59 | ✅ **Fixed** | **Contact form POST fixed.** Form now submits to the n8n production webhook (`VITE_N8N_WEBHOOK_URL` in `.env`) instead of the non-existent backend `POST /api/contact`. |
| B2 | **High** | `twobotagency/src/index.css` | 1–2 | ✅ **Fixed** | **Tailwind v4 theme defined.** Added `@theme` block with brand colors, fonts, and `@layer utilities` for all custom classes. |
| B3 | **Medium** | `twobotagency/src/Components/Navbar.jsx` | 7 | ❌ **Open** | **Wrong scroll offset.** `NAVBAR_HEIGHT = 80` but navbar uses `h-16` (64px). Scroll-to-section overshoots by 16px. |
| B4 | **Medium** | `twobotagency/src/Components/Hero.jsx` | 25 | ❌ **Open** | **Same scroll offset mismatch.** Hardcoded `- 80` should be `- 64`. |
| B5 | **Medium** | `twobotagency/src/Components/contact.jsx` | 91 | ❌ **Open** | **Fallback heading doubled.** Fallback `"Let's Talk Automation"` + appended `<span>Automation</span>` → "Let's Talk Automation Automation". |
| B6 | **Medium** | `backend/src/data/contentData.js` | 1, 29 | ❌ **Open** | **Dead/orphaned file.** ESM export in CJS backend, never imported. |
| B7 | **Medium** | `twobotagency/.gitignore` | — | ✅ **Fixed** | **`.env` not ignored.** `*.local` matches `.env.local` but not `.env`. Risk of committing secrets. Line added. |
| B8 | **Low** | `backend/src/data/industriesData.js` | 4 | ❌ **Open** | **Misspelling.** `"Saloon"` (bar) → should be `"Salon"`. Same in `Industries.jsx:8`. |
| B9 | **Low** | `twobotagency/src/Components/Error.jsx` | 5 | ❌ **Open** | **Shadows global `Error`.** Mitigated by importing as `ErrorPage` in `main.jsx`. |
| B10 | **Low** | `backend/server.js` | 9 | ❌ **Open** | **Undefined function reference.** Comment `// connectDB();` references non-existent function. |
| B11 | **Low** | `twobotagency/index.html` | 5 | ✅ **Fixed** | **Favicon path fixed.** Removed double slash and incorrect `/public/` prefix. |
| B12 | **Low** | `backend/src/data/footerData.js` | 18 | ❌ **Open** | **Copyright typo.** `"GrowViAi"` → `"GrowViaAi"`. Same in `Footer.jsx:21`. |
| B13 | **Low** | `twobotagency/.gitignore` | — | ❌ **Open** | **`dist/` contents exist.** Confirm gitignored (`.gitignore` line 11 — OK). |
| B14 | **Low** | `twobotagency/src/Components/Faq.jsx` | 60 | ✅ **Fixed** | **FAQ hover text invisible in light mode.** `group-hover:text-white` → `group-hover:text-foreground`. |
| B15 | **Low** | `twobotagency/src/Components/Navbar.jsx` | 108 | ✅ **Fixed** | **Nav link hover invisible in light mode.** `hover:text-white` → `hover:text-foreground`. |
| B16 | **Low** | `twobotagency/src/Components/Pricing.jsx` | 79 | ✅ **Fixed** | **"MOST POPULAR" badge invisible in light mode.** `text-brand-navy` (white in light mode) → `text-gray-900`. |
| B17 | **High** | `twobotagency/src/Components/contact.jsx` | 128–180 | ❌ **Open** | **Form inputs missing `<label>` elements.** All 4 fields (`name`, `email`, `phone`, `message`) rely solely on `placeholder` for labeling. Fails WCAG 2.1 SC 3.3.2. |
| B18 | **High** | `backend/src/app.js` | 19 | ❌ **Open** | **CORS wide open.** `app.use(cors())` with no origin restrictions allows any domain to call the API. |

## Resolution summary

- **8 of 18 bugs resolved** (B1, B2, B7, B11, B14, B15, B16).
- **10 of 18 bugs remain open** (B3–B6, B8–B10, B12–B13, B17–B18).

## Impact summary

- **B1 (Fixed)** — Contact form submits to n8n. Core business function restored.
- **B2 (Fixed)** — All custom visual styling renders.
- **B14–B16 (Fixed)** — Light mode readability fixes.
- **B3–B4** cause visual drift when clicking section links.
- **B5** visible text bug when backend unavailable.
- **B7 (Fixed)** — `.env` now gitignored.
- **B17** contact form inaccessible to screen readers.
- **B18** production CORS security risk.
