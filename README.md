# Yasir Khan: Portfolio (Next.js)

AI Engineer · Forward Deployed Engineer. Next.js 16 (App Router), static export,
deployable to GitHub Pages or Vercel.

## Develop

```bash
npm install
npm run dev -- -p 4310      # http://localhost:4310
npm run build               # static site in out/
npm run shots               # re-capture client-site screenshots (Playwright)
```

## Deploy

- **GitHub Pages** (`https://yasir-khan-7.github.io/Portfolio/`): push to `main`;
  `.github/workflows/deploy.yml` builds with `NEXT_PUBLIC_BASE_PATH=/Portfolio`
  and publishes `out/`. Settings → Pages → Source → GitHub Actions.
- **Vercel / any root domain**: import the repo, no env vars needed. Set
  `NEXT_PUBLIC_SITE_URL` to the final domain so canonicals and OG tags match.

## Where things live

| | |
|---|---|
| `src/content/site.ts` | every word on the site: hero, services, about, career, testimonials, case study, journal, contact |
| `src/content/projects.ts` | the 5 client launches (cards) and 12 personal projects, with every screenshot for the details modal |
| `src/app/globals.css` | design tokens (`:root`), shell: header, footer, buttons, motion |
| `src/app/cards.css` | the ProjectCard layout + the 5 client themes and scene animations |
| `src/app/sections.css` | page sections |
| `src/components/project-card/` | `ProjectCard` (shared shell), `Devices` (laptop/phone), `scenes.tsx` (one scene per client) |
| `public/images/clients/` | fresh Playwright captures of the 4 public client sites |
| `public/images/projects/` | personal-project screenshots (modal gallery); `covers/` holds the small grid covers |

**Pak Sadat is a private client system.** Its card is an HTML/CSS mock-up with
invented demo data only. Never screenshot it or add real records.

## TODO (needs Yasir)

- [ ] Instagram URL → `links.instagram` in `src/content/site.ts` (footer hides it until set)
- [ ] SkillGuard and Charaghan personal projects (left out; tab shows 12)
- [ ] "Web" filter: no project is tagged Web yet, so the filter is hidden
- [ ] Dataventiv case study page (the "Next case study" link shows "Coming soon")
- [ ] Journal posts (all three marked "Coming soon")
