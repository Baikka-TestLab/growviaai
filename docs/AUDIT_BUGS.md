# Audit — Bugs

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| B1 | **High** | `backend/src/routes/contact.routes.js` | — | **Contact form POST has no backend handler.** `contact.jsx` sends a `POST /api/contact` on form submit, but only `router.get("/")` exists. Submissions silently fail with a 404. |
| B2 | **High** | `twobotagency/src/index.css` | 1–2 | **Custom Tailwind v4 theme classes are not defined.** Components use classes like `bg-brand-navy`, `text-brand-muted`, `gradient-text`, `btn-gradient`, `card-dark`, `dot-grid`, `hero-arc`, `section-padding`, `input`, `font-display`, `font-body`, `gradient-bg` extensively, but no `@theme` or `@utility` block exists. No `tailwind.config.js` or `postcss.config.js`. Tailwind v4 will not generate CSS for these — entire app likely renders without custom styling. |
| B3 | **Medium** | `twobotagency/src/Components/Navbar.jsx` | 7 | **Wrong scroll offset.** `NAVBAR_HEIGHT = 80` but the navbar uses CSS class `h-16` (64px). Scroll-to-section overshoots by 16px. |
| B4 | **Medium** | `twobotagency/src/Components/Hero.jsx` | 25 | **Same scroll offset mismatch.** Hardcoded `- 80` should be `- 64` to match the 64px navbar. |
| B5 | **Medium** | `twobotagency/src/Components/contact.jsx` | 91 | **Fallback heading doubled.** Fallback is `"Let's Talk Automation"` but the JSX appends `<span>Automation</span>` after `{heading}`. When API is unavailable the heading reads "Let's Talk Automation Automation". Fallback should be `"Let's Talk"`. |
| B6 | **Medium** | `backend/src/data/contentData.js` | 1, 29 | **Dead/orphaned file.** Uses ESM `export default` in a CJS (`"type": "commonjs"`) backend. Never `require()`'d anywhere. Would throw if it were. |
| B7 | **Medium** | `twobotagency/.gitignore` | — | **`.env` not ignored.** File has `*.local` (matches `.env.local`) but not `.env`. The `twobotagency/.env` with `VITE_API_URL` could be committed accidentally. |
| B8 | **Low** | `backend/src/data/industriesData.js` | 4 | **Likely misspelling.** `"Saloon"` (a bar) with a `Scissors` icon. Should probably be `"Salon"` (hair salon). Same value in `Industries.jsx:8`. |
| B9 | **Low** | `twobotagency/src/Components/Error.jsx` | 5 | **Shadows global `Error`.** Function declared as `const Error = () => { ... }` overwrites the JS built-in `Error` constructor. Mitigated by importing as `ErrorPage` in `main.jsx`, but the function name itself is still a shadow. |
| B10 | **Low** | `backend/server.js` | 9 | **Undefined function reference.** Comment `// connectDB();` references a function that is neither defined nor imported anywhere. |
| B11 | **Low** | `twobotagency/index.html` | 5 | **Favicon path is broken.** Path `/public//growviaai-icon-256px.png` has a double slash AND uses the wrong Vite path. Vite serves `public/` at root, so correct path is `/growviaai-icon-256px.png` (without `/public/` prefix). |
| B12 | **Low** | `backend/src/data/footerData.js` | 18 | **Copyright text typo.** `copyright: "GrowViAi"` — missing the 'a' present in the brand logo `"GrowViaAi"` (line 3). Same value replicated in `Footer.jsx:21`. |
| B13 | **Low** | `twobotagency/.gitignore` | — | **`dist/` contents from `twobotagency/dist/` appear to exist** (directory present). Should confirm `dist/` is gitignored (it is in `.gitignore` line 11 — OK). |

## Impact summary

- **B1** blocks all contact form submissions (core business function).
- **B2** likely breaks all custom visual styling — colors, gradients, component classes, font families.
- **B3–B4** cause visual drift when clicking section links.
- **B5** creates a visible text bug when the backend doesn't respond.
- **B7** risks leaking env config in the frontend repo.
- **B8, B9, B10, B11, B12** are low-impact quality issues.
