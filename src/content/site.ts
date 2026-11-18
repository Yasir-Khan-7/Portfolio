/**
 * Every word on the site lives here or in `projects.ts`.
 *
 * Sources:
 *   - REPO   carried over from github.com/Yasir-Khan-7/Portfolio (src/data/*.ts)
 *   - BRIEF  given in the redesign brief / design PDFs
 * Nothing is invented. Gaps are marked TODO and listed in README.md.
 */

export const person = {
  name: 'Muhammad Yasir Khan', // REPO
  shortName: 'Yasir Khan', // REPO
  role: 'AI Engineer · Forward Deployed Engineer', // BRIEF
  current: 'Data & AI Engineer at Data Panda', // REPO
}

export const links = {
  email: 'yasirkhandps7@gmail.com', // REPO
  linkedin: 'https://www.linkedin.com/in/yasir-khan7134/', // REPO
  linkedinLabel: 'linkedin.com/in/yasir-khan7134',
  github: 'https://github.com/Yasir-Khan-7', // REPO
  // TODO(yasir): Instagram URL. The footer shows it once this is set.
  instagram: '' as string,
  formspree: 'https://formspree.io/f/mwplnrda', // REPO — the existing form endpoint
}

export const nav = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
] as const

/* ---------- Home ---------- */

export const hero = {
  label: 'AI Engineer · Forward Deployed Engineer',
  headline: ['I ship AI systems', 'from first call', 'to '],
  accent: 'production.',
  lede: 'Data & AI Engineer at Data Panda. I build client systems end to end — agents, data pipelines, web and mobile — for teams across the UK, the Netherlands and Belgium.',
  facts: [
    { k: 'Based in', v: 'Pakistan · UTC+5' },
    { k: 'Working with', v: 'UK · NL · BE' },
    { k: 'Focus', v: 'Agents, data, full-stack' },
  ],
  medal: 'Silver medal · Software Engineering',
}

export const marquee = [
  'AI agents',
  'Data engineering',
  'React Native',
  'Next.js',
  'AWS',
  'Azure',
  'Postgres',
  'Process automation',
  'Monitoring',
]

export const homeAbout = {
  statement: ['I sit with the client, find the real problem, then ', 'build the thing.'],
  // BRIEF (design PDF). Marktide is named only in the design, not the old repo.
  body: 'Software engineer and Forward Deployed Engineer at Data Panda, and co-founder of Marktide. Silver medallist in Software Engineering, working with clients in the UK, the Netherlands and Belgium.',
  stats: [
    { value: '2+', label: 'years shipping products with startups', tone: 'ink' },
    { value: '3', label: 'countries served: UK, Netherlands, Belgium', tone: 'white' },
    { value: 'Silver', label: 'medal in Software Engineering', tone: 'green' },
    { value: '0→1', label: 'from first commit to production', tone: 'peach' },
  ],
}

/* ---------- Services ---------- */

export const services = [
  {
    id: 'agents',
    n: '01',
    title: 'AI agents & LLM apps',
    body: 'Multi-agent workflows, retrieval and tool use, wrapped in interfaces people enjoy using.',
    tags: ['Claude', 'OpenAI', 'MCP', 'RAG'],
  },
  {
    id: 'data',
    n: '02',
    title: 'Data pipelines & reporting',
    body: 'Ingestion, transformation and reporting, from device data to dashboards a team can act on.',
    tags: ['Spark', 'Kafka', 'Airflow', 'Power BI'],
  },
  {
    id: 'delivery',
    n: '03',
    title: 'End-to-end delivery',
    body: 'From first commit to production, including the infrastructure it runs on.',
    tags: ['Development', 'AWS hosting', 'Deployment'],
  },
] as const

export const processSteps = [
  { n: '1', title: 'Intro call', body: 'We scope the problem and agree on what done looks like.' },
  { n: '2', title: 'Weekly demos', body: 'You see working software every week and steer it.' },
  { n: '3', title: 'Ship & hand over', body: 'Deployed, documented and handed to your team.' },
]

// REPO (aiTools)
export const aiTools = [
  'GitHub Copilot & VS Code',
  'ChatGPT',
  'Claude Code (CLI)',
  'Cursor',
  'Lovable',
  'Figma Make',
]

/* ---------- About ---------- */

export const about = {
  headline: ['Curious about how', 'technology solves', ''],
  accent: 'real problems.',
  lede: "I'm a software engineer focused on data-driven applications and intelligent systems. Today I'm a Data & AI Engineer at Data Panda, working with teams across the UK, the Netherlands and Belgium.",
  // REPO (home.ts about.paragraphs). **x** marks emphasis.
  journey: [
    'My journey started with a curiosity about how technology can solve real-world problems. That curiosity grew into building solutions across **industrial automation**, **data analysis** and **artificial intelligence**, from Frontend Intern to Python Developer, Data Engineer, AI-Native Full-Stack Engineer and now Data & AI Engineer.',
    'Today my focus is AI-powered applications, intuitive data visualizations and data-driven systems, built with AI-assisted development as the method. I work with teams across the UK, the Netherlands and Belgium, and I am open to freelance work and new opportunities in **artificial intelligence**, **Python development** and **data analytics**.',
  ],
  // REPO (site.ts about.competencies)
  competencies: [
    { name: 'AI-Driven Software Development', tone: 'blue' },
    { name: 'Natural Language Processing' },
    { name: 'Business Intelligence & Analytics' },
    { name: 'Database Management', tone: 'green' },
    { name: 'Industrial Automation' },
    { name: 'Data Pipeline Engineering' },
    { name: 'Frontend Web Solutions', tone: 'peach' },
    { name: 'Data Visualization' },
  ],
}

// REPO (site.ts experience), years derived from the recorded durations.
export const career = [
  { years: '2026 – now', role: 'Data & AI Engineer', company: 'Data Panda', current: true },
  { years: '2026', role: 'AI Software Engineer (Freelance)', company: 'Top of Mind' },
  { years: '2025 – 2026', role: 'AI-Native Full-Stack Engineer', company: 'Sideline Technologies' },
  { years: '2024 – 2025', role: 'Python Developer → Data Engineer', company: 'Dataventiv' },
  { years: '2023', role: 'Frontend Developer Internee', company: 'Sysbi Solutions' },
]

// REPO (home.ts trusted)
export const trusted = [
  'Data Panda',
  'Top of Mind',
  'Sideline Technologies',
  'Orbit Digital',
  'Dataventiv',
  'Pak Sadat',
  'Sysbi Solutions',
]

// REPO (home.ts reviews) — transcribed from the review screenshots. Do not edit.
export const testimonials = [
  {
    quote:
      'Very helpful, very knowledgeable, responsive and patient. I would recommend him 12 times out of 10.',
    name: 'fbowman58',
    role: 'Client · United States · Data Engineering',
    stars: 5,
    tone: 'white',
  },
  {
    quote: 'Great worker! Finished on time and responsive.',
    name: 'slowest_rs',
    role: 'Client · United States · Data Engineering',
    stars: 5,
    tone: 'blue',
  },
  {
    quote:
      'He has excellent skills, yet remains focused on the overall needs of the duties/research.',
    name: 'Sysbi Solutions Pvt Ltd',
    role: 'Recommendation letter',
    stars: 0,
    tone: 'ink',
  },
] as const

/* ---------- Case study ---------- */

export const topOfMind = {
  breadcrumb: 'Case study · Top of Mind · Belgium',
  headline: 'Agentic capture for',
  accent: 'voice, text and photos.',
  lede: 'Agent workflows that pull contacts, tasks and relationship context out of raw inputs, on iOS and Android.',
  meta: [
    { k: 'Client', v: 'Top of Mind' },
    { k: 'Role', v: 'AI Software Engineer (Freelance)' },
    { k: 'Year', v: '2026' },
    { k: 'Stack', v: 'React Native · Supabase · OpenAI Codex' },
  ],
  inputs: ['Voice note', 'Text message', 'Photo'],
  outputs: ['Contacts', 'Tasks', 'Relationship context'],
  // REPO (Top of Mind experience bullets, verbatim)
  built: [
    {
      title: 'Agent workflows',
      body: 'Built AI-driven agent workflows using OpenAI Codex that automatically extract contacts, tasks, and relationship context from voice, text, and photo inputs.',
    },
    {
      title: 'Extraction pipelines',
      body: 'Designed and tuned prompt logic for custom edge functions and Supabase-backed extraction pipelines, turning raw capture inputs into structured actionables with minimal user friction.',
    },
    {
      title: 'Cross-platform mobile',
      body: 'Developed cross-platform mobile (iOS and Android) features using React Native and Codex, integrating AI inference into mobile and backend flows to deliver a seamless agentic capture experience with reduced manual data entry.',
    },
  ],
  glance: [
    { k: 'Inputs', v: 'Voice · Text · Photo', tone: 'white' },
    { k: 'Outputs', v: 'Contacts · Tasks · Context', tone: 'blue' },
    { k: 'Platforms', v: 'iOS · Android', tone: 'green' },
  ],
  // TODO(yasir): there is no Dataventiv case study page yet; the link is shown as "coming soon".
  next: { client: 'Dataventiv', title: 'From Modbus simulator to full data pipeline' },
}

/* ---------- Journal ---------- */

export const posts = [
  {
    tag: 'Agents',
    title: 'Five agents, one pipeline: streaming progress with SSE',
    cover: 'code',
    featured: true,
  },
  { tag: 'Career', title: 'What a forward deployed engineer actually does', cover: 'word' },
  { tag: 'Data', title: 'From Modbus to Airflow: lessons from industrial data', cover: 'flow' },
] as const

export const journalTopics = ['Agents', 'Career', 'Data', 'Forward deployed work']

/* ---------- Contact ---------- */

// REPO (home.ts brief)
export const brief = {
  needs: ['AI agent', 'LLM app', 'Data pipeline', 'Dashboard', 'Web app', 'Mobile app', 'Hosting & deployment'],
  timelines: ['This month', 'Next 1–3 months', 'Just exploring'],
  intro:
    "Pick what fits and I'll draft the message for you. I'm currently available for freelance work and open to new opportunities.",
}

/* ---------- Success stories (REPO: home.ts stats + stories) ---------- */

// Figures from the Sideline Technologies experience entry.
export const stats = {
  source: 'Sideline Technologies',
  region: 'Netherlands',
  rings: [
    { value: 40, prefix: '~', suffix: '%', label: 'faster delivery timelines on mobile and web' },
    { value: 30, prefix: '~', suffix: '%', label: 'fewer repetitive manual tasks in the dev lifecycle' },
  ],
  people: { value: '5+', label: 'teammates coached in prompt engineering and AI workflows.' },
}

export const stories = [
  {
    id: 'top-of-mind',
    meta: 'Top of Mind · Belgium',
    logo: '/images/experience/top_of_mind_logo.webp',
    title: 'Agentic capture for voice, text and photos',
    summary:
      'Agent workflows that pull contacts, tasks and relationship context out of raw inputs, on iOS and Android.',
    details: [
      'Built AI-driven agent workflows using OpenAI Codex that automatically extract contacts, tasks, and relationship context from voice, text, and photo inputs.',
      'Designed and tuned prompt logic for custom edge functions and Supabase-backed extraction pipelines, turning raw capture inputs into structured actionables with minimal user friction.',
      'Developed cross-platform mobile (iOS and Android) features using React Native and Codex, integrating AI inference into mobile and backend flows to deliver a seamless agentic capture experience with reduced manual data entry.',
    ],
    caseStudy: '/work/top-of-mind',
  },
  {
    id: 'dataventiv',
    meta: 'Dataventiv · Industrial data',
    logo: '/images/experience/dataventiv_logo.png',
    title: 'From Modbus simulator to full data pipeline',
    summary: 'A Python device simulator that grew into Spark, Kafka and Airflow pipelines.',
    details: [
      'Built comprehensive data collection and monitoring systems for industrial clients, progressing from simulation development to full data engineering pipeline implementation.',
    ],
    caseStudy: null as string | null,
  },
]

/** Avatar for each testimonial: a logo, or an initial. */
export const reviewMarks: Record<string, { logo?: string; initial?: string }> = {
  fbowman58: { initial: 'F' },
  slowest_rs: { initial: 'S' },
  'Sysbi Solutions Pvt Ltd': { logo: '/images/experience/sysbi_technology_logo.png' },
}
