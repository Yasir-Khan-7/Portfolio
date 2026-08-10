/**
 * Copy source of record.
 *
 * Most strings here are carried over verbatim from the incumbent portfolio at
 * github.com/Yasir-Khan-7/Portfolio — design changed, copy did not. Three blocks
 * are newer and came directly from Yasir, transcribed as supplied:
 *   - `identity.roles`      updated titles
 *   - `experience`          Data Panda, Top of Mind, and the rewritten Sideline entry
 *   - `delivered`           the two client systems
 * Nothing in this file is inferred. No dates, metrics, or claims were invented.
 */

export const BASE = import.meta.env.BASE_URL

export const identity = {
  name: 'Muhammad Yasir Khan',
  shortName: 'Yasir Khan',
  greeting: "Hello, I'm",
  roles: ['AI Engineer | Forward Deployed Engineer', 'AI Software Engineer'],
  intro:
    'I turn complex problems into clear, actionable insights and build intelligent apps that make a real impact. I focus on seamless automation, a smooth developer experience, and practical delivery—reliable systems, flowing pipelines, and code that works.',
  photo: `${BASE}images/profile/profile_pic.webp`,
}

/** The roles as individual nodes — the pipe is a separator, not part of a title. */
export const roleList = identity.roles.flatMap((r) => r.split('|').map((p) => p.trim()))

export const links = {
  email: 'https://mail.google.com/mail/?view=cm&fs=1&to=yasirkhandps7@gmail.com',
  emailAddress: 'yasirkhandps7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yasir-khan7134/',
  github: 'https://github.com/Yasir-Khan-7',
  formspree: 'https://formspree.io/f/mwplnrda',
}

/** The page's own DAG. Order here is the order of the run. */
export const nodes = [
  { id: 'about', taskId: 't1.about', label: 'about' },
  { id: 'skills', taskId: 't2.skills', label: 'skills' },
  { id: 'experience', taskId: 't3.experience', label: 'experience' },
  { id: 'delivered', taskId: 't4.delivered', label: 'delivered' },
  { id: 'projects', taskId: 't5.projects', label: 'projects' },
  { id: 'testimonials', taskId: 't6.testimonials', label: 'testimonials' },
  { id: 'contact', taskId: 't7.contact', label: 'contact' },
] as const

/**
 * Client work shipped end to end. Every fact here came directly from Yasir —
 * no dates, metrics, contract values or client names beyond what he supplied.
 */
export const delivered = {
  heading: 'Recently Delivered',
  intro:
    'Client systems taken from first commit to production, including the infrastructure they run on.',
  items: [
    {
      id: 'orbit',
      client: 'Orbit Digital',
      scope: 'Full website · development to AWS hosting',
      region: 'United Kingdom',
      description:
        'A complete website for a UK client, built and shipped end to end. I handled the build through to AWS hosting, so the same hands that wrote it also put it into production.',
      images: [
        `${BASE}images/delivered/orbitdigital_1.webp`,
        `${BASE}images/delivered/orbitdigital_2.webp`,
        `${BASE}images/delivered/orbitdigital_3.webp`,
      ],
      link: 'https://orbitdigital.uk/',
      linkLabel: 'orbitdigital.uk',
    },
    {
      id: 'paksadat',
      client: 'Pak Sadat Travel & Tours',
      scope: 'Hajj & Umrah voucher system · developed and deployed end to end',
      region: 'Hajj & Umrah services',
      description:
        'A Hajj and Umrah services system, developed and deployed end to end. It helps pilgrims present their correct details at onboarding and offboarding, so the right information travels with the right person.',
      images: [`${BASE}images/delivered/paksadat_1.webp`],
      link: 'https://voucher.paksadat.com/login',
      linkLabel: 'voucher.paksadat.com',
    },
  ],
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    'A passionate Software Engineer with a focus on creating exceptional digital experiences and innovative solutions. I enjoy building elegant, data-driven applications and intelligent systems using modern technologies.',
    'My journey in software development started with a curiosity about how technology can solve real-world problems. This curiosity evolved into a passion for creating impactful solutions across various domains including <strong>industrial automation</strong>, <strong>data analysis</strong>, and <strong>artificial intelligence</strong>.',
    'My current focus is on developing AI-powered applications, creating intuitive data visualizations, and building data-driven systems. I am actively seeking opportunities in the fields of <strong>artificial intelligence</strong>, <strong>Python development</strong>, and <strong>data analytics</strong> where I can leverage my technical skills to create innovative solutions that drive meaningful impact.',
  ],
  competenciesHeading: 'My core competencies include:',
  competencies: [
    'AI-Driven Software Development',
    'Natural Language Processing',
    'Business Intelligence & Analytics',
    'Database Management',
    'Industrial Automation',
    'Data Pipeline Engineering',
    'Frontend Web Solutions',
    'Data Visualization',
  ],
}

export const aiTools = {
  heading: 'AI Tools Proficiency',
  intro:
    'I leverage cutting-edge AI tools to enhance productivity and deliver exceptional results. My expertise with these technologies enables me to develop solutions efficiently and stay at the forefront of AI-powered development.',
  items: [
    {
      name: 'GitHub Copilot & VS Code',
      logo: `${BASE}images/ai_tools/vscode_copilot_logo.webp`,
      description:
        'Expert at utilizing Copilot for code generation, completion, and optimization with VS Code AI extensions for intelligent workflows.',
    },
    {
      name: 'ChatGPT',
      logo: `${BASE}images/ai_tools/chat_gpt_logo.png`,
      description:
        'Proficient in using ChatGPT for problem-solving, code debugging, and generating innovative solutions.',
    },
    {
      name: 'Claude Code (CLI)',
      logo: `${BASE}images/ai_tools/claude_code.png`,
      description:
        'Use Claude Code in terminal workflows for rapid prototyping, refactoring, and AI-assisted coding directly from the CLI.',
    },
    {
      name: 'Cursor',
      logo: `${BASE}images/ai_tools/cursor_id_logo.png`,
      description:
        "Skilled with Cursor's AI-powered editing capabilities to enhance code quality and development efficiency.",
    },
    {
      name: 'Lovable',
      logo: `${BASE}images/ai_tools/lovable_logo.png`,
      description:
        'Proficient with Lovable for rapid AI-powered full-stack app development with beautiful, production-ready interfaces.',
    },
    {
      name: 'Figma Make',
      logo: `${BASE}images/ai_tools/figma_make_logo.webp`,
      description:
        'Skilled with Figma Make for AI-powered design-to-code generation, transforming Figma designs into production-ready code.',
    },
  ],
}

export const skillGroups = [
  {
    title: 'AI & Data Technologies',
    skills: [
      { name: 'Python', level: 90, active: true },
      { name: 'LLM & Generative AI', level: 85, active: true },
      { name: 'Data Analysis', level: 80, active: true },
      { name: 'ETL Pipeline Development', level: 75, active: true },
      { name: 'PowerBI', level: 75, active: false },
    ],
  },
  {
    title: 'Development & Automation',
    skills: [
      { name: 'HTML, CSS & JavaScript', level: 85, active: true },
      { name: 'MySQL', level: 80, active: true },
      { name: 'Industrial Automation', level: 85, active: true },
      { name: 'Docker', level: 75, active: false },
      { name: 'Server Deployment', level: 70, active: false },
    ],
  },
]

export type ExperienceBlock = {
  subheading?: string
  items: string[]
}

export const experience = [
  {
    company: 'Data Panda',
    role: 'Data & AI Engineer',
    employment: 'Full-time',
    location: 'Flemish Region, Belgium · Remote',
    duration: 'May 2026 - Present',
    /** Decimal years, used to lay out the duration bars. */
    start: 2026.33,
    end: null,
    current: true,
    logo: `${BASE}images/experience/data_panda_logo.webp`,
    responsibilitiesTitle: null,
    blocks: [] as ExperienceBlock[],
    closing: null,
    website: null,
  },
  {
    company: 'Top of Mind',
    role: 'AI Software Engineer (Freelance)',
    employment: 'Freelance',
    location: 'Belgium',
    duration: 'April 2026 - May 2026',
    start: 2026.25,
    end: 2026.42,
    current: false,
    logo: `${BASE}images/experience/top_of_mind_logo.webp`,
    responsibilitiesTitle: 'Key Contributions:',
    blocks: [
      {
        items: [
          'Built AI-driven agent workflows using OpenAI Codex that automatically extract contacts, tasks, and relationship context from voice, text, and photo inputs.',
          'Designed and tuned prompt logic for custom edge functions and Supabase-backed extraction pipelines, turning raw capture inputs into structured actionables with minimal user friction.',
          'Developed cross-platform mobile (iOS and Android) features using React Native and Codex, integrating AI inference into mobile and backend flows to deliver a seamless agentic capture experience with reduced manual data entry.',
        ],
      },
    ] as ExperienceBlock[],
    closing: null,
    website: null,
  },
  {
    company: 'Sideline Technologies',
    role: 'AI-Native Full-Stack Engineer',
    employment: null,
    location: 'Netherlands',
    duration: 'April 2025 - May 2026',
    start: 2025.25,
    end: 2026.42,
    current: false,
    logo: `${BASE}images/experience/sideline_technologies.png`,
    responsibilitiesTitle: 'Key Contributions (Mobile & Web):',
    blocks: [
      {
        items: [
          'Empowering 5+ cross-functional team members in AI prompt engineering best practices, driving measurable productivity gains through custom AI-driven workflow automation tools built with Cursor and Claude Code.',
          'Engineering cross-platform mobile (iOS and Android) and web applications using AI tools including Cursor, Trae AI, and Claude Code, accelerating delivery timelines by approximately 40%.',
          'Streamlining engineering workflows by integrating AI-driven automation into the development lifecycle, reducing repetitive manual tasks by an estimated 30% and improving team throughput.',
        ],
      },
    ] as ExperienceBlock[],
    closing: null,
    website: 'https://sidelineagency.nl/',
  },
  {
    company: 'Dataventiv',
    role: 'Python Developer → Data Engineer',
    employment: null,
    location: null,
    duration: 'June 21, 2024 - January 2025',
    start: 2024.47,
    end: 2025.0,
    current: false,
    logo: `${BASE}images/experience/dataventiv_logo.png`,
    responsibilitiesTitle: 'Career Progression:',
    blocks: [
      {
        subheading: 'Started as Python Developer Intern (June - September 2024)',
        items: [
          'Developed Python-based data simulator for Modbus TCP/IP communication with industrial devices',
          'Designed and implemented SCADA screens for industrial automation projects',
          'Built human-machine interfaces using Ignition Inductive Automation platform',
          'Implemented class-based programming with proper documentation',
        ],
      },
      {
        subheading: 'Promoted to Data Engineer (October 2024 - January 2025)',
        items: [
          'Developed GUI applications for Kepware and Canary configuration generators',
          'Built data pipelines using Apache Spark, Kafka, and Airflow',
          'Containerized applications using Docker for deployment and scalability',
          'Designed Kubernetes-based deployment architecture',
          'Worked with Linux-based systems on Raspberry Pi 4 for engineering applications',
        ],
      },
    ] as ExperienceBlock[],
    closing:
      'Built comprehensive data collection and monitoring systems for industrial clients, progressing from simulation development to full data engineering pipeline implementation.',
    website: null,
  },
  {
    company: 'Sysbi Solutions Pvt Ltd',
    role: 'Frontend Developer Internee',
    employment: null,
    location: null,
    duration: 'July 10, 2023 - August 10, 2023',
    start: 2023.52,
    end: 2023.61,
    current: false,
    logo: `${BASE}images/experience/sysbi_technology_logo.png`,
    responsibilitiesTitle: 'Key Roles & Responsibilities:',
    blocks: [
      {
        items: [
          'Writing efficient codes',
          'Creating applications using HTML, CSS and JavaScript',
          'Server side validation using PHP',
          'Interactive behavior using jQuery',
          'Maintaining software documentation',
          'Maintaining a good behavior and coordination within a team',
          'Building responsive UI components with React JS',
        ],
      },
    ] as ExperienceBlock[],
    closing:
      'Showed initiative necessary for long-term success within the organization, demonstrated excellent skills while remaining focused on overall duties and project requirements.',
    website: 'https://sysbitechies.uk',
  },
]

export const testimonials = {
  heading: 'Testimonials',
  subheading: "Here's what people are saying about my work and collaboration",
  items: [
    { id: 1, image: `${BASE}images/testimonial/review_1.webp`, alt: 'Client testimonial 1' },
    { id: 2, image: `${BASE}images/testimonial/review_2.webp`, alt: 'Client testimonial 2' },
    { id: 3, image: `${BASE}images/testimonial/review_3.webp`, alt: 'Client testimonial 3' },
  ],
}

export const contact = {
  heading: 'Get In Touch',
  subheading: "Let's build something amazing together",
  text: "I'm currently available for freelance work and open to new opportunities. Whether you have a project in mind or just want to say hello, I'd love to hear from you!",
}
