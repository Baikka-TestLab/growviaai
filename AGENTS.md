# GrowViaAI

Two packages in one repo — **no monorepo tooling**, run commands from each dir.

## Backend (`backend/`)

- Express 5 + Mongoose (installed but **DB connection commented out** — data is static JSON in `src/data/`)
- CommonJS. Entry: `server.js` → `src/app.js`
- Commands (run from `backend/`):
  - `npm run dev` — nodemon auto-reload
  - `npm start` — node server.js
- Env: `.env` with `PORT=5000`
- API routes: `GET /api/test`, `/api/navbar`, `/api/hero` — all respond with `{ success, data }`

## Frontend (`twobotagency/`)

- React 19 + Vite 8 + Tailwind CSS 4 (via `@tailwindcss/vite` plugin, no PostCSS config) + DaisyUI 5
- ESM (`"type": "module"`). Entry: `src/main.jsx` (Vite HMR entry via `index.html`)
- Commands (run from `twobotagency/`):
  - `npm run dev` — Vite dev server (HMR)
  - `npm run build` — Vite production build
  - `npm run lint` — ESLint flat config (`eslint.config.js`)
- Env: `.env` with `VITE_API_URL=http://localhost:5000` — consumed via `import.meta.env.VITE_API_URL` in `src/api/api.js`
- API calls go through `src/api/api.js` (Axios instance) → `src/services/` → backend
- Content loaded on mount via `src/context/ContentContext.jsx` (fetches `/api/hero`)
- React Router v7 with `createBrowserRouter` + `RouterProvider`
- Components in `src/Components/` — mostly `.jsx` (one lowercase: `contact.jsx`)
- Error page: `Error.jsx`, imported as `ErrorPage` to avoid shadowing JS built-in `Error`

## Git

- Git repo only in `twobotagency/`, not at root. Backend is untracked.
- No CI, no test framework, no pre-commit hooks, no formatter config.
