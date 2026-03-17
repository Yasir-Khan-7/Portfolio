const publicUrl = process.env.PUBLIC_URL;

export const projectsData = [
    {
        id: 1,
        title: "IESA – Intelligent Energy Scenario Analysis",
        shortDescription: "Advanced energy planning tool for data-driven decision-making with AI-powered insights",
        fullDescription: "IESA is an advanced energy planning tool designed to support data-driven decision-making for energy planners and input entry operators. By leveraging AI, machine learning, and advanced data processing techniques, IESA empowers users to analyze energy trends, generate predictive insights, and streamline planning workflows. Key features include personalized AI-driven recommendations, prediction engine using advanced regression models, dynamic scenario analysis, simplified data planning & input, and automated PDF reporting.",
        images: [
            `${publicUrl}/images/projects/iesa/iesa_1.png`,
            `${publicUrl}/images/projects/iesa/iesa_2.png`,
            `${publicUrl}/images/projects/iesa/iesa_3.png`,
            `${publicUrl}/images/projects/iesa/iesa_4.png`,
            `${publicUrl}/images/projects/iesa/iesa_5.png`,
            `${publicUrl}/images/projects/iesa/iesa_6.png`,
            `${publicUrl}/images/projects/iesa/iesa_7.png`
        ],
        image: `${publicUrl}/images/projects/iesa/iesa_1.png`,
        technologies: ["Python", "Machine Learning", "Streamlit", "MySQL", "LLM", "Smol-agents"],
        toolLogos: [
            { name: "ChatGPT", logo: `${publicUrl}/images/ai_tools/chat_gpt_logo.png` }
        ],
        githubLink: "https://github.com/Yasir-Khan-7/Intelligent-Energy-Scenerio-Analaysis",
        liveLink: "https://iesa-entry.streamlit.app",
        featured: true,
        category: "AI Applications"
    },
    {
        id: 2,
        title: "GoToGenie",
        shortDescription: "AI-powered location discovery platform with 5 specialized agents for intelligent place recommendations",
        fullDescription: "GoToGenie is an AI-powered platform that helps people find the best places around them using advanced AI and agentic workflows. The system features 5 specialized agents: Intent Agent for understanding user queries, Location Agent for geo-based search, Photos Agent for visual discovery, Curated Output Agent for personalized recommendations, and Knowledge Agent for intelligent insights about nearby locations. Built with Claude and Lovable, it delivers a seamless experience for discovering local gems.",
        images: [
            `${publicUrl}/images/projects/gotogenie/gotogenie_img1.png`,
            `${publicUrl}/images/projects/gotogenie/gotogenie_img2.png`,
            `${publicUrl}/images/projects/gotogenie/gotogenie_img3.png`,
            `${publicUrl}/images/projects/gotogenie/gotogenie_img4.png`,
            `${publicUrl}/images/projects/gotogenie/gotogenie_img5.png`,
            `${publicUrl}/images/projects/gotogenie/gotogenie_img6.png`,
            `${publicUrl}/images/projects/gotogenie/gotogenie_img7.png`,
            `${publicUrl}/images/projects/gotogenie/gotogenie_img8.png`
        ],
        image: `${publicUrl}/images/projects/gotogenie/gotogenie_img1.png`,
        technologies: ["Claude", "Lovable", "AI Agents", "TypeScript", "React"],
        toolLogos: [
            { name: "Claude", logo: `${publicUrl}/images/ai_tools/claude_code.png` },
            { name: "Lovable", logo: `${publicUrl}/images/ai_tools/lovable_logo.png` }
        ],
        githubLink: null,
        liveLink: "https://gotogenie.lovable.app/",
        featured: true,
        year: 2026,
        category: "AI Applications"
    },
    {
        id: 3,
        title: "Agentic Mosaic",
        shortDescription: "Multi-agent data science platform with 5 specialized AI agents for automated ML workflows",
        fullDescription: "Agentic Mosaic is an intelligent data science platform built with agentic workflows that empowers data scientists, AI engineers, and data analysts to streamline their ML pipeline. The system features 5 specialized agents working in sequence: Data Structure Agent (Schema Map) for understanding data architecture, EDA Agent (EDA Canvas) for exploratory data analysis, Preprocessing Agent (Pipeline View) for data cleaning and transformation, Feature Engineering Agent (Feature Tree) for creating meaningful features, and Model Selection Agent (Model Arena) for automated model comparison and selection. Users can track each agent's progress in real-time through SSE events, making the entire workflow transparent and interactive.",
        images: [
            `${publicUrl}/images/projects/agentic-mosaic/agentic_mosaic_img1.png`,
            `${publicUrl}/images/projects/agentic-mosaic/agentic_mosaic_img2.png`,
            `${publicUrl}/images/projects/agentic-mosaic/agentic_mosaic_img3.png`,
            `${publicUrl}/images/projects/agentic-mosaic/agentic_mosaic_img4.png`,
            `${publicUrl}/images/projects/agentic-mosaic/agentic_mosaic_img5.png`,
            `${publicUrl}/images/projects/agentic-mosaic/agentic_mosaic_img6.png`,
            `${publicUrl}/images/projects/agentic-mosaic/agentic_mosaic_img7.png`
        ],
        image: `${publicUrl}/images/projects/agentic-mosaic/agentic_mosaic_img1.png`,
        technologies: ["Claude", "Lovable", "AI Agents", "SSE Events", "TypeScript", "React"],
        toolLogos: [
            { name: "Claude", logo: `${publicUrl}/images/ai_tools/claude_code.png` },
            { name: "Lovable", logo: `${publicUrl}/images/ai_tools/lovable_logo.png` }
        ],
        githubLink: null,
        liveLink: "https://agentic-mosaic.lovable.app/",
        featured: true,
        year: 2026,
        category: "AI Applications"
    },
    {
        id: 4,
        title: "NextShop-AI",
        shortDescription: "AI-assisted e-commerce application built with Next.js and Figma MCP Server",
        fullDescription: "An AI-assisted e-commerce application built with Next.js, using the Figma MCP Server to extract structured design data and Cursor to generate, refine, and iteratively improve frontend components. The project demonstrates a modern AI-driven workflow that accelerates UI development.",
        images: [
            `${publicUrl}/images/projects/shop-ai/shop_ai_image1.png`,
            `${publicUrl}/images/projects/shop-ai/shop_ai_image2.png`,
            `${publicUrl}/images/projects/shop-ai/shope_ai_image3.png`,
            `${publicUrl}/images/projects/shop-ai/shop_ai_image4.png`,
            `${publicUrl}/images/projects/shop-ai/shop_ai_image5.png`
        ],
        image: `${publicUrl}/images/projects/shop-ai/shop_ai_image1.png`,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma MCP", "AI", "Cursor"],
        toolLogos: [
            { name: "Figma", logo: `${publicUrl}/images/ai_tools/figma_logo.png` },
            { name: "Cursor", logo: `${publicUrl}/images/ai_tools/cursor_id_logo.png` }
        ],
        githubLink: "https://github.com/Yasir-Khan-7/NextShop-AI",
        liveLink: "https://next-shop-ai.vercel.app/",
        featured: true,
        year: 2026,
        category: "AI Designs"
    },
    {
        id: 5,
        title: "TravelSense-AI",
        shortDescription: "AI-powered tourism design platform that transforms travel application planning",
        fullDescription: "TravelSense AI is an AI-powered tourism design platform that transforms how travel applications are planned and built. It combines intelligent prompt strategies, Cursor AI, and the Figma MCP server to create user-centered, production-ready AI designs. Instead of manually crafting UI flows and travel logic.",
        images: [
            `${publicUrl}/images/projects/travelsense-ai/travelsense_ai_image1.png`,
            `${publicUrl}/images/projects/travelsense-ai/travelsense_ai_image2.png`,
            `${publicUrl}/images/projects/travelsense-ai/travelsense_ai_image3.png`,
            `${publicUrl}/images/projects/travelsense-ai/travelsense_ai_image4.png`,
            `${publicUrl}/images/projects/travelsense-ai/travelsense_ai_image5.png`,
            `${publicUrl}/images/projects/travelsense-ai/travelsense_ai_image6.png`
        ],
        image: `${publicUrl}/images/projects/travelsense-ai/travelsense_ai_image1.png`,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma MCP", "AI", "Cursor"],
        toolLogos: [
            { name: "Figma", logo: `${publicUrl}/images/ai_tools/figma_logo.png` },
            { name: "Cursor", logo: `${publicUrl}/images/ai_tools/cursor_id_logo.png` }
        ],
        githubLink: "https://github.com/Yasir-Khan-7/TravelSense-AI",
        liveLink: "https://travel-sense-ai.vercel.app/",
        featured: true,
        year: 2026,
        category: "AI Designs"
    },
    {
        id: 6,
        title: "Positivus AI Agency",
        shortDescription: "Modern AI-powered digital marketing agency built with Figma design extraction",
        fullDescription: "A modern AI-powered digital agency built using Cursor, MCP Server, and Figma design extraction, leveraging prompt engineering to transform designs into production-ready web experiences. The project showcases advanced AI-driven development workflow, combining intelligent design-to-code transformation with modern web technologies to create a fully responsive and interactive digital marketing agency website.",
        images: [
            `${publicUrl}/images/projects/positivus-ai-agency/positivusai_image1.png`,
            `${publicUrl}/images/projects/positivus-ai-agency/positivusai_image2.png`,
            `${publicUrl}/images/projects/positivus-ai-agency/positivusai_image3.png`,
            `${publicUrl}/images/projects/positivus-ai-agency/positivusai_image4.png`,
            `${publicUrl}/images/projects/positivus-ai-agency/positivusai_image5.png`,
            `${publicUrl}/images/projects/positivus-ai-agency/positivusai_image6.png`,
            `${publicUrl}/images/projects/positivus-ai-agency/positivusai_image7.png`
        ],
        image: `${publicUrl}/images/projects/positivus-ai-agency/positivusai_image1.png`,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma MCP", "AI", "Cursor", "Prompt Engineering"],
        toolLogos: [
            { name: "Figma", logo: `${publicUrl}/images/ai_tools/figma_logo.png` },
            { name: "Cursor", logo: `${publicUrl}/images/ai_tools/cursor_id_logo.png` }
        ],
        githubLink: "https://github.com/Yasir-Khan-7/Positivus-AI-Agency",
        liveLink: "https://positivus-ai-agency.vercel.app/",
        featured: true,
        year: 2026,
        category: "AI Designs"
    },
    {
        id: 7,
        title: "EatSmart AI",
        shortDescription: "AI-powered meal planning platform with intelligent design-to-code workflow",
        fullDescription: "EatSmart AI is a modern, AI-powered food experience focused on helping users make smarter eating decisions through intelligent design. It is built using Cursor for AI-assisted development and the Figma MCP server to ensure seamless design-to-code consistency. The platform demonstrates advanced AI-driven workflow, transforming Figma designs into production-ready web experiences with personalized meal planning, nutritional guidance, and smart grocery integration.",
        images: [
            `${publicUrl}/images/projects/eatsmart-ai/eatsmart_ai_image1.png`,
            `${publicUrl}/images/projects/eatsmart-ai/eatsmart_ai_image2.png`,
            `${publicUrl}/images/projects/eatsmart-ai/eatsmart_ai_image3.png`,
            `${publicUrl}/images/projects/eatsmart-ai/eatsmart_ai_image4.png`,
            `${publicUrl}/images/projects/eatsmart-ai/eatsmart_ai_image5.png`,
            `${publicUrl}/images/projects/eatsmart-ai/eatsmart_ai_image6.png`,
            `${publicUrl}/images/projects/eatsmart-ai/eatsmart_ai_image7.png`,
            `${publicUrl}/images/projects/eatsmart-ai/eatsmart_ai_image8.png`,
            `${publicUrl}/images/projects/eatsmart-ai/eatsmart_ai_image9.png`
        ],
        image: `${publicUrl}/images/projects/eatsmart-ai/eatsmart_ai_image1.png`,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma MCP", "AI", "Cursor", "Design-to-Code"],
        toolLogos: [
            { name: "Figma", logo: `${publicUrl}/images/ai_tools/figma_logo.png` },
            { name: "Cursor", logo: `${publicUrl}/images/ai_tools/cursor_id_logo.png` }
        ],
        githubLink: "https://github.com/Yasir-Khan-7/EatSmart-AI",
        liveLink: "https://eatsmart-ai.vercel.app/",
        featured: true,
        year: 2026,
        category: "AI Designs"
    },
    {
        id: 8,
        title: "MCP Learning Assistant",
        shortDescription: "Educational MCP server helping developers learn and understand code through AI-powered tools",
        fullDescription: "An MCP server that helps developers understand what they're building by explaining concepts, reviewing approaches, and guiding them toward better solutions. Features 8 powerful learning tools including explainConcept, reviewCode, suggestBestPractice, compareApproaches, generateLearningPath, debugHelper, explainThisCode, and quizMe. Built with TypeScript and the Model Context Protocol, it's published on mcpservers.org and provides an interactive learning experience for developers.",
        images: [
            `${publicUrl}/images/projects/mcp-learning-assistant/mcp_image1.png`,
            `${publicUrl}/images/projects/mcp-learning-assistant/mcp_image2.png`,
            `${publicUrl}/images/projects/mcp-learning-assistant/mcp_image3.png`,
            `${publicUrl}/images/projects/mcp-learning-assistant/mcp_image4.png`,
            `${publicUrl}/images/projects/mcp-learning-assistant/mcp_image5.png`
        ],
        image: `${publicUrl}/images/projects/mcp-learning-assistant/mcp_image1.png`,
        technologies: ["TypeScript", "Node.js", "MCP", "AI", "Educational Tools", "Cursor"],
        toolLogos: [
            { name: "Cursor", logo: `${publicUrl}/images/ai_tools/cursor_id_logo.png` }
        ],
        githubLink: "https://github.com/Yasir-Khan-7/mcp-learning-assistant",
        liveLink: "https://mcpservers.org/servers/yasir-khan-7/mcp-learning-assistant",
        featured: true,
        year: 2026,
        category: "Tools"
    },
    {
        id: 9,
        title: "SynthGen AI - Synthetic Data Generator",
        shortDescription: "Privacy-preserving synthetic data generation tool that maintains statistical properties",
        fullDescription: "SynthGen AI is a powerful synthetic data generation tool that creates high-quality synthetic datasets while preserving the statistical properties of your original data. It allows users to generate synthetic data without exposing sensitive information while maintaining distributions, correlations, and relationships between variables. The application provides intuitive visualizations to compare original and synthetic data through histograms, box plots, and scatter plots, with export options for downloading generated data in CSV or Excel formats. SynthGen AI leverages Large Language Models (specifically Llama 3.3 70B through Groq) to analyze dataset structures, identify statistical relationships, and generate synthetic records that maintain the same distributions and correlations while preserving data types and value ranges.",
        images: [
            `${publicUrl}/images/projects/synthgen-ai/synthgen_1.png`,
            `${publicUrl}/images/projects/synthgen-ai/synthgen_2.png`,
            `${publicUrl}/images/projects/synthgen-ai/synthgen_3.png`,
            `${publicUrl}/images/projects/synthgen-ai/synthgen_4.png`
        ],
        image: `${publicUrl}/images/projects/synthgen-ai/synthgen_1.png`,
        technologies: ["Python", "Streamlit", "Groq LLM", "Llama 3.3 70B", "Pydantic AI", "Data Science"],
        toolLogos: [
            { name: "ChatGPT", logo: `${publicUrl}/images/ai_tools/chat_gpt_logo.png` }
        ],
        githubLink: "https://github.com/Yasir-Khan-7/SynthGen",
        liveLink: "https://synthgen-ai.streamlit.app",
        featured: true,
        category: "Tools"
    },
    {
        id: 10,
        title: "AI-FinTrack - Personal Finance Manager",
        shortDescription: "Comprehensive personal finance tracking app with AI-powered financial advice",
        fullDescription: "AI-FinTrack is a comprehensive personal finance tracking application that helps users manage their finances, track transactions, visualize spending patterns, and get AI-powered financial advice. Key features include transaction management (add, delete, categorize), financial dashboard with visual analytics, income and expense tracking with categorization, monthly and yearly financial summaries, savings rate calculation, and an AI-powered financial assistant that provides personalized advice by analyzing your transaction history. The application is built with React and TypeScript with Material-UI for a modern interface, uses Supabase for authentication and data storage, and integrates with Groq SDK for AI language model functionality.",
        images: [
            `${publicUrl}/images/projects/ai-fintrack/fintrack_3.png`,
            `${publicUrl}/images/projects/ai-fintrack/fintrack_4.png`,
            `${publicUrl}/images/projects/ai-fintrack/fintrack_5.png`,
            `${publicUrl}/images/projects/ai-fintrack/fintrack_6.png`
        ],
        image: `${publicUrl}/images/projects/ai-fintrack/fintrack_3.png`,
        technologies: ["React", "TypeScript", "Material-UI", "Supabase", "Chart.js", "Groq SDK", "AI"],
        githubLink: "https://github.com/Yasir-Khan-7/AI-FinTrack",
        liveLink: "https://yasir-khan-7.github.io/AI-FinTrack/",
        featured: true,
        category: "AI Applications"
    },
    {
        id: 11,
        title: "AI SchemaGen - PDF to XML Converter",
        shortDescription: "AI-powered tool that converts PDFs into structured XML format with precision",
        fullDescription: "AI SchemaGen is a lightweight AI-powered tool that converts PDFs into structured XML files using Large Language Models (LLMs) and smol-agents. It automates document parsing, ensuring accurate extraction and formatting of data into valid XML schemas. Built with Python and Streamlit, it provides an intuitive interface for users to process documents efficiently.",
        images: [
            `${publicUrl}/images/projects/ai_schemagen/pdf_xml_1.png`,
            `${publicUrl}/images/projects/ai_schemagen/pdf_xml_2.png`,
            `${publicUrl}/images/projects/ai_schemagen/pdf_xml_3.png`
        ],
        image: `${publicUrl}/images/projects/ai_schemagen/pdf_xml_1.png`,
        technologies: ["Python", "Streamlit", "LLM", "Smol-agents", "AI"],
        toolLogos: [
            { name: "ChatGPT", logo: `${publicUrl}/images/ai_tools/chat_gpt_logo.png` }
        ],
        githubLink: "https://github.com/Yasir-Khan-7/AI-SchemaGen",
        liveLink: "https://ai-schemagen.streamlit.app",
        featured: true,
        category: "Tools"
    },
    {
        id: 12,
        title: "E-commerce Sales Dashboard",
        shortDescription: "Interactive Power BI dashboard showcasing e-commerce sales analytics with ETL transformations",
        fullDescription: "A comprehensive Power BI dashboard that visualizes e-commerce sales data through dynamic and interactive visualizations. The project includes ETL transformations on CSV data, creating a seamless data pipeline from raw data to insightful visualizations. Key features include sales performance metrics, customer analytics, product performance tracking, and trend analysis. The dashboard provides actionable insights for business decision-making through intuitive charts, graphs, and KPIs.",
        images: [
            `${publicUrl}/images/projects/madhav_ecommerce_sales_dashboard/dashboard_1.png`
        ],
        image: `${publicUrl}/images/projects/madhav_ecommerce_sales_dashboard/dashboard_1.png`,
        technologies: ["Power BI", "ETL", "Data Visualization", "Sales Analytics", "Business Intelligence"],
        githubLink: null,
        liveLink: "https://app.powerbi.com/view?r=eyJrIjoiNzA0ZDA0OGItMzVkMy00ODc1LThhZmYtOGRkNDE2ZjFhNzJhIiwidCI6ImM4OTM2N2ViLWFlYTEtNDM4YS1hNWYzLTY0ODdhNjAzYjMzYSIsImMiOjl9",
        featured: true,
        category: "Data"
    }
]; 