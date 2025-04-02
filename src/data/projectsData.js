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
        githubLink: "https://github.com/Yasir-Khan-7/Intelligent-Energy-Scenerio-Analaysis",
        liveLink: "https://iesa-entry.streamlit.app",
        featured: true
    },
    {
        id: 2,
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
        githubLink: "https://github.com/Yasir-Khan-7/SynthGen",
        liveLink: "https://synthgen-ai.streamlit.app",
        featured: true
    },
    {
        id: 3,
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
        featured: true
    },
    {
        id: 4,
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
        githubLink: "https://github.com/Yasir-Khan-7/AI-SchemaGen",
        liveLink: "https://ai-schemagen.streamlit.app",
        featured: true
    },
    {
        id: 5,
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
        featured: true
    }
]; 