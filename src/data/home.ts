/**
 * Content for the Workbench home page.
 *
 * Facts are reused from `site.ts` and `projects.ts` wherever they exist. The
 * pieces below that are new to this design are marked:
 *   - REAL     taken from an existing source (experience bullets, review screenshots)
 *   - DRAFT    placeholder copy written for the redesign, to be replaced by Yasir
 */

import { about as aboutSource, aiTools, delivered, experience, identity, links, roleList } from './site'
import type { Project } from './projects'

const BASE = import.meta.env.BASE_URL
const logoOf = (company: string) => experience.find((e) => e.company === company)?.logo ?? ''

/**
 * About. Adapted from the current portfolio's About text (site.ts `about`):
 * same story and the same emphasised fields, tightened for the new layout, and
 * the closing line updated now that Yasir is employed and also freelancing.
 * `**word**` marks emphasis.
 */
export const about = {
  lead: 'A software engineer focused on creating exceptional digital experiences and innovative solutions. I enjoy building elegant, data-driven applications and intelligent systems with modern technologies.',
  paragraphs: [
    'My journey started with a curiosity about how technology can solve real-world problems. That curiosity grew into building solutions across **industrial automation**, **data analysis** and **artificial intelligence**, from Frontend Intern to Python Developer, Data Engineer, AI-Native Full-Stack Engineer and now Data & AI Engineer.',
    'Today my focus is AI-powered applications, intuitive data visualizations and data-driven systems, built with AI-assisted development as the method. I work with teams across the UK, the Netherlands and Belgium, and I am open to freelance work and new opportunities in **artificial intelligence**, **Python development** and **data analytics**.',
  ],
  competencies: aboutSource.competencies,
  tools: aiTools.items.map((t) => ({ name: t.name, logo: t.logo, description: t.description })),
  journey: experience
    .slice()
    .sort((a, b) => b.start - a.start)
    .map((e) => {
      const s = Math.floor(e.start)
      const end = e.end === null ? null : Math.floor(e.end)
      return {
        years: end === null ? `${s} – now` : s === end ? `${s}` : `${s} – ${end}`,
        role: e.role,
        company: e.company.replace(' Pvt Ltd', ''),
        current: e.current,
      }
    }),
}

/** Greeting, roles and intro are the current portfolio's own copy (site.ts `identity`). */
export const hero = {
  status: 'Available for new projects', // DRAFT
  lines: [identity.greeting, 'Muhammad'],
  accent: 'Yasir Khan.',
  roles: roleList,
  lede: 'I turn complex problems into clear, actionable insights and build intelligent apps that make a real impact.',
  now: { label: 'Data & AI Engineer at Data Panda', logo: logoOf('Data Panda') },
  where: 'UK · Netherlands · Belgium',
  badge: 'shipped to production',
  photo: `${BASE}images/profile/profile_pic.webp`,
}

/** Companies and clients Yasir has worked with. Logos where the repo has one. */
export const trusted: { name: string; logo?: string; glyph?: string }[] = [
  { name: 'Data Panda', logo: logoOf('Data Panda') },
  { name: 'Top of Mind', logo: logoOf('Top of Mind') },
  { name: 'Sideline Technologies', logo: logoOf('Sideline Technologies') },
  { name: 'Orbit Digital', glyph: 'O' },
  { name: 'Dataventiv', logo: logoOf('Dataventiv') },
  { name: 'Pak Sadat', glyph: 'P' },
  { name: 'Sysbi Solutions', logo: logoOf('Sysbi Solutions Pvt Ltd') },
]

export type ServiceId = 'agents' | 'data' | 'delivery'

export const services: { id: ServiceId; title: string; body: string; stack: string[] }[] = [
  {
    id: 'agents',
    title: 'AI agents & LLM apps',
    body: 'Multi-agent workflows, retrieval and tool use, wrapped in interfaces people enjoy using.',
    stack: ['Claude', 'OpenAI', 'MCP', 'RAG'],
  },
  {
    id: 'data',
    title: 'Data pipelines & reporting',
    body: 'Ingestion, transformation and dashboards, from industrial sensors to the board report.',
    stack: ['Spark', 'Kafka', 'Airflow', 'Power BI'],
  },
  {
    id: 'delivery',
    title: 'End-to-end delivery',
    body: 'Web and mobile apps from first commit to production, with hosting and handover included.',
    stack: ['React', 'React Native', 'Docker', 'AWS'],
  },
]

export const process = ['Intro call', 'Weekly demos', 'Ship & hand over'] // DRAFT

export const deliveredIntro = delivered.intro
export const deliveredItems = delivered.items.map((d, i) => ({
  ...d,
  tags: i === 0 ? ['Development', 'AWS hosting'] : ['Web app', 'Deployment'],
}))

/** Filter keys for the project carousel, mapped from `Project.category`. */
export const projectFilters = [
  { key: 'all', label: 'All' },
  { key: 'AI Applications', label: 'AI apps' },
  { key: 'AI Designs', label: 'AI design' },
  { key: 'Tools', label: 'Tools' },
  { key: 'Data', label: 'Data' },
] as const

export const categoryLabel = (p: Project) =>
  ({ 'AI Applications': 'ai app', 'AI Designs': 'ai design', Tools: 'tool', Data: 'data' })[
    p.category
  ] ?? p.category.toLowerCase()

export const hostOf = (url: string) => {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

const sideline = experience.find((e) => e.company === 'Sideline Technologies')!
const topOfMind = experience.find((e) => e.company === 'Top of Mind')!
const dataventiv = experience.find((e) => e.company === 'Dataventiv')!

/** REAL — figures from the Sideline Technologies experience entry. */
export const stats = {
  source: 'Sideline Technologies',
  region: 'Netherlands',
  rings: [
    { value: 40, prefix: '~', suffix: '%', label: 'faster delivery timelines on mobile and web' },
    { value: 30, prefix: '~', suffix: '%', label: 'fewer repetitive manual tasks in the dev lifecycle' },
  ],
  people: { value: 5, suffix: '+', label: 'teammates coached in prompt engineering and AI workflows.' },
}

/** REAL — summaries of the experience entries; the expanded view shows the original bullets. */
export const stories = [
  {
    company: topOfMind.company,
    meta: `${topOfMind.company} · ${topOfMind.location}`,
    logo: topOfMind.logo,
    title: 'Agentic capture for voice, text and photos',
    summary:
      'Agent workflows that pull contacts, tasks and relationship context out of raw inputs, on iOS and Android.',
    details: topOfMind.blocks.flatMap((b) => b.items),
  },
  {
    company: dataventiv.company,
    meta: `${dataventiv.company} · Industrial data`,
    logo: dataventiv.logo,
    title: 'From Modbus simulator to full data pipeline',
    summary: 'A Python device simulator that grew into Spark, Kafka and Airflow pipelines.',
    details: dataventiv.closing ? [dataventiv.closing] : dataventiv.blocks.flatMap((b) => b.items),
  },
]
export const sidelineBullets = sideline.blocks.flatMap((b) => b.items)

/** REAL — transcribed verbatim from public/images/testimonial/review_1..3. */
export const reviews = [
  {
    quote:
      'Very helpful, very knowledgeable, responsive and patient. I would recommend him 12 times out of 10.',
    name: 'fbowman58',
    role: 'Client · United States · Data Engineering',
    initial: 'F',
    stars: 5,
  },
  {
    quote: 'Great worker! Finished on time and responsive.',
    name: 'slowest_rs',
    role: 'Client · United States · Data Engineering',
    initial: 'S',
    stars: 5,
  },
  {
    quote:
      'He has excellent skills, yet remains focused on the overall needs of the duties/research.',
    name: 'Sysbi Solutions Pvt Ltd',
    role: 'Recommendation letter',
    logo: logoOf('Sysbi Solutions Pvt Ltd'),
    stars: 0,
  },
]

/** DRAFT — no articles exist yet. Cards render as "coming soon" until these get real URLs. */
export const posts: {
  tag: string
  title: string
  cover: 'code' | 'word' | 'flow'
  href?: string
}[] = [
  { tag: 'agents', title: 'Five agents, one pipeline: streaming progress with SSE', cover: 'code' },
  { tag: 'career', title: 'What a forward deployed engineer actually does', cover: 'word' },
  { tag: 'data', title: 'From Modbus to Airflow: lessons from industrial data', cover: 'flow' },
]

export const brief = {
  needs: ['AI agent', 'LLM app', 'Data pipeline', 'Dashboard', 'Web app', 'Mobile app', 'Hosting & deployment'],
  timelines: ['This month', 'Next 1–3 months', 'Just exploring'],
  availability:
    "I'm currently available for freelance work and open to new opportunities.",
}

export { links }
