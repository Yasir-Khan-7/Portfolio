import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { OG_IMAGE_HOME, PROJECTS_URL, SITE_URL } from './src/data/urls.ts'
import { homeJsonLd } from './src/data/structuredData.ts'

const root = (p: string) => fileURLToPath(new URL(p, import.meta.url))

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/**
 * Bakes each route's head tags into its static HTML. Vite will not generate
 * them per entry, so without this /projects would ship the home page's title,
 * canonical and description. Crawlers and answer engines that never run
 * JavaScript read these tags straight from the file.
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

  return {
    name: 'static-seo',
    // `pre` so the injected markup is present before Vite rewrites asset URLs.
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const tags = ctx.filename.endsWith('projects.html')
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
        return html.replace('<!--seo:head-->', tags)
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
    // `projects.html` is served at /Portfolio/projects with a 200 and no
    // redirect — matching the router path exactly.
    rolldownOptions: {
      input: {
        main: root('index.html'),
        projects: root('projects.html'),
      },
    },
  },
})
