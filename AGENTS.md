# GrowViaAI

Two packages in one repo — **no monorepo tooling**, run commands from each dir.

## Backend (`backend/`)

- Express 5 + Mongoose (installed but **DB connection commented out** — data is static JSON in `src/data/`)
- CommonJS. Entry: `server.js` → `src/app.js`
- Commands (run from `backend/`):
  - `npm run dev` — nodemon auto-reload
  - `npm start` — node server.js
- Env: `.env` with `PORT=5000`
- API routes (all respond with `{ success, data }`):
  `GET /api/test`, `/api/navbar`, `/api/hero`, `/api/services`, `/api/how-it-works`, `/api/industries`, `/api/pricing`, `/api/about`, `/api/contact`, `/api/footer`

## Frontend (`twobotagency/`)

- React 19 + Vite 8 + Tailwind CSS 4 (via `@tailwindcss/vite` plugin, no PostCSS config) + DaisyUI 5
- ESM (`"type": "module"`). Entry: `src/main.jsx` (Vite HMR entry via `index.html`)
- Commands (run from `twobotagency/`):
  - `npm run dev` — Vite dev server (HMR)
  - `npm run build` — Vite production build
  - `npm run lint` — ESLint flat config (`eslint.config.js`)
  - `npm run preview` — Vite preview of production build
- Env: `.env` with:
  - `VITE_API_URL=https://growviaai.vercel.app` — consumed via `import.meta.env.VITE_API_URL` in `src/api/api.js`
  - `VITE_N8N_WEBHOOK_URL` — used in `contact.jsx` for form submission to n8n
- API calls through `src/api/api.js` (Axios instance) → `src/services/` → backend; **ContentContext** fetches `/api/hero` on mount and provides data to all components via `useContent()`
- React Router v7 with `createBrowserRouter` + `RouterProvider` in `main.jsx`
- Layout: `Final.jsx` (Navbar → Outlet → Footer); routes: `/` (Home), `/about`, `/contact`, `*` (ErrorPage)
- Components in `src/Components/` — mostly `.jsx` (one lowercase: `contact.jsx`)
- `Error.jsx` imported as `ErrorPage` to avoid shadowing JS built-in `Error`
- `App.jsx` and `App.css` exist but are **dead code** — not imported or used anywhere
- Utility: `src/utils/iconMap.js` maps icon name strings to lucide-react components

### CSS / Style

- All custom tokens defined in `src/index.css` `@theme` block (brand-navy, brand-purple, brand-magenta, etc.)
- Current color scheme is **monochrome** (brand-purple=FFFFFF, brand-magenta=#9CA3AF, brand-navy=#0B0D1A)
- **Dark/Light theme** via `ThemeContext` (`src/context/ThemeContext.jsx`) — sets `data-theme` on `<html>`, persisted in localStorage. Toggle button in Navbar.
- Utility classes: `.gradient-text`, `.gradient-bg`, `.btn-gradient`, `.btn-ghost`, `.card-dark`, `.section-padding`, `.dot-grid`, `.hero-arc`, `.hero-arc-line`, `.bg-card`, `.border-card`
- **Gotcha**: `.gradient-bg` uses white→gray gradient — any `text-white`/`text-foreground` content on it will be invisible; always use `text-brand-navy` for text on `.gradient-bg` or solid white backgrounds
- **Light mode gotcha**: Hardcoded `bg-white/5`, `border-white/10`, `text-white` will be invisible on white backgrounds. Use `bg-card`, `border-card`, `text-foreground` instead.
- **Components that use `.bg-card` / `.border-card`** (theme-aware card backgrounds): `HowItWork.jsx`, `Pricing.jsx`, `StatSection.jsx`, `Faq.jsx`, `Error.jsx`

### Contact form

- React Hook Form + n8n webhook (`VITE_N8N_WEBHOOK_URL`)
- POSTs JSON: `{ name, email, phone, businessType, services, message }`

## Git

- Git repo only in `twobotagency/`, not at root. Backend and docs/ are untracked.
- 3 commits. No CI, no test framework, no pre-commit hooks, no formatter config.
