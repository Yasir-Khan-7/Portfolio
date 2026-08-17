import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {
  articles,
  engagement,
  faq,
  jobs,
  OG_IMAGE,
  OG_IMAGE_HOME,
  pipeline,
  PROJECTS_URL,
  SERVICES_URL,
  proof,
  servicesIntro,
  servicesSeo,
  SITE_URL,
  triggers,
} from './src/data/services.ts'
import { homeJsonLd, servicesJsonLd } from './src/data/structuredData.ts'

const root = (p: string) => fileURLToPath(new URL(p, import.meta.url))

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const ul = (items: string[]) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`

/**
 * Bakes each route's head tags and a real, readable body into its static HTML.
 *
 * Two separate problems are being solved here, and only one of them is Google's.
 *
 * The head tags matter because Vite will not generate them per entry: without
 * this, both pages would ship whatever `index.html` happens to say, and the
 * services page would be indexed under the home page's title.
 *
 * The body matters because of everything that is not Googlebot. Google renders
 * JavaScript and would eventually index a client-rendered page; GPTBot,
 * ClaudeBot and PerplexityBot fetch the HTML and never execute it, so an empty
 * `<div id="root">` is genuinely all they would ever see. Generating the copy
 * from the same modules the components render means the served markup and the
 * rendered page cannot disagree — which is what keeps this a fallback rather
 * than cloaking. React replaces the fallback when it mounts.
 */
function staticSeo(): Plugin {
  const head = (o: {
    title: string
    description: string
    canonical: string
    ogTitle: string
    ogDescription: string
    image: string
    jsonLd: unknown[]
  }) =>
    [
      `<title>${esc(o.title)}</title>`,
      `<meta name="description" content="${esc(o.description)}" />`,
      `<link rel="canonical" href="${o.canonical}" />`,
      `<meta property="og:title" content="${esc(o.ogTitle)}" />`,
      `<meta property="og:description" content="${esc(o.ogDescription)}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:url" content="${o.canonical}" />`,
      `<meta property="og:image" content="${o.image}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${esc(o.ogTitle)}" />`,
      `<meta name="twitter:description" content="${esc(o.ogDescription)}" />`,
      `<meta name="twitter:image" content="${o.image}" />`,
      ...o.jsonLd.map(
        (b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`,
      ),
    ].join('\n    ')

  // Generated from the same modules the components render, so the served markup
  // and the rendered page describe the same offer. Mirrors the document's own
  // article structure rather than inventing a second one.
  const servicesBody = () =>
    [
      `<nav aria-label="Breadcrumb"><a href="${SITE_URL}">Home</a> / Services</nav>`,
      `<h1>${esc(servicesIntro.heading)}</h1>`,
      `<p>${esc(servicesIntro.lede)}</p>`,
      `<p>${esc(servicesIntro.availability)}</p>`,

      `<h2>${esc(articles[0].title)}</h2>`,
      jobs
        .map((j) =>
          [
            `<h3>${esc(j.name)}</h3>`,
            `<p>${esc(j.summary)}</p>`,
            `<h4>You supply</h4>${ul(j.inputs)}`,
            `<h4>Works executed</h4><ol>${j.stages
              .map((s) => `<li>${esc(s.name)} — ${esc(s.detail)}</li>`)
              .join('')}</ol>`,
            `<h4>You receive</h4>${ul(j.artifacts)}`,
            `<p>Complete when: ${esc(j.exit)}</p>`,
            `<p>Stack: ${esc(j.stack.join(', '))}</p>`,
          ].join(''),
        )
        .join(''),

      `<h2>${esc(articles[1].title)}</h2>`,
      `<p>${esc(triggers.lede)}</p>`,
      triggers.items
        .map((t) => `<h3>${esc(t.who)}</h3><p>${esc(t.arrivesWith)}</p><p>${esc(t.note)}</p>`)
        .join(''),

      `<h2>${esc(articles[2].title)}</h2>`,
      `<p>${esc(pipeline.lede)}</p>`,
      `<ol>${pipeline.stages
        .map((s) => `<li>${esc(s.name)} — ${esc(s.detail)} Produces: ${esc(s.output)}</li>`)
        .join('')}</ol>`,

      `<h2>${esc(articles[3].title)}</h2>`,
      `<p>${esc(engagement.lede)}</p>`,
      engagement.models
        .map(
          (m) =>
            `<h3>${esc(m.name)}</h3><p>${esc(m.shape)}</p><p>Best for: ${esc(
              m.bestFor,
            )}</p><p>Scope: ${esc(m.scope)}</p><p>How it ends: ${esc(
              m.ends,
            )}</p><p>Not included: ${esc(m.notIncluded)}</p>`,
        )
        .join(''),

      `<h2>${esc(articles[4].title)}</h2>`,
      `<p>${esc(proof.lede)}</p>`,

      `<h2>${esc(articles[5].title)}</h2>`,
      faq.items.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join(''),

      `<h2>${esc(articles[6].title)}</h2>`,
      `<p>Fees are quoted against a written scope. <a href="${SITE_URL}">Portfolio</a> · <a href="${PROJECTS_URL}">Projects</a></p>`,
    ].join('\n      ')

  return {
    name: 'static-seo',
    // `pre` so the injected markup is present before Vite rewrites asset URLs.
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const isServices = ctx.filename.endsWith('services.html')
        const isProjects = ctx.filename.endsWith('projects.html')

        const tags = isServices
          ? head({
              title: servicesSeo.title,
              description: servicesSeo.description,
              canonical: SERVICES_URL,
              ogTitle: servicesSeo.ogTitle,
              ogDescription: servicesSeo.ogDescription,
              image: OG_IMAGE,
              jsonLd: servicesJsonLd(),
            })
          : isProjects
            ? head({
                title: 'Projects | Muhammad Yasir Khan',
                description:
                  'Selected AI, data engineering and full-stack builds, every one of them live and clickable, with source where it is public.',
                canonical: PROJECTS_URL,
                ogTitle: 'Projects | Muhammad Yasir Khan',
                ogDescription:
                  'Selected AI, data engineering and full-stack builds, every one live and clickable.',
                image: OG_IMAGE_HOME,
                jsonLd: [],
              })
            : head({
                title: 'Muhammad Yasir Khan | Portfolio',
                description:
                  'Muhammad Yasir Khan: AI Engineer, Forward Deployed Engineer, AI Software Engineer. Currently Data & AI Engineer at Data Panda, shipping client systems end to end across the UK, Netherlands and Belgium.',
                canonical: SITE_URL,
                ogTitle: 'Muhammad Yasir Khan | Portfolio',
                ogDescription:
                  'AI Engineer and Forward Deployed Engineer. Currently Data & AI Engineer at Data Panda, shipping client systems end to end across the UK, Netherlands and Belgium.',
                image: OG_IMAGE_HOME,
                jsonLd: homeJsonLd(),
              })

        let out = html.replace('<!--seo:head-->', tags)
        if (isServices) out = out.replace('<!--seo:body-->', servicesBody())
        return out
      },
    },
  }
}

// Deployed to GitHub Pages at https://yasir-khan-7.github.io/Portfolio/
// so every emitted asset URL has to carry the /Portfolio/ prefix.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss(), staticSeo()],
  build: {
    assetsInlineLimit: 2048,
    // Flat entries, not directories. GitHub Pages serves extensionless HTML, so
    // `services.html` is served at /Portfolio/services with a 200 and no
    // redirect — matching the router path exactly. `services/index.html` would
    // instead make GitHub Pages 301 to a trailing slash the router does not use.
    rolldownOptions: {
      input: {
        main: root('index.html'),
        services: root('services.html'),
        projects: root('projects.html'),
      },
    },
  },
})
