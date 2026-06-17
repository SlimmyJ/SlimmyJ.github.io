# slimmyj.github.io

Personal portfolio site for **Simon Van Tittelboom** — a single-page site built with
Vue 3, Vite and Tailwind CSS v4.

🔗 **Live:** https://slimmyj.github.io

## Tech stack

- **Vue 3** (`<script setup>` single-file components)
- **Vite** for dev server and bundling
- **Tailwind CSS v4** (CSS-first config) for styling
- Zero runtime dependencies beyond Vue — no jQuery, no Bootstrap, no icon fonts
- Light/dark mode, scroll-spy navigation, scroll-reveal animations, fully responsive

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build locally
```

## Editing content

All text lives in one file: [`src/data/site.js`](src/data/site.js).
Update your role, about text, skills, experience and education there — no component
edits required.

- **Replace the CV:** drop a new PDF at `public/Simon-Van-Tittelboom-CV.pdf`
  (or change `profile.resume` to point elsewhere).
- **Social card image:** replace `public/og-image.png` (ideally 1200×630).

## Deployment

Deployment is automatic via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):
every push to `master` builds the site and publishes `/dist` to GitHub Pages.

**One-time setup:** in the repo settings → **Pages**, set **Source** to
**GitHub Actions**.
