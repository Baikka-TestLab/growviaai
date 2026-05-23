# Audit — Suggestions

| # | Area | Description |
|---|------|-------------|
| S1 | Critical | **Define Tailwind v4 theme.** Add `@theme` block in `index.css` with custom colors (`brand-navy`, `brand-purple`, `brand-muted`, `brand-magenta`, `brand-navy-light`), font families (`font-display`, `font-body`), and `@utility` definitions for `gradient-text`, `btn-gradient`, `card-dark`, `dot-grid`, `hero-arc`, `hero-arc-line`, `section-padding`, `input`, `btn-ghost`, `gradient-bg`. Without these, all custom styling is missing. |
| S2 | Consistency | **Convert 5 remaining context-dependent components** to the individual service pattern: `Faq.jsx`, `StatSection.jsx`, `Testimonial.jsx`, `SocialProof.jsx`, `CtaBanner.jsx`. They still use `useContent()` but the context only fetches `/api/hero`, so they always fall back to hardcoded defaults (no actual API-driven content). |
| S3 | Cleanup | **Remove orphaned `contentData.js`.** ESM export in a CJS project, never imported anywhere. |
| S4 | Cleanup | **Remove unused `import React`** in `Home.jsx:1` and `Final.jsx:1`. React 19 + Vite's automatic JSX transform makes it unnecessary. |
| S5 | Cleanup | **Remove unused dependencies** from `twobotagency/package.json`: `react-hook-form`, `lottie-react`, `react-fast-marquee`. `@emailjs/browser` is also not imported anywhere. |
| S6 | ESLint | **Fix 11 false-positive `motion` "unused" errors.** Every component importing `{ motion }` triggers `no-unused-vars` because ESLint's base rule doesn't track JSX member expressions (`motion.div`). Options: switch to `typescript-eslint/no-unused-vars` or add `motion` to a globals allowlist. |
| S7 | Security | **Add `.env` to `twobotagency/.gitignore`.** Currently only `*.local` is ignored, so `.env` would be tracked. |
| S8 | DX | **Add `.env.example` files** for both `backend/` and `twobotagency/` so new devs know which env vars to set. |
| S9 | Resilience | **Add a React error boundary** at the app root level in `main.jsx` so a component crash doesn't white-screen the entire app. |
| S10 | Style | **Standardize `require()` placement in `app.js`.** Currently `testRoutes` is required at the top (line 4) but all other routes are required inline right before `app.use()`. Pick one style and apply it consistently. |
| S11 | UX | **Add a loading skeleton for Navbar** instead of returning `null` (Navbar.jsx:85-87). Currently the entire navbar disappears until the API responds, causing a layout flash. |
| S12 | Visual | **Restore gradient-text highlight on About heading.** The original had `<span className="gradient-text">TwoBot Agency</span>` inside the h1. The new API-driven version renders the whole string as plain `{heading}`, losing the gradient effect. |
| S13 | Validation | **Add server-side validation + rate limiting** on the contact POST endpoint (once B1 is fixed). Currently no request body validation exists. |
| S14 | Docs | **Update `AGENTS.md` API routes section.** Currently only lists `test, navbar, hero` — missing `services, how-it-works, industries, pricing, about, contact, footer`. |
| S15 | Cleanup | **Remove empty `App.css`.** File exists at `twobotagency/src/App.css` with zero content and is never imported. |
| S16 | Config | **Review DaisyUI usage.** `@plugin "daisyui"` is loaded in `index.css:2` but no components use DaisyUI classes (`btn`, `card`, `input`, `select`). All components use custom classes. Either add DaisyUI theme config or remove the plugin. |
| S17 | UX | **Make Footer legal links interactive.** Privacy Policy and Terms of Service (Footer.jsx:104-106) render as `<span>` elements — visually styled like links but not clickable. Should be `<button>` or `<a>` if they have destinations. |
| S18 | Consistency | **Consolidate axios usage.** All 8 service files each import `axios` directly and manually construct the base URL. A shared Axios instance already exists at `src/api/api.js` (with `baseURL` from env) but is only used by `ContentContext.jsx`. Either remove `api.js` or make all services use it. |
| S19 | Accessibility | **Add `aria-label` to Navbar mobile menu toggle** (Navbar.jsx:132-136). The button only contains `<Menu>` / `<X>` icons with no visible text — screen readers can't identify its purpose. |
| S20 | Cleanup | **Remove unused assets** from `public/` (`favicon.svg`, `icons.svg`) if they're not referenced. The actual favicon is `growviaia-icon-256px.png`. Also review `src/assets/` (`vite.svg`, `react.svg`) — likely unused Vite boilerplate. |
| S21 | Fix | **Fix favicon path** in `index.html:5`. Change `href="/public//growviaia-icon-256px.png"` → `href="/growviaia-icon-256px.png"` (Vite serves `public/` at root; also remove double slash). |
| S22 | Cleanup | **Review `src/assets/`.** `image 1.avif` has a space in its filename — could cause issues on some systems or build tools. Rename to `image-1.avif` if used. |
| S23 | Consistency | **Add "How It Works" to Footer company links.** Footer (`Footer.jsx:13`) lists `Services, Industries, Pricing, About, Contact` but omits `How It Works` that appears in the Navbar (`navbarData.js:8`). |
