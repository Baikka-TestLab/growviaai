# Edit Log — GrowViaAI

## Color Scheme: Purple → Monochrome

### 1. Brand Token Update (`src/index.css`)
- `--color-brand-purple`: `#7B2FFF` → `#FFFFFF` (white)
- `--color-brand-magenta`: `#EC4899` → `#9CA3AF` (gray-400)
- `hero-arc` / `hero-arc-line`: hardcoded purple rgba → white rgba

### 2. Hardcoded Purple Values Removed
| File | Change |
|------|--------|
| `Pricing.jsx` | `rgba(123,47,255,0.25)` shadow → `rgba(255,255,255,0.15)` |
| `Error.jsx` | `from-brand-purple to-brand-magenta text-white` → `from-white to-gray-400 text-brand-navy` |
| `index.css` | `btn-gradient` hardcoded to `#FFFFFF, #E5E7EB` with dark text |

### 3. Invisible Text on gradient-bg Fixed
`gradient-bg` (white→gray) made any `text-white`/`text-foreground` content invisible.
- `HowItWork.jsx`: icon circle `bg-white` + icon `text-brand-navy` → `bg-brand-navy-light` + icon `text-foreground`
- `Pricing.jsx`: "MOST POPULAR" badge `gradient-bg text-white` → `bg-white text-gray-900`
- `Industries.jsx`: "Soon" badge `gradient-bg text-foreground` → `bg-brand-navy-light text-foreground`
- `About.jsx`: value icon `gradient-bg` + `text-foreground` → `bg-brand-navy-light` + `text-foreground`
- `CtaBanner.jsx`: section background `gradient-bg opacity-90` → dark gradient

## Dark/Light Theme Toggle

### New: `src/context/ThemeContext.jsx`
- Stores `theme` ('dark' | 'light') in localStorage
- Sets `data-theme` attribute on `<html>`
- Exposes `useTheme()` hook

### Wired: `src/main.jsx`
- Wrapped app with `<ThemeProvider>`

### Theme Switch: `src/Components/Navbar.jsx`
- Sun/Moon icon button in desktop nav (between links & CTA)
- "Light Mode"/"Dark Mode" toggle in mobile menu

### Light Mode CSS: `src/index.css`
Full `[data-theme="light"]` variable overrides:

| Variable | Dark Mode | Light Mode |
|----------|-----------|------------|
| `brand-navy` | `#0B0D1A` | `#FFFFFF` |
| `brand-navy-light` | `#111827` | `#F3F4F6` |
| `brand-purple` | `#FFFFFF` | `#1F2937` |
| `brand-magenta` | `#9CA3AF` | `#6B7280` |
| `foreground` | `#FFFFFF` | `#111827` |
| `brand-muted` | `#9CA3AF` | `#6B7280` |
| `background` | `#0B0D1A` | `#FFFFFF` |
| `muted-foreground` | `#6B7280` | `#9CA3AF` |

### Theme-Aware Utility Classes Added
- `.bg-card` / `.border-card` — card backgrounds/borders using `--card-bg` / `--card-border` CSS variables
- `--glow-color` CSS variable — switches between white (dark mode) and black (light mode) for box-shadows

### Light Mode Overrides for Built-in Classes
- `.dot-grid`: white dots → black dots
- `.card-dark`: `#F9FAFB` bg + visible border
- `.btn-ghost`: visible border + hover on light bg
- `.btn-gradient`: dark gradient + white text

### Components Updated for Light Mode
| File | Pattern Changed | Reason |
|------|----------------|--------|
| `HowItWork.jsx` | `bg-white/5 border-white/10` → `bg-card border-card` | Invisible on white bg |
| `Pricing.jsx` (card) | `bg-white/5 border-white/10` → `bg-card border-card` | Invisible on white bg |
| `Pricing.jsx` (button) | `bg-white/5 border-white/10` → `bg-card border-card` | Invisible on white bg |
| `StatSection.jsx` | `bg-white/5 border-white/10` → `bg-card border-card` | Invisible on white bg |
| `Faq.jsx` | `bg-white/5 border-white/10 hover:bg-white/[0.07]` → `bg-card border-card hover:bg-[var(--card-hover-bg)]` | Invisible on white bg |
| `Faq.jsx` | `group-hover:text-white` → `group-hover:text-foreground` | White text on white bg |
| `Navbar.jsx` | `hover:text-white` → `hover:text-foreground` | White text on white nav bg |
| `Navbar.jsx` (toggle) | `hover:bg-white/10` → `hover:bg-brand-purple/10` | Theme-aware hover |
| `Navbar.jsx` (mobile) | `border-t border-white/10` → `border-t border-card` | Invisible in light mode |
| `Error.jsx` | `border-white/10` → `border-card`; `hover:border-white/20` → `hover:border-brand-purple/30` | Invisible in light mode |
| `Pricing.jsx` (shadow) | `rgba(255,255,255,0.15)` → `rgba(var(--glow-color),0.12)` | Switches with theme |
| `Industries.jsx` | `bg-white text-brand-navy` → `bg-brand-navy-light text-foreground` | White on white |
| `About.jsx` | `bg-white` + icon `text-brand-navy` → `bg-brand-navy-light` + `text-foreground` | White on white |

## UX Improvements

### Navbar Logo Click (`Navbar.jsx`)
- Added `onClick`: closes mobile menu; scrolls to top when already on `/`

### Cursor Pointers
Added `cursor-pointer` to all interactive elements across 7 files:
- `Navbar.jsx` — nav links, CTA button, mobile toggle
- `Error.jsx` — "Back to Home", "Go Back"
- `Footer.jsx` — company link buttons
- `Hero.jsx` — CTA buttons
- `contact.jsx` — submit button
- `CtaBanner.jsx` — CTA link
- `Pricing.jsx` — "Book a Free Demo" buttons

## Housekeeping

### `AGENTS.md` (root)
Updated with new context from this session:
- Added `npm run preview` command
- Added `VITE_N8N_WEBHOOK_URL` env and contact form POST shape
- Added route structure, ContentContext pattern, dead `App.jsx` note
- Added `src/utils/iconMap.js` utility
- Added CSS theme section with current monochrome values
- Added Gotcha: `.gradient-bg` + `text-white` = invisible
- Added light mode gotcha and bg-card/border-card component list
- Added full API route list

### Docs Reorganization
- Moved `twobotagency/README.md` → `docs/README.md` (project overview)
- Moved `twobotagency/design-tokens.md` → `docs/design-tokens.md` (updated with current monochrome + theme system)
- Updated `docs/AUDIT_BUGS.md` with 3 newly fixed bugs (B14–B16), now 7/16 resolved
- Updated `docs/AUDIT_SUGGESTIONS.md` with 7 newly completed items (S14, S24–S30), now 11/30 done
- Updated `docs/n8n.md` with payload format and usage context
- All 6 docs now under `docs/` directory
