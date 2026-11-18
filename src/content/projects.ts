/**
 * Client launches (the themed project cards) and personal projects.
 *
 * Personal projects are carried over from the old repo's src/data/projects.ts:
 * titles, short descriptions, categories and every URL unchanged.
 * SkillGuard and Charaghan are left out until their copy is supplied.
 */

export type Client = {
  id: 'otenga' | 'madikha' | 'bebenoura' | 'orbit' | 'paksadat'
  n: string
  name: string
  where: string
  headline: [string, string, string] // before, accent, after
  description: string
  tags: string[]
  url: string
  cta: string
  palette: { hex: string; name: string }[]
}

export const clients: Client[] = [
  {
    id: 'otenga',
    n: '01',
    name: 'Otenga',
    where: 'Kenya',
    headline: ['Parcels across Kenya, tracked from ', 'drop-off to door', '.'],
    description:
      'A parcel delivery platform for Kenya. iOS and Android app, web portal and AWS backend, built and deployed end to end.',
    tags: ['React Native', 'Next.js', 'AWS'],
    url: 'https://otenga.io',
    cta: 'Visit otenga.io',
    palette: [
      { hex: '#B84C0A', name: 'Deep orange' },
      { hex: '#E86A17', name: 'Orange' },
      { hex: '#1F2328', name: 'Ink' },
      { hex: '#F4F5F7', name: 'Mist' },
      { hex: '#FDF0E6', name: 'Tint' },
    ],
  },
  {
    id: 'madikha',
    n: '02',
    name: 'Dr. Madikha Khan',
    where: 'Rawalpindi',
    headline: ['A calm online home for a ', 'psychology practice', '.'],
    description:
      'The website for a consultant clinical psychologist: her services, her approach and a simple way to request a consultation.',
    tags: ['Website', 'Consultation requests', 'WhatsApp chat'],
    url: 'https://dr-madikha-khan-website.vercel.app/',
    cta: 'Visit the website',
    palette: [
      { hex: '#3B2B4E', name: 'Plum' },
      { hex: '#6E5A9E', name: 'Violet' },
      { hex: '#F8C9DD', name: 'Pink' },
      { hex: '#EDE7F8', name: 'Lavender' },
      { hex: '#FDF6F9', name: 'Blush' },
    ],
  },
  {
    id: 'bebenoura',
    n: '03',
    name: 'Bebé Noura',
    where: 'Pakistan',
    headline: ['A luxury gift store, designed, built and ', 'ranked', '.'],
    description:
      'The full storefront for a newborn gift brand in Pakistan. Brand look, build and search ranking, taken end to end.',
    tags: ['Design', 'Development', 'SEO'],
    url: 'https://www.bebenoura.com/',
    cta: 'Visit bebenoura.com',
    palette: [
      { hex: '#112D27', name: 'Forest' },
      { hex: '#DDC49A', name: 'Champagne' },
      { hex: '#F6F0E5', name: 'Ivory' },
      { hex: '#8E9B7A', name: 'Sage' },
      { hex: '#342725', name: 'Cocoa' },
    ],
  },
  {
    id: 'orbit',
    n: '04',
    name: 'Orbit Digital',
    where: 'United Kingdom',
    headline: ['An agency site, built and put into ', 'production', '.'],
    description:
      'A complete website for a UK client, shipped end to end. The same hands that wrote it took it through to AWS hosting.',
    tags: ['Development', 'AWS hosting'],
    url: 'https://orbitdigital.uk/',
    cta: 'Visit orbitdigital.uk',
    palette: [
      { hex: '#0F1112', name: 'Space' },
      { hex: '#1D2124', name: 'Graphite' },
      { hex: '#E9EAE4', name: 'Off-white' },
      { hex: '#A8AEEC', name: 'Periwinkle' },
      { hex: '#7C8184', name: 'Grey' },
    ],
  },
  {
    id: 'paksadat',
    n: '05',
    name: 'Pak Sadat',
    where: 'CRM',
    headline: ['A voucher CRM for Hajj and Umrah, from draft to ', 'approved', '.'],
    description:
      "A voucher and package system for a Hajj and Umrah operator. Each pilgrim's hotel, flight and visa details sit on one approved voucher, so the right information travels with the right person.",
    tags: ['Web app', 'CRM', 'PDF vouchers', 'Deployment'],
    url: 'https://voucher.paksadat.com/login',
    cta: 'Visit voucher.paksadat.com',
    palette: [
      { hex: '#1F4B8E', name: 'Navy' },
      { hex: '#0E1E3A', name: 'Midnight' },
      { hex: '#F4F6FA', name: 'Paper' },
      { hex: '#8FE0B2', name: 'Approved green' },
      { hex: '#F2C879', name: 'Draft amber' },
    ],
  },
]

export type Category = 'ai-apps' | 'ai-design' | 'tools' | 'data' | 'web'

export const categoryLabels: Record<Category, string> = {
  'ai-apps': 'AI apps',
  'ai-design': 'AI design',
  tools: 'Tools',
  data: 'Data',
  web: 'Web',
}

const range = (n: number, f: (i: number) => string) => Array.from({ length: n }, (_, i) => f(i + 1))

export type PersonalProject = {
  id: string
  title: string
  description: string
  /** Full write-up shown in the project details modal. */
  fullDescription: string
  category: Category
  /** Small cover for the grid card (public/images/covers). */
  image: string
  /** Every screenshot, shown in the modal gallery (public/images/projects). */
  gallery: string[]
  live: string | null
  github: string | null
  stack: string[]
  technologies: string[]
  year?: number
}

/** Carried over verbatim from the old site's src/data/projects.ts. */
export const personalProjects: PersonalProject[] = [
  {
    id: 'iesa',
    title: 'IESA – Intelligent Energy Scenario Analysis',
    description: 'Advanced energy planning tool for data-driven decision-making with AI-powered insights',
    fullDescription:
      'IESA is an advanced energy planning tool designed to support data-driven decision-making for energy planners and input entry operators. By leveraging AI, machine learning, and advanced data processing techniques, IESA empowers users to analyze energy trends, generate predictive insights, and streamline planning workflows. Key features include personalized AI-driven recommendations, prediction engine using advanced regression models, dynamic scenario analysis, simplified data planning & input, and automated PDF reporting.',
    category: 'ai-apps',
    image: 'iesa',
    gallery: range(7, (n) => `/images/projects/iesa/iesa_${n}.webp`),
    live: 'https://iesa-entry.streamlit.app',
    github: 'https://github.com/Yasir-Khan-7/Intelligent-Energy-Scenerio-Analaysis',
    stack: ['Python', 'Machine Learning', 'Streamlit', 'LLM'],
    technologies: ['Python', 'Machine Learning', 'Streamlit', 'MySQL', 'LLM', 'Smol-agents'],
  },
  {
    id: 'gotogenie',
    title: 'GoToGenie',
    description:
      'AI-powered location discovery platform with 5 specialized agents for intelligent place recommendations',
    fullDescription:
      'GoToGenie is an AI-powered platform that helps people find the best places around them using advanced AI and agentic workflows. The system features 5 specialized agents: Intent Agent for understanding user queries, Location Agent for geo-based search, Photos Agent for visual discovery, Curated Output Agent for personalized recommendations, and Knowledge Agent for intelligent insights about nearby locations. Built with Claude and Lovable, it delivers a seamless experience for discovering local gems.',
    category: 'ai-apps',
    image: 'gotogenie',
    gallery: range(8, (n) => `/images/projects/gotogenie/gotogenie_img${n}.webp`),
    live: 'https://gotogenie.lovable.app/',
    github: null,
    stack: ['Claude', 'Lovable', 'AI Agents', 'React'],
    technologies: ['Claude', 'Lovable', 'AI Agents', 'TypeScript', 'React'],
    year: 2026,
  },
  {
    id: 'agentic-mosaic',
    title: 'Agentic Mosaic',
    description: 'Multi-agent data science platform with 5 specialized AI agents for automated ML workflows',
    fullDescription:
      "Agentic Mosaic is an intelligent data science platform built with agentic workflows that empowers data scientists, AI engineers, and data analysts to streamline their ML pipeline. The system features 5 specialized agents working in sequence: Data Structure Agent (Schema Map) for understanding data architecture, EDA Agent (EDA Canvas) for exploratory data analysis, Preprocessing Agent (Pipeline View) for data cleaning and transformation, Feature Engineering Agent (Feature Tree) for creating meaningful features, and Model Selection Agent (Model Arena) for automated model comparison and selection. Users can track each agent's progress in real-time through SSE events, making the entire workflow transparent and interactive.",
    category: 'ai-apps',
    image: 'agentic-mosaic',
    gallery: range(7, (n) => `/images/projects/agentic-mosaic/agentic_mosaic_img${n}.webp`),
    live: 'https://agentic-mosaic.lovable.app/',
    github: null,
    stack: ['Claude', 'AI Agents', 'SSE Events', 'React'],
    technologies: ['Claude', 'Lovable', 'AI Agents', 'SSE Events', 'TypeScript', 'React'],
    year: 2026,
  },
  {
    id: 'nextshop',
    title: 'NextShop-AI',
    description: 'AI-assisted e-commerce application built with Next.js and Figma MCP Server',
    fullDescription:
      'An AI-assisted e-commerce application built with Next.js, using the Figma MCP Server to extract structured design data and Cursor to generate, refine, and iteratively improve frontend components. The project demonstrates a modern AI-driven workflow that accelerates UI development.',
    category: 'ai-design',
    image: 'nextshop',
    gallery: [
      '/images/projects/shop-ai/shop_ai_image1.webp',
      '/images/projects/shop-ai/shop_ai_image2.webp',
      '/images/projects/shop-ai/shope_ai_image3.webp',
      '/images/projects/shop-ai/shop_ai_image4.webp',
      '/images/projects/shop-ai/shop_ai_image5.webp',
    ],
    live: 'https://next-shop-ai.vercel.app/',
    github: 'https://github.com/Yasir-Khan-7/NextShop-AI',
    stack: ['Next.js', 'Figma MCP', 'Cursor'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma MCP', 'AI', 'Cursor'],
    year: 2026,
  },
  {
    id: 'travelsense',
    title: 'TravelSense-AI',
    description: 'AI-powered tourism design platform that transforms travel application planning',
    fullDescription:
      'TravelSense AI is an AI-powered tourism design platform that transforms how travel applications are planned and built. It combines intelligent prompt strategies, Cursor AI, and the Figma MCP server to create user-centered, production-ready AI designs. Instead of manually crafting UI flows and travel logic.',
    category: 'ai-design',
    image: 'travelsense',
    gallery: range(6, (n) => `/images/projects/travelsense-ai/travelsense_ai_image${n}.webp`),
    live: 'https://travel-sense-ai.vercel.app/',
    github: 'https://github.com/Yasir-Khan-7/TravelSense-AI',
    stack: ['Next.js', 'Figma MCP', 'Cursor'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma MCP', 'AI', 'Cursor'],
    year: 2026,
  },
  {
    id: 'positivus',
    title: 'Positivus AI Agency',
    description: 'Modern AI-powered digital marketing agency built with Figma design extraction',
    fullDescription:
      'A modern AI-powered digital agency built using Cursor, MCP Server, and Figma design extraction, leveraging prompt engineering to transform designs into production-ready web experiences. The project showcases advanced AI-driven development workflow, combining intelligent design-to-code transformation with modern web technologies to create a fully responsive and interactive digital marketing agency website.',
    category: 'ai-design',
    image: 'positivus',
    gallery: range(7, (n) => `/images/projects/positivus-ai-agency/positivusai_image${n}.webp`),
    live: 'https://positivus-ai-agency.vercel.app/',
    github: 'https://github.com/Yasir-Khan-7/Positivus-AI-Agency',
    stack: ['Next.js', 'Figma MCP', 'Prompt Engineering'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma MCP', 'AI', 'Cursor', 'Prompt Engineering'],
    year: 2026,
  },
  {
    id: 'eatsmart',
    title: 'EatSmart AI',
    description: 'AI-powered meal planning platform with intelligent design-to-code workflow',
    fullDescription:
      'EatSmart AI is a modern, AI-powered food experience focused on helping users make smarter eating decisions through intelligent design. It is built using Cursor for AI-assisted development and the Figma MCP server to ensure seamless design-to-code consistency. The platform demonstrates advanced AI-driven workflow, transforming Figma designs into production-ready web experiences with personalized meal planning, nutritional guidance, and smart grocery integration.',
    category: 'ai-design',
    image: 'eatsmart',
    gallery: range(9, (n) => `/images/projects/eatsmart-ai/eatsmart_ai_image${n}.webp`),
    live: 'https://eatsmart-ai.vercel.app/',
    github: 'https://github.com/Yasir-Khan-7/EatSmart-AI',
    stack: ['Next.js', 'Figma MCP', 'Design-to-Code'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma MCP', 'AI', 'Cursor', 'Design-to-Code'],
    year: 2026,
  },
  {
    id: 'mcp',
    title: 'MCP Learning Assistant',
    description:
      'Educational MCP server helping developers learn and understand code through AI-powered tools',
    fullDescription:
      "An MCP server that helps developers understand what they're building by explaining concepts, reviewing approaches, and guiding them toward better solutions. Features 8 powerful learning tools including explainConcept, reviewCode, suggestBestPractice, compareApproaches, generateLearningPath, debugHelper, explainThisCode, and quizMe. Built with TypeScript and the Model Context Protocol, it's published on mcpservers.org and provides an interactive learning experience for developers.",
    category: 'tools',
    image: 'mcp',
    gallery: range(5, (n) => `/images/projects/mcp-learning-assistant/mcp_image${n}.webp`),
    live: 'https://mcpservers.org/servers/yasir-khan-7/mcp-learning-assistant',
    github: 'https://github.com/Yasir-Khan-7/mcp-learning-assistant',
    stack: ['TypeScript', 'Node.js', 'MCP'],
    technologies: ['TypeScript', 'Node.js', 'MCP', 'AI', 'Educational Tools', 'Cursor'],
    year: 2026,
  },
  {
    id: 'synthgen',
    title: 'SynthGen AI - Synthetic Data Generator',
    description: 'Privacy-preserving synthetic data generation tool that maintains statistical properties',
    fullDescription:
      'SynthGen AI is a powerful synthetic data generation tool that creates high-quality synthetic datasets while preserving the statistical properties of your original data. It allows users to generate synthetic data without exposing sensitive information while maintaining distributions, correlations, and relationships between variables. The application provides intuitive visualizations to compare original and synthetic data through histograms, box plots, and scatter plots, with export options for downloading generated data in CSV or Excel formats. SynthGen AI leverages Large Language Models (specifically Llama 3.3 70B through Groq) to analyze dataset structures, identify statistical relationships, and generate synthetic records that maintain the same distributions and correlations while preserving data types and value ranges.',
    category: 'tools',
    image: 'synthgen',
    gallery: range(4, (n) => `/images/projects/synthgen-ai/synthgen_${n}.webp`),
    live: 'https://synthgen-ai.streamlit.app',
    github: 'https://github.com/Yasir-Khan-7/SynthGen',
    stack: ['Python', 'Streamlit', 'Groq LLM'],
    technologies: ['Python', 'Streamlit', 'Groq LLM', 'Llama 3.3 70B', 'Pydantic AI', 'Data Science'],
  },
  {
    id: 'fintrack',
    title: 'AI-FinTrack - Personal Finance Manager',
    description: 'Comprehensive personal finance tracking app with AI-powered financial advice',
    fullDescription:
      'AI-FinTrack is a comprehensive personal finance tracking application that helps users manage their finances, track transactions, visualize spending patterns, and get AI-powered financial advice. Key features include transaction management (add, delete, categorize), financial dashboard with visual analytics, income and expense tracking with categorization, monthly and yearly financial summaries, savings rate calculation, and an AI-powered financial assistant that provides personalized advice by analyzing your transaction history. The application is built with React and TypeScript with Material-UI for a modern interface, uses Supabase for authentication and data storage, and integrates with Groq SDK for AI language model functionality.',
    category: 'ai-apps',
    image: 'fintrack',
    gallery: [3, 4, 5, 6].map((n) => `/images/projects/ai-fintrack/fintrack_${n}.webp`),
    live: 'https://yasir-khan-7.github.io/AI-FinTrack/',
    github: 'https://github.com/Yasir-Khan-7/AI-FinTrack',
    stack: ['React', 'Supabase', 'Groq SDK'],
    technologies: ['React', 'TypeScript', 'Material-UI', 'Supabase', 'Chart.js', 'Groq SDK', 'AI'],
  },
  {
    id: 'schemagen',
    title: 'AI SchemaGen - PDF to XML Converter',
    description: 'AI-powered tool that converts PDFs into structured XML format with precision',
    fullDescription:
      'AI SchemaGen is a lightweight AI-powered tool that converts PDFs into structured XML files using Large Language Models (LLMs) and smol-agents. It automates document parsing, ensuring accurate extraction and formatting of data into valid XML schemas. Built with Python and Streamlit, it provides an intuitive interface for users to process documents efficiently.',
    category: 'tools',
    image: 'schemagen',
    gallery: range(3, (n) => `/images/projects/ai_schemagen/pdf_xml_${n}.webp`),
    live: 'https://ai-schemagen.streamlit.app',
    github: 'https://github.com/Yasir-Khan-7/AI-SchemaGen',
    stack: ['Python', 'Streamlit', 'Smol-agents'],
    technologies: ['Python', 'Streamlit', 'LLM', 'Smol-agents', 'AI'],
  },
  {
    id: 'sales-dashboard',
    title: 'E-commerce Sales Dashboard',
    description:
      'Interactive Power BI dashboard showcasing e-commerce sales analytics with ETL transformations',
    fullDescription:
      'A comprehensive Power BI dashboard that visualizes e-commerce sales data through dynamic and interactive visualizations. The project includes ETL transformations on CSV data, creating a seamless data pipeline from raw data to insightful visualizations. Key features include sales performance metrics, customer analytics, product performance tracking, and trend analysis. The dashboard provides actionable insights for business decision-making through intuitive charts, graphs, and KPIs.',
    category: 'data',
    image: 'sales-dashboard',
    gallery: ['/images/projects/madhav_ecommerce_sales_dashboard/dashboard_1.webp'],
    live: 'https://app.powerbi.com/view?r=eyJrIjoiNzA0ZDA0OGItMzVkMy00ODc1LThhZmYtOGRkNDE2ZjFhNzJhIiwidCI6ImM4OTM2N2ViLWFlYTEtNDM4YS1hNWYzLTY0ODdhNjAzYjMzYSIsImMiOjl9',
    github: null,
    stack: ['Power BI', 'ETL', 'Data Visualization'],
    technologies: ['Power BI', 'ETL', 'Data Visualization', 'Sales Analytics', 'Business Intelligence'],
  },
]
