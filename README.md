# Portfolio — Software Developer & Cybersecurity Learner

A premium, minimal, dark-first personal portfolio built with **Vite + React + TypeScript + Tailwind CSS v4**.

## Design direction

- **Palette**: near-black background (`#0A0B0D`), dark panels, near-white text, single indigo-blue accent (`#6E7BFF`). A muted terminal-green (`#4ADE80`) is used only inside the hero terminal panel.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels, code, technical metadata).
- **Signature element**: a fixed vertical "scan line" on the right edge of the screen that reads page-scroll progress as a system status readout (`SCANNING`, a segmented bar, a percentage) — ties the cybersecurity theme to real navigation instead of decoration.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

`npm run build` runs a TypeScript project check (`tsc -b`) before bundling with Vite — fix any type errors it reports before deploying.

## Customize the site

Everything personal lives in `src/data/`:

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, role, email, GitHub/LinkedIn links, hero copy, about paragraphs, developer philosophy, terminal lines |
| `src/data/skills.ts` | Skill categories (Frontend, Backend, Programming, Cybersecurity) and per-skill "Learning" state |
| `src/data/projects.ts` | Project cards — add/remove entries, each maps directly to a card |
| `src/data/journey.ts` | Learning-journey timeline, the security mindset flow diagram, and the list of security focus areas |

Replace every `YOUR_*` placeholder in `src/data/profile.ts` and `src/data/projects.ts` with your real information. Nothing else in the codebase needs to change.

### Favicon & Open Graph image

- `public/favicon.svg` — swap for your own mark if you'd like.
- `index.html` references `/og-image.png` for social previews — add a 1200×630 image at `public/og-image.png`, or remove the tag if you don't need one.

## Project structure

```
src/
├── components/     # Presentational components, one per section
├── data/           # All editable content — the single source of truth
├── hooks/          # useScrollProgress, useReducedMotion, useReveal
├── App.tsx         # Composes all sections
├── main.tsx        # React entry point
└── index.css       # Tailwind v4 import + design tokens (@theme) + component classes
```

## Notes

- Built with Tailwind CSS v4's CSS-first configuration (`@theme` in `src/index.css`) — there is no `tailwind.config.js`.
- Respects `prefers-reduced-motion`: typing/scan animations are skipped and CSS transitions are shortened for users who request reduced motion.
- The contact form is frontend-only by design — submitting opens the visitor's email client via `mailto:` rather than pretending to store a message.
- GitHub stats in the Open Source section are static placeholders, structured so a real GitHub API call can be dropped in later.
