# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript + Tailwind CSS + Motion (Framer Motion). Chosen by the user from an offered set. Hard constraint: must build to static files publishable on GitHub Pages under a project subpath (`/Portfolio/`), replacing an existing Create React App build at https://yasir-khan-7.github.io/Portfolio/.

Shipped to `github.com/Yasir-Khan-7/Portfolio` on `main`. The previous Create React App design is preserved on the `old-design` branch at commit 06fc568.

## Users

Two audiences, both first-time visitors arriving from a link (LinkedIn, GitHub, an email signature, a job application), both scanning on a time budget:

1. **Hiring managers and technical recruiters** evaluating Muhammad Yasir Khan for an AI / Python / data engineering role. They need role fit, stack, and employment history legible within seconds.
2. **Prospective freelance and contract clients** evaluating whether he can build a specific thing. They need shipped, working, clickable proof.

The user's stated goal: serve both without splitting into two sites — one surface that reads as unique and credible to each.

## Product Purpose

A personal portfolio that converts a link click into an inbound message. Success is a submitted contact form or a direct email/LinkedIn approach from either audience.

## Positioning

An AI engineer who ships end-to-end with AI-assisted development as the actual method, not the subject. The differentiator a neighboring portfolio could not truthfully copy: twelve deployed, publicly clickable projects — most with live URLs — spanning agentic AI systems, AI-assisted design-to-code, developer tooling (a published MCP server), and industrial data engineering, plus a documented career progression from Python Developer to Data Engineer to Full Stack Prompt Engineer.

Self-described in the incumbent site as "AI Engineer | Prompt Engineer | Vibe Coder".

## Operating Context

Visitors arrive on desktop and mobile, cold, usually with the site open in one of several tabs. The site is a single scrolling page plus one secondary route (`/projects`) holding the full project index with category filters. Navigation is anchor-based: about, skills, projects, contact.

Every project links out to a live deployment (Streamlit, Vercel, Lovable, GitHub Pages, Power BI) and, where public, a GitHub repository. Leaving the site to inspect a project is a success path, not a leak.

## Capabilities and Constraints

- Fully static. No backend, no database, no auth.
- Contact form posts to Formspree endpoint `https://formspree.io/f/mwplnrda` (existing, working, must be preserved).
- Routing must survive GitHub Pages' lack of SPA rewrites. The incumbent uses `HashRouter` plus the spa-github-pages 404.html redirect shim; the rebuild must solve this too.
- All copy, project data, experience bullets, tool descriptions, and links are ported verbatim. The user explicitly chose no rewriting.
- Asset base path must respect the `/Portfolio/` subpath.
- No resume/CV PDF exists in the repo. The incumbent "View My Work" button is an anchor to `#projects`, not a resume download. Do not invent a resume link.

## Brand Commitments

- Name: Muhammad Yasir Khan (short form "Yasir Khan" in the footer copyright).
- Page title: "Muhammad Yasir Khan | Portfolio".
- Contact email: yasirkhandps7@gmail.com
- GitHub: https://github.com/Yasir-Khan-7
- LinkedIn: https://www.linkedin.com/in/yasir-khan7134/ — confirmed by Yasir as the live profile. The incumbent site was inconsistent (footer and mobile menu used `/in/yasirkhan71/`); this is the one to use everywhere.
- Voice: first person, plain, practical. "I turn complex problems into clear, actionable insights."
- No prior visual identity is binding — the incumbent look is being replaced.

## Evidence on Hand

Located at `~/Documents/github/Portfolio/public/images/`:

- **Projects** — screenshot sets for 12 projects (3–9 images each): iesa, gotogenie, agentic-mosaic, shop-ai, travelsense-ai, positivus-ai-agency, eatsmart-ai, mcp-learning-assistant, synthgen-ai, ai-fintrack, ai_schemagen, madhav_ecommerce_sales_dashboard. These are real screenshots of real deployments.
- **Testimonials** — `testimonial/review_1..3.png`. Screenshots of real recommendations. Their text content is inside the images only; it is not available as text and must not be transcribed or paraphrased into fabricated quotes.
- **Experience logos** — sideline_technologies.png, dataventiv_logo.png, sysbi_technology_logo.png.
- **AI tool logos** — ChatGPT, Claude Code, Cursor, GitHub Copilot / VS Code, Lovable, Figma / Figma Make.
- **Profile photo** — `profile/profile_pic.jpeg`.
- **Fonts on disk** — Inter-Bold.woff, JetBrainsMono-Regular.woff, JetBrainsMono-Bold.woff (incumbent loaded Poppins from Google Fonts).

Absent, and not to be fabricated: resume PDF, client names, metrics, revenue figures, user counts, awards, certifications, education history, location.

## Product Principles

1. **Working software is the argument.** Twelve live links beat any adjective. Every project claim must be one click from its running deployment.
2. **One surface, two readings.** A hiring manager's path (experience, stack, progression) and a client's path (shipped work, testimonials, contact) both have to be findable in the first scroll without the page forking into two sites.
3. **Ported content is fixed content.** Every fact, bullet, description, and URL carries over exactly. Design carries the modernization; copy does not.
4. **Leaving is winning.** Outbound clicks to live demos and repos are the intended behavior, not leakage.
5. **Static and cheap forever.** Anything that needs a server, a key, or a paid tier is out of scope.

## Accessibility & Inclusion

No product-specific standard was established by the user. Baseline obligations apply: keyboard-operable navigation and modals, visible focus, honored `prefers-reduced-motion` (the incumbent has continuous infinite animations with no reduced-motion escape), and text contrast that holds at the incumbent's failing points (`#666` secondary text on white, `#888` tertiary).
