/**
 * Copy source of record for the services surface (`/services`, run 002).
 *
 * Unlike src/data/site.ts — which is ported verbatim from the incumbent site —
 * this file is new copy written for a page that did not exist before. The rules
 * it was written under, and which any edit has to keep:
 *
 *   - No prices, no rates, no ranges. The user's decision is engagement models
 *     without numbers; a figure appearing here contradicts the page's own claim
 *     that rates are quoted per brief.
 *   - No invented metrics, client names, counts, timelines or guarantees.
 *     Every capability claim traces to something already asserted in
 *     src/data/site.ts (the experience entries and the delivered client work).
 *   - "Selected", never "all". The site does not assert totals it cannot verify.
 *
 * The `portfolio` job is a productized entry tier: fixed inputs, fixed
 * artifacts, fixed exit. It is a job definition rather than an audience note
 * because that is what makes it a product instead of discounted consulting.
 */

/*
 * This module is imported by vite.config.ts at build time to generate the
 * crawlable static body of services/index.html. It must therefore stay free of
 * `import.meta.env` and of any other browser-only reference at module scope —
 * a `BASE_URL` read here is `undefined` in the config context and takes the
 * whole build down with it. Asset paths belong in the components, not here.
 */

/** Absolute origin, needed for canonical URLs and JSON-LD. */
export const SITE_ORIGIN = 'https://yasir-khan-7.github.io'
export const SITE_URL = `${SITE_ORIGIN}/Portfolio/`

/**
 * No trailing slash, and that is deliberate.
 *
 * The build emits a flat `services.html`, and GitHub Pages serves extensionless
 * HTML — so `/Portfolio/services` returns 200 directly, with no redirect, and
 * matches the React Router path exactly. Emitting `services/index.html` instead
 * would make GitHub Pages 301 `/Portfolio/services` to `/Portfolio/services/`,
 * costing a redirect hop and splitting the page across two URLs. Every internal
 * link, the sitemap, `og:url`, the canonical and the JSON-LD `@id`s use this
 * exact string.
 */
export const SERVICES_URL = `${SITE_ORIGIN}/Portfolio/services`
export const PROJECTS_URL = `${SITE_ORIGIN}/Portfolio/projects`
/** 1200x630 share cards, drawn in the run-view language. Both are 1:1 with the
 *  `og:image:width`/`height` the head declares — a mismatch there is what makes
 *  a preview crop badly on LinkedIn. */
export const OG_IMAGE = `${SITE_ORIGIN}/Portfolio/images/og/og-card.png`
export const OG_IMAGE_HOME = `${SITE_ORIGIN}/Portfolio/images/og/og-home.png`

/** Head tags for /services. The static entry and the SPA must agree on these. */
export const servicesSeo = {
  /** 54 chars. Carries the primary keyword; the H1 carries it once more. */
  title: 'Freelance Full-Stack Developer for Agencies & Startups',
  /** 152 chars. */
  description:
    'Web, mobile and full-stack builds shipped end to end: white-label overflow for agencies, 0-to-1 for startups, fixed-scope portfolio sites. Send a brief.',
  /** Share previews are read by people, not by a ranking system, so they differ. */
  ogTitle: 'Freelance developer for agencies, startups and first portfolios',
  ogDescription:
    'Full-stack, mobile (iOS + Android) and web application builds, taken from first commit to production. White-label overflow for agencies.',
}

/** Standing facts printed in the opening elevation. */
export const documentMeta = {
  preparedBy: 'Muhammad Yasir Khan',
  preparedFor: 'Agencies, startups, and first portfolios',
  status: 'Available for work',
}

/**
 * The bays of the wall, in the order they are glazed. These are the scroll
 * targets and the elevation key. No numbering: in this world the wall
 * elevation is the map, and a pane is stepped up to rather than cited.
 */
export const articles = [
  { id: 'jobs', title: 'What I build', short: 'four pieces of work' },
  { id: 'triggers', title: 'Who this is for', short: 'three kinds of client' },
  { id: 'pipeline', title: 'How the work runs', short: 'brief to handover' },
  { id: 'engagement', title: 'How we contract', short: 'three models' },
  { id: 'proof', title: 'Already delivered', short: 'live and clickable' },
  { id: 'faq', title: 'Questions answered', short: 'before you write' },
  { id: 'brief', title: 'Send a brief', short: 'start here' },
] as const

export const servicesIntro = {
  /**
   * The h1. One per page. It reads as a sentence rather than a slogan because
   * it is the element that most reliably carries the primary search term, and
   * "freelance full stack developer for agencies" is the query this page can
   * realistically win — the unqualified head terms are owned outright by
   * Upwork, Toptal and Arc, and are not worth writing for.
   */
  heading: 'Freelance full-stack developer for agencies, startups and first portfolios',
  lede: 'Software built and shipped end to end. I take web and mobile products from first commit to the server they run on, including the deployment and the hosting under it. Below: what I build, what you hand over, what you get back, and the terms the work runs under.',
  availability:
    'Available for freelance and contract work alongside my current role, for agencies, startups, and first portfolios.',
}

export type Job = {
  id: string
  jobId: string
  /** Short label for the selector. */
  label: string
  /** Full service name — the h3 and the value that reaches the brief form. */
  name: string
  /** One line that has to make the offer intelligible on its own. */
  summary: string
  /** Marks the productized tier so the UI can label it without a special case. */
  fixedScope?: boolean
  /** What you hand over at the start. */
  inputs: string[]
  /** The run itself: what actually executes, in order. */
  stages: { name: string; detail: string }[]
  /** What exists when the run exits. */
  artifacts: string[]
  stack: string[]
  /** The definition of done — stated so it can be held against me. */
  exit: string
}

export const jobs: Job[] = [
  {
    id: 'fullstack',
    jobId: 'job.fullstack',
    label: 'full-stack',
    name: 'Full-stack development',
    summary:
      'One person carrying the whole vertical: database, API, interface, deployment and the infrastructure it sits on. Nothing falls into the gap between a frontend contractor and a backend one.',
    inputs: [
      'The problem, in your own words',
      'Existing code, schema or API if there is any',
      'Designs if you have them, though I work without them too',
      'Access to the accounts it has to run on',
    ],
    stages: [
      { name: 'model', detail: 'Data model and the flows the product actually has to support.' },
      { name: 'api', detail: 'Services, auth and integrations, built against the model.' },
      { name: 'interface', detail: 'The front end, wired to real endpoints rather than fixtures.' },
      { name: 'deploy', detail: 'Containerised, hosted, and put behind a domain you own.' },
      { name: 'handover', detail: 'Repository, runbook, and a walkthrough of how to operate it.' },
    ],
    artifacts: [
      'A running deployment on your own infrastructure',
      'The full repository, yours from the first commit',
      'Deployment and environment documentation',
    ],
    stack: ['Python', 'React', 'TypeScript', 'Node', 'MySQL', 'Supabase', 'Docker', 'AWS'],
    exit: 'The system is in production, you can deploy it without me, and the repository is in your account.',
  },
  {
    id: 'mobile',
    jobId: 'job.mobile',
    label: 'mobile',
    name: 'Mobile apps for iOS and Android',
    summary:
      'One React Native codebase producing both platforms, built the way I have shipped cross-platform features in production: native behaviour where it matters, one build pipeline, no separate iOS and Android teams to coordinate.',
    inputs: [
      'What the app has to do, and for whom',
      'Your backend, or a decision to have me build one',
      'Apple Developer and Google Play accounts',
      'Brand assets if they exist: icon, colours, type',
    ],
    stages: [
      { name: 'flows', detail: 'Screens and navigation mapped before any of it is built.' },
      { name: 'build', detail: 'One React Native codebase, both platforms, real device testing.' },
      { name: 'integrate', detail: 'Backend, auth, push, storage, and AI inference where the product calls for it.' },
      { name: 'release', detail: 'Signing, store metadata, and submission to App Store and Play.' },
      { name: 'handover', detail: 'Repository, release process, and the credentials back in your hands.' },
    ],
    artifacts: [
      'Signed iOS and Android builds from one codebase',
      'Store listings submitted under your own developer accounts',
      'The repository and a documented release process',
    ],
    stack: ['React Native', 'TypeScript', 'Expo', 'Supabase', 'REST APIs', 'iOS', 'Android'],
    exit: 'Both builds are submitted from accounts you control, and you can cut the next release yourself.',
  },
  {
    id: 'web',
    jobId: 'job.web',
    label: 'web app',
    name: 'Web applications: dashboards, internal tools and client portals',
    summary:
      'Dashboards, internal tools, client portals and AI-backed products. These are the applications a business runs on rather than the page it advertises with. Built to be operated daily, not launched once.',
    inputs: [
      'The workflow it has to replace or support',
      'Where the data lives today, however messy',
      'Who logs in, and what each of them may see',
      'Any compliance or hosting constraints you are under',
    ],
    stages: [
      { name: 'scope', detail: 'The real workflow, its states, and the edges that break it.' },
      { name: 'data', detail: 'Schema, pipelines, and the integrations that feed it.' },
      { name: 'build', detail: 'Interface and logic, against production-shaped data.' },
      { name: 'harden', detail: 'Auth, roles, error states, and the empty and failure cases.' },
      { name: 'ship', detail: 'Deployed, monitored, and handed over with its documentation.' },
    ],
    artifacts: [
      'A deployed application with real accounts and roles',
      'Data pipelines and integrations, documented',
      'The repository and its deployment configuration',
    ],
    stack: ['React', 'TypeScript', 'Python', 'LLM APIs', 'MySQL', 'Power BI', 'Docker'],
    exit: 'Your team is using it for the work it was built for, and the failure states are handled rather than hidden.',
  },
  {
    id: 'portfolio',
    jobId: 'job.portfolio',
    label: 'portfolio',
    name: 'Portfolio websites for early career',
    summary:
      'A fixed-scope portfolio for someone early in their career: a real site on your own domain, built to survive a recruiter opening it on a phone, and structured so you can keep adding to it long after I am gone.',
    fixedScope: true,
    inputs: [
      'Your CV, projects, and any links you already have',
      'A photo, if you want one on it',
      'The roles you are actually applying for',
      'A domain, or I will help you pick one',
    ],
    stages: [
      { name: 'sort', detail: 'What goes on it, what stays off, and the order a recruiter reads.' },
      { name: 'design', detail: 'A layout that is yours rather than a template everyone else used.' },
      { name: 'build', detail: 'Fast, responsive, accessible, and readable without JavaScript running.' },
      { name: 'ship', detail: 'Live on your domain with analytics and a working contact route.' },
      { name: 'teach', detail: 'A walkthrough so you can update it yourself from then on.' },
    ],
    artifacts: [
      'A live site on your own domain',
      'The repository in your GitHub account',
      'A recorded walkthrough of how to change and redeploy it',
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Static hosting', 'SEO', 'Analytics'],
    exit: 'The site is live under your name, you can edit and redeploy it unaided, and nothing on it is a placeholder.',
  },
]

export type Trigger = {
  id: string
  label: string
  who: string
  arrivesWith: string
  /** Job ids this trigger usually resolves to. */
  routesTo: string[]
  note: string
}

export const triggers = {
  heading: 'Who starts a run: agencies, startups, and first portfolios',
  lede: 'Three kinds of client trigger these pipelines, and each arrives with a different thing in hand. The run is the same; where it starts is not.',
  items: [
    {
      id: 'agency',
      label: 'agency',
      who: 'Agencies & studios',
      arrivesWith: 'A signed client project and not enough engineering capacity to deliver it',
      routesTo: ['fullstack', 'mobile', 'web'],
      note: 'I work inside your process and under your name. You keep the client relationship; I keep your delivery date. This is how I worked with teams in the Netherlands and Belgium.',
    },
    {
      id: 'startup',
      label: 'startup',
      who: 'Startups & founders',
      arrivesWith: 'A product that has to exist before the next raise, demo or pilot',
      routesTo: ['fullstack', 'mobile', 'web'],
      note: 'Zero to something real, then real to production. I build the smallest version that can actually be used, ship it, and keep it deployable as it grows.',
    },
    {
      id: 'early-career',
      label: 'early-career',
      who: 'Early in your career',
      arrivesWith: 'Work worth showing and no site that does it justice',
      routesTo: ['portfolio'],
      note: 'A fixed-scope engagement with a defined deliverable, not consulting sold at a discount. You end up owning the repository and knowing how to change it.',
    },
  ] as Trigger[],
}

/**
 * The engagement pipeline itself — shared by every job. This is the page's
 * spine: the stages a client actually passes through, printed as the run log a
 * client would see if the engagement were a job on a scheduler.
 */
export const pipeline = {
  heading: 'How a run executes, from brief to production',
  lede: 'Every engagement runs the same six stages, whichever job definition it is. You see the state of yours at every one of them.',
  stages: [
    {
      id: 'p1',
      name: 'brief',
      owner: 'you',
      detail: 'You send the brief below. I read it and reply with whether I am the right person for it, including when I am not.',
      output: 'A yes, a no, or the question that decides it',
    },
    {
      id: 'p2',
      name: 'scope',
      owner: 'both',
      detail: 'A call, then a written scope: what is being built, what is explicitly not, and how we will know it is done.',
      output: 'A written scope and a quote against it',
    },
    {
      id: 'p3',
      name: 'build',
      owner: 'me',
      detail: 'The work, in your repository from the first commit. You see it as it happens rather than at the end.',
      output: 'Commits you can read, on a branch you can pull',
    },
    {
      id: 'p4',
      name: 'review',
      owner: 'both',
      detail: 'A working deployment you can click through at each checkpoint, not a screenshot of one.',
      output: 'A live preview URL per checkpoint',
    },
    {
      id: 'p5',
      name: 'ship',
      owner: 'me',
      detail: 'Deployment, domain, hosting and the environment around it, set up on infrastructure you own.',
      output: 'The thing running in production',
    },
    {
      id: 'p6',
      name: 'handover',
      owner: 'me',
      detail: 'Documentation, credentials, and a walkthrough. You are not dependent on me being reachable.',
      output: 'Repository, runbook, and access transferred',
    },
  ],
}

export type EngagementModel = {
  id: string
  name: string
  shape: string
  bestFor: string
  scope: string
  ends: string
  notIncluded: string
}

export const engagement = {
  heading: 'Engagement models: fixed scope, sprint, or retainer',
  lede: 'Three ways to run the work. Rates are quoted against your written scope, not published as a range. A number without a scope behind it is a guess, and neither of us should plan against one.',
  models: [
    {
      id: 'project',
      name: 'Fixed-scope project',
      shape: 'one run, defined exit',
      bestFor: 'A thing that has a clear edge to it and a date it has to exist by.',
      scope: 'Written up front and priced against. Changes are re-scoped and re-quoted rather than absorbed silently.',
      ends: 'At the exit criteria for that job definition. Handover included, not billed separately.',
      notIncluded: 'Ongoing feature work after handover. That is a new run, or a retainer.',
    },
    {
      id: 'sprint',
      name: 'Time-boxed sprint',
      shape: 'fixed duration, renewable',
      bestFor: 'Work where the destination is real but the route is not settled yet, or an agency covering a gap.',
      scope: 'Set at the start of each sprint and reviewed at the end. You decide whether the next one runs.',
      ends: 'When you stop renewing. Everything built is deployed and handed over as it goes, not held back.',
      notIncluded: 'A guaranteed feature list. The box is the time, and the priorities are yours to set.',
    },
    {
      id: 'retainer',
      name: 'Ongoing retainer',
      shape: 'reserved capacity, monthly',
      bestFor: 'Agencies with a steady pipeline, or a live product that needs someone who already knows it.',
      scope: 'A reserved amount of capacity each month, applied to whatever is highest priority at the time.',
      ends: 'On notice, either direction. Documentation stays current throughout so leaving is never a cliff.',
      notIncluded: 'Unbounded scope. Reserved capacity is a ceiling, and I will tell you when we are at it.',
    },
  ] as EngagementModel[],
}

/**
 * Proof, drawn only from work already asserted elsewhere on this site. Nothing
 * here is new evidence; the images and facts are the ones src/data/site.ts
 * already carries for the same two client systems.
 */
export const proof = {
  heading: 'Runs that already exited: client work delivered end to end',
  lede: 'Client systems taken from first commit to production, and a selection of publicly clickable builds. Every claim on this page has something to click behind it.',
}

/**
 * These are ordered search-value first and conversion last, and every answer is
 * written to stand on its own if it is lifted out of the page — which is how an
 * answer engine will use it.
 *
 * No FAQPage structured data is emitted for this block. Google deprecated
 * FAQPage rich results on 2026-05-07 and removed the documentation on
 * 2026-06-15, so the markup earns nothing, and a second copy of these strings in
 * JSON-LD would silently drift out of sync with the visible text — which is the
 * one structured-data failure that actually carries a manual-action risk. The
 * visible heading-and-answer markup is already parseable.
 */
export const faq = {
  heading: 'Questions before you send a brief',
  items: [
    {
      q: 'How do you price a project?',
      a: 'Against a written scope, not against a guess. The brief comes in, we talk, and you get a scope document with a fixed number on it before you commit anything. I do not publish ranges because the same sentence, "we need a mobile app", has covered work an order of magnitude apart, and a bracket set before the scope exists is a number neither of us should plan against.',
    },
    {
      q: 'How long does a build take?',
      a: 'The timeline is written into the same scope document as the price, so you have a date before you commit money rather than after. If it starts to slip you hear about it when I know, not at the deadline. What I will not do is quote you a duration off a paragraph. That number would be invented, and you would be the one it costs.',
    },
    {
      q: 'Do you build for both iOS and Android?',
      a: 'Yes, from one React Native codebase. That is how I have shipped cross-platform features in production, including AI-backed capture flows built on Supabase and custom edge functions. Both builds come out of the same repository, and both are submitted under Apple and Google developer accounts that you own.',
    },
    {
      q: "Do you work white-label under your agency's brand?",
      a: 'Yes. For agency work I deliver under your brand and stay behind it: your client relationship, your name on the work, your repository and your deployment targets. I can join your existing standups and tracker, or work asynchronously against a written scope, whichever matches how your team already runs.',
    },
    {
      q: 'Can you work with our existing team and codebase?',
      a: 'Yes, and it is most of how I operate, working inside your process, your repository and your review standards. I have worked as the engineer embedded in a team in the Netherlands and Belgium, including as the person who brought AI-assisted workflows into how that team delivered. Joining an existing codebase is the normal case, not the exception.',
    },
    {
      q: 'Who owns the code and the IP?',
      a: 'You do, from the first commit. The work happens in your repository, or moves into it at handover along with the deployment configuration and the credentials. You are never left in a position where the thing you paid for only exists in my account, and there is no license you have to keep renewing to run it.',
    },
    {
      q: 'Do you build portfolio websites for people early in their career?',
      a: 'Yes, as a fixed-scope offer with a defined deliverable rather than consulting sold at a discount. It is a single agreed build: your work, your writing and your history as a real site rather than a template, deployed to your own domain, with the repository in your GitHub account and a walkthrough so you can maintain it yourself afterwards.',
    },
    {
      q: 'Do you use AI tools to build it, and is the code maintainable?',
      a: 'Yes to the first, deliberately. Claude Code, Cursor and Copilot are part of how the work gets done at the speed it does. That changes nothing about the second. I read, test and deploy everything that ships, and I am accountable for it exactly as if it had been typed by hand. You get a repository another developer can pick up, not generated code nobody understands.',
    },
    {
      q: 'Where are you based, and which time zones do you work with?',
      a: 'I work remotely and have delivered for clients across the United Kingdom, the Netherlands and Belgium, currently as Data & AI Engineer at Data Panda in the Flemish Region. European hours are the overlap I am set up around. If you are somewhere else, put your hours in the brief and I will tell you honestly whether the overlap works.',
    },
    {
      q: 'What if I do not know what I need yet?',
      a: 'Send the brief anyway and describe the problem instead of the solution. Working out whether the thing you asked for is the thing that solves it is part of the scope stage, not something you have to arrive having finished. That includes the case where the honest answer is that you do not need me.',
    },
  ],
}

export const brief = {
  heading: 'Send a brief',
  lede: 'The more of this you fill in, the more useful my reply is. Everything except name, email and the message itself is optional.',
  /** Values are what actually arrives in the Formspree submission. */
  timelines: [
    'As soon as possible',
    'Within the next month',
    'One to three months out',
    'Exploring, no date yet',
  ],
}
