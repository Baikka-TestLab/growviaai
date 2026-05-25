# GrowViaAI

AI-powered booking and voice calling agents for local service businesses. Two packages in one repo — **no monorepo tooling**, run commands from each dir.

## Project Structure

```
root/
├── AGENTS.md              # OpenCode agent instructions
├── docs/                  # Design docs, edit log, audit notes
│   ├── design-tokens.md   # Color system & utility classes
│   ├── EDIT_LOG.md        # Full edit history
│   ├── AUDIT_BUGS.md      # Known bugs tracker
│   ├── AUDIT_SUGGESTIONS.md
│   ├── n8n.md             # n8n webhook URL
│   └── README.md          # This file
├── backend/               # Express 5 API (untracked by git)
│   ├── server.js          # Entry point
│   ├── src/app.js         # App setup
│   └── src/data/          # Static JSON data
└── twobotagency/          # React 19 + Vite 8 frontend
    └── src/
        ├── main.jsx       # Entry point
        ├── context/       # ThemeContext, ContentContext
        ├── Components/    # 17 components
        ├── services/      # 9 API service files
        ├── api/api.js     # Axios instance
        └── utils/iconMap.js
```

## Commands

### Frontend (`twobotagency/`)
| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server (HMR) |
| `npm run build` | Production build |
| `npm run lint` | ESLint flat config |
| `npm run preview` | Preview production build |

### Backend (`backend/`)
| Command | Description |
|---------|-------------|
| `npm run dev` | Nodemon auto-reload |
| `npm start` | Node server.js |

## Key Features

- **Monochrome theme** with dark/light toggle persisted in localStorage
- **React Router v7** with `createBrowserRouter` + `RouterProvider`
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin
- **DaisyUI 5** for base component styles
- **Contact form** → n8n webhook (`VITE_N8N_WEBHOOK_URL`)
- **ContentContext** fetches `/api/hero` on mount, provides via `useContent()`

## .env (`twobotagency/.env`)

```
VITE_API_URL=https://growviaai.vercel.app
VITE_N8N_WEBHOOK_URL=https://1524-747.n8nbysnbd.top/webhook/9f0bb592-049f-401a-bc37-558bf62ab01c
```

## Git

- Git repo only in `twobotagency/`. Backend and `docs/` are untracked.
- No CI, no tests, no pre-commit hooks, no formatter.
