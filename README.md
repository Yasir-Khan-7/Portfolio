# Muhammad Yasir Khan — Portfolio

AI Engineer · Prompt Engineer · Vibe Coder
Live: https://yasir-khan-7.github.io/Portfolio/

A rebuild of the portfolio in a pipeline-run visual world: sections are nodes on
a canvas, each project is a task with real state, and the three roles read as
duration bars on one shared time axis. All copy, projects, experience and links
are carried over verbatim from the previous site.

## Stack

| | |
|---|---|
| Build | Vite 8 |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, no config file) |
| Icons | lucide-react, plus authored SVG brand marks |
| Fonts | Archivo Variable + Martian Mono, self-hosted via Fontsource |
| Routing | react-router-dom |
| Forms | Formspree (no backend) |

Design decisions are recorded in [DESIGN.md](DESIGN.md); product truth lives in
`../PRODUCT.md`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/Portfolio/
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Deploy to GitHub Pages

The site is served from the `/Portfolio/` project subpath — `base` in
`vite.config.ts` and `basename` on the router both depend on it. If you rename
the repository, change both.

**Recommended — GitHub Actions.** Push to `main`; `.github/workflows/deploy.yml`
builds and publishes. Enable it once under *Settings → Pages → Source →
GitHub Actions*.

**Manual.**

```bash
npm run deploy   # builds, then pushes dist/ to the gh-pages branch
```

`public/404.html` carries the spa-github-pages redirect shim so a deep link to
`/Portfolio/projects` resolves; `public/.nojekyll` stops Jekyll from eating
asset paths.

## Content

Everything editable lives in two files:

- `src/data/site.ts` — identity, links, about, AI tools, skills, experience,
  testimonials, contact copy
- `src/data/projects.ts` — the twelve projects and the filter taxonomy

Screenshots are in `public/images/`, converted to WebP (37 MB → 3 MB).
