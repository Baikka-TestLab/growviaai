# Audit — Suggestions

| # | Area | Status | Description |
|---|------|--------|-------------|
| S1 | Critical | ✅ **Done** | **Define Tailwind v4 theme.** Added `@theme` block with custom colors, fonts, and `@layer utilities`. All custom styling now renders. |
| S2 | Consistency | ❌ **Open** | **Convert 5 context-dependent components** to individual service pattern: `Faq.jsx`, `StatSection.jsx`, `Testimonial.jsx`, `SocialProof.jsx`, `CtaBanner.jsx`. Currently always fall back to hardcoded defaults since context only fetches `/api/hero`. |
| S3 | Cleanup | ❌ **Open** | **Remove orphaned `contentData.js`.** ESM export in CJS project, never imported. |
| S4 | Cleanup | ❌ **Open** | **Remove unused `import React`** in `Home.jsx:1` and `Final.jsx:1`. |
| S5 | Cleanup | ❌ **Open** | **Remove unused deps:** `react-hook-form`, `lottie-react`, `react-fast-marquee`, `@emailjs/browser`, `mongoose` (backend), `react-router` (redundant with `react-router-dom`). |
| S6 | ESLint | ❌ **Open** | **Fix 11 false-positive `motion` "unused" errors.** `motion.div` not tracked by base `no-unused-vars`. |
| S7 | Security | ✅ **Done** | **Add `.env` to `.gitignore`.** Line added after `*.local`. |
| S8 | DX | ❌ **Open** | **Add `.env.example` files** for `backend/` and `twobotagency/`. |
| S9 | Resilience | ❌ **Open** | **Add React error boundary** at app root. |
| S10 | Style | ✅ **Done** | **Standardize `require()` placement** in `backend/src/app.js`. All route requires moved to top. |
| S11 | UX | ✅ **Done** | **Loading skeleton for Navbar** already existed on line 87-101 (pulse animation, not null). Already fixed. |
| S12 | Visual | ✅ **Done** | **Gradient-text on About heading** already present at line 42 (`<span className="gradient-text">TwoBot Agency</span>`). Already done. |
| S13 | Validation | ❌ **Open** | **Add validation + rate limiting** on n8n webhook. |
| S14 | Docs | ✅ **Done** | **Update `AGENTS.md`.** Now includes full API route list, theme system, monochrome scheme, and gotchas. |
| S15 | Cleanup | ❌ **Open** | **Remove dead `App.jsx` + `App.css`.** Both files are never imported or used. |
| S16 | Config | ❌ **Open** | **Review DaisyUI usage.** Plugin loaded but no DaisyUI classes used in components. |
| S17 | UX | ✅ **Done** | **Make Footer legal links interactive.** Privacy Policy and Terms of Service changed from `<span>` to `<button>`. |
| S18 | Consistency | ❌ **Open** | **Consolidate axios usage.** Shared instance at `src/api/api.js` only used by `ContentContext.jsx` — 8 service files import axios directly. |
| S19 | Accessibility | ✅ **Done** | **Add `aria-label` to Navbar mobile menu toggle.** `aria-label` dynamically says "Open menu" / "Close menu". |
| S20 | Cleanup | ❌ **Open** | **Remove unused assets:** `public/icons.svg`, `src/assets/hero.png`, `src/assets/image-1.avif`, `src/assets/react.svg`, `src/assets/vite.svg`. |
| S21 | Fix | ✅ **Done** | **Fix favicon path** in `index.html:5`. Removed double slash and `/public/` prefix. |
| S22 | Cleanup | ✅ **Done** | **Rename `image 1.avif`** to `image-1.avif`. Space removed from filename. |
| S23 | Consistency | ❌ **Open** | **Add "How It Works" to Footer company links.** Listed in Navbar but missing from Footer. |
| S24 | Feature | ✅ **Done** | **Add dark/light theme toggle.** `ThemeContext` + `data-theme` attribute + CSS variable overrides. Toggle button in Navbar. |
| S25 | UX | ✅ **Done** | **Add `cursor-pointer` to all interactive elements.** Applied across 7 component files. |
| S26 | UX | ✅ **Done** | **Logo click scrolls to top.** Mobile menu closes; scrolls to top when already on `/`. |
| S27 | Visual | ✅ **Done** | **Fix light mode card visibility.** Replaced all `bg-white/5 border-white/10` patterns with `bg-card border-card` (HowItWorks, Pricing, Stats, FAQ). |
| S28 | Visual | ✅ **Done** | **Fix light mode text visibility.** Changed hardcoded `text-white`/`text-brand-navy`/`group-hover:text-white` to `text-foreground`/`text-gray-900`/`group-hover:text-foreground`. |
| S29 | Docs | ✅ **Done** | **Create `docs/EDIT_LOG.md`** with complete session edit history. |
| S30 | Docs | ✅ **Done** | **Move `README.md` and `design-tokens.md` into `docs/`.** All documentation consolidated in `docs/` folder. |
| S31 | Accessibility | ❌ **Open** | **Add proper `<label>` elements** to form inputs in `contact.jsx`. Replace `placeholder`-only labeling with `<label>` + `htmlFor` or `aria-label`. |
| S32 | Accessibility | ❌ **Open** | **Replace `alert()` with inline validation** in `contact.jsx:48`. Show field-level errors with `aria-describedby` or `aria-invalid`. |
| S33 | Security | ❌ **Open** | **Restrict CORS origins** in `backend/app.js:19`. Use `cors({ origin: 'https://example.com' })` for production. |
| S34 | Consistency | ❌ **Open** | **Rename `contact.jsx` → `Contact.jsx`** for PascalCase consistency with all other components. |
| S35 | Style | ❌ **Open** | **Make Error.jsx "Back to Home" button theme-aware.** Replace hardcoded `from-white to-gray-400` gradient with theme tokens. |
| S36 | Config | ❌ **Open** | **Fix `text-foreground/80` opacity modifier** in `CtaBanner.jsx:33`. Tailwind v4 opacity modifiers on custom CSS variables may not work — use explicit opacity class instead. |
| S37 | Config | ❌ **Open** | **Add root-level `.gitignore`** to keep `backend/` and `docs/` untracked (currently relies on no `.gitignore` existing). |
| S38 | Cleanup | ❌ **Open** | **Remove unused Mongoose dependency** from `backend/package.json`. DB connection is commented out. |
| S39 | Cleanup | ❌ **Open** | **Remove unnecessary `import React`** in `Final.jsx:1` and `Home.jsx:1`. Unneeded with React 19 + Vite automatic JSX runtime. |
| S40 | Consistency | ❌ **Open** | **Standardize `Outlet` import source.** `Final.jsx:5` imports from `"react-router"` — use `"react-router-dom"` like all other files. |
| S41 | Cleanup | ❌ **Open** | **Remove unused service files:** `aboutService.js`, `contactService.js`, `footerService.js`, `howItWorksService.js`, `industriesService.js`, `pricingService.js`, `servicesService.js`. Only `navbarService.js` and `heroService.js` are used. |
| S42 | Style | ❌ **Open** | **Fix hardcoded `text-amber-500`** in `Hero.jsx:65`. Amber color overrides `text-foreground` and ignores theme — may have low contrast in light mode. |

## Summary

- **18 of 42 suggestions implemented** (S1, S7, S10, S11, S12, S14, S17, S19, S21, S22, S24–S30).
- **24 of 42 suggestions remain open** (S2–S6, S8–S9, S13, S15–S16, S18, S20, S23, S31–S42).
