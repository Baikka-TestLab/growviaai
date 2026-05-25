# GrowViaAI — Design Tokens & Color System

> Current state: **Monochrome** with dark/light theme toggle.

---

## 1. Brand Palette (Custom Tokens)

Defined in `src/index.css` `@theme` block and `[data-theme="light"]` override.

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `brand-navy` | `#0B0D1A` | `#FFFFFF` | Page bg, navbar, footer, sections |
| `brand-navy-light` | `#111827` | `#F3F4F6` | Alternate section bg (HowItWorks, Stats, Pricing) |
| `brand-purple` | `#FFFFFF` | `#1F2937` | Accent (icons, borders, checkmarks, hover states) |
| `brand-magenta` | `#9CA3AF` | `#6B7280` | Gradient pair with brand-purple |
| `foreground` | `#FFFFFF` | `#111827` | Primary text (headings, titles) |
| `brand-muted` | `#9CA3AF` | `#6B7280` | Secondary text (paragraphs, descriptions) |
| `background` | `#0B0D1A` | `#FFFFFF` | Error page bg |
| `muted-foreground` | `#6B7280` | `#9CA3AF` | Error page muted text |

---

## 2. Color System

### Theme Switching
- Managed by `ThemeContext` (`src/context/ThemeContext.jsx`)
- Stores preference in `localStorage`
- Sets `data-theme="dark"` or `data-theme="light"` on `<html>`
- CSS variables swap values between `:root` (dark) and `[data-theme="light"]`

### Utility Classes for Theme Awareness
```css
.bg-card       /* card bg: rgba(255,255,255,0.05) dark / rgba(0,0,0,0.04) light */
.border-card   /* card border: rgba(255,255,255,0.1) dark / rgba(0,0,0,0.12) light */
```

### Glow Shadow
```css
--glow-color: 255,255,255;  /* dark mode — white glow */
--glow-color: 0,0,0;        /* light mode — black shadow */
```
Usage: `shadow-[0_0_40px_rgba(var(--glow-color),0.12)]`

---

## 3. Utility Classes

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, var(--color-brand-purple), var(--color-brand-magenta));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
Dark: white → gray-400. Light: dark → gray-500.

### Gradient Background
```css
.gradient-bg {
  background: linear-gradient(135deg, var(--color-brand-purple), var(--color-brand-magenta));
}
```
**Gotcha**: `gradient-bg` is white→gray. Any `text-white`/`text-foreground` on it is invisible. Always use `text-brand-navy` on `gradient-bg`.

### Button Gradient
```css
.btn-gradient {
  background: linear-gradient(135deg, #FFFFFF, #E5E7EB);
  color: var(--color-brand-navy);
}
```
Light mode override: dark → darker gray with white text.

### Card Dark
```css
.card-dark {
  background: var(--color-brand-navy);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```
Light mode: `background: #F9FAFB; border-color: rgba(0,0,0,0.1);`

### Ghost Button
```css
.btn-ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-foreground);
}
```
Light mode: border uses black at 15%.

### Dot Grid
```css
.dot-grid {
  background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}
```
Light mode: uses `rgba(0, 0, 0, 0.12)` for dots.

### Section Padding
```css
.section-padding {
  padding: 5rem 1rem;
}
@media (min-width: 768px) {
  .section-padding { padding: 6rem 2rem; }
}
```

---

## 4. Section Backgrounds

| Section | Dark Mode | Light Mode |
|---------|-----------|------------|
| Hero, Services, Testimonials, FAQ, SocialProof, Footer, About, Contact | `bg-brand-navy` | `bg-brand-navy` (#FFFFFF) |
| HowItWorks, Stats, Pricing | `bg-brand-navy-light` | `bg-brand-navy-light` (#F3F4F6) |
| CTA Banner | dark gradient via `bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy` | same (swaps to white/light-gray) |
| Error page | `bg-background` | `bg-background` (#FFFFFF) |

---

## 5. Dark/Light Theme Notes

- **Card backgrounds**: Use `bg-card` / `border-card` classes for theme-aware cards (auto-switches between subtle white and subtle dark).
- **Text on white/gray backgrounds**: Never use `text-white` — use `text-foreground` (switches with theme).
- **Icons in circles**: Use `bg-brand-navy-light` circle + `text-foreground` icon.
- **Hover states**: Use `hover:text-foreground` or `hover:border-brand-purple/30` (both theme-aware).
- **Borders**: Use `border-card` instead of `border-white/10`.
- For future components, prefer CSS variable tokens over hardcoded Tailwind opacity classes.

---

## 6. Hardcoded Values Still Present

| Value | Location | Context |
|-------|----------|---------|
| `text-amber-500` | `Hero.jsx:65` | Warm accent in heading (visible in both modes) |

---

## 7. Font Families

```css
--font-display: "Inter", sans-serif;
--font-body: "Inter", sans-serif;
```
Loaded via Google Fonts in `index.html`.
