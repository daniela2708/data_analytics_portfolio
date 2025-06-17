export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
  category: 'dashboard' | 'rmarkdown' | 'tableau' | 'powerbi' | 'other';
  featured: boolean;
  underMaintenance?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const personalInfo = {
  name: "Daniela Rios",
  title: "Economist & Data Professional",
  location: "Bogotá, Colombia",
  phone: "+57 3103783850",
  email: "danielariosperez2@gmail.com",
  linkedin: "https://linkedin.com/in/daniela-rios-perez/",
  summary: "Economist and data professional with a passion for transforming data into actionable insights. Committed to driving business value and innovation through advanced analytics, data engineering, and AI-powered solutions."
};

export const projects: Project[] = [
  {
    id: "hilton-dashboard",
    title: "Hospitality Intelligence Hub",
    description: "Interactive analytics dashboard for hospitality industry featuring comprehensive data visualizations and performance metrics. Built with modern web technologies to provide intuitive insights for hotel operations across web and desktop platforms.",
    technologies: ["React", "TypeScript"],
    link: "https://hilton-all.vercel.app/",
    category: "dashboard",
    featured: false
  },
  {
    id: "emerge-dashboard",
    title: "Canary Islands R&D Observatory",
    description: "Research and development observatory platform for the Canary Islands featuring data analytics and innovation metrics. Built to monitor and visualize R&D activities, funding trends, and technological advancement indicators across web, desktop, and mobile platforms.",
    technologies: ["React", "TypeScript"],
    link: "https://emerge-orcin.vercel.app/",
    category: "dashboard",
    featured: true,
    underMaintenance: true
  },
  {
    id: "qatar-tourism",
    title: "Qatar Tourism Intelligence",
    description: "Interactive tourism report platform for Qatar featuring comprehensive visitor statistics, destination analytics, and performance metrics. Built to visualize tourism data, seasonal trends, and hospitality indicators through dynamic charts and interactive reporting tools.",
    technologies: ["React", "TypeScript"],
    link: "https://qatar-tourism.vercel.app/",
    category: "dashboard",
    featured: false
  },
  {
    id: "banks-analytics",
    title: "Banking Ad Investment Tracker",
    description: "Advanced analytics platform for tracking and analyzing advertising investments across multiple banking institutions. Built to monitor ad spend performance, campaign effectiveness, and competitive advertising strategies through AI-generated insights and interactive data visualizations.",
    technologies: ["React", "TypeScript"],
    link: "https://banks-two.vercel.app/",
    category: "dashboard",
    featured: false
  },
  {
    id: "capital-one",
    title: "Capital One Analytics",
    description: "Comprehensive advertising analytics platform for Capital One featuring multimedia content analysis, interactive chatbot assistance, and campaign performance insights. Built to analyze marketing effectiveness, customer engagement, and advertising ROI through rich media visualizations.",
    technologies: ["React", "TypeScript"],
    link: "https://capital-one-nine.vercel.app/",
    category: "dashboard",
    featured: true
  },
  {
    id: "powerbi-analytics",
    title: "Campaign Performance Analytics",
    description: "Comprehensive advertising campaign analytics dashboard built with Power BI featuring detailed performance metrics, impression tracking, and click-through rate analysis. Provides insights into campaign effectiveness across device categories, sources, and creative dimensions with monthly performance overviews.",
    technologies: ["Power BI", "Google Analytics"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYmMyMDk0MzQtZTFkYy00Y2JmLTg5NmYtOTAxY2YyYjExNzg5IiwidCI6IjRhMTM4ZTAyLTQxOTctNDAyOS1iMzVlLTMwODk5YTIwZmI5OSIsImMiOjR9",
    category: "powerbi",
    featured: true
  },
  {
    id: "datathon-un",
    title: "UN Datathon 2024 - Insight Analytics",
    description: "72-hour intensive data challenge for the United Nations, creating comprehensive Tableau dashboards and web design solutions for global development insights. This project features multiple interactive dashboards (all designed by me and available at https://public.tableau.com/app/profile/daniela.rios.perez/vizzes for detailed review).",
    technologies: ["Tableau", "Web Design", "Data Analytics", "UN SDGs", "Dashboard Design"],
    link: "https://andiespejo.github.io/Datathon_insight_analytics/",
    category: "tableau",
    featured: false
  },
  {
    id: "rmarkdown-1",
    title: "R Markdown Analytics Showcase",
    description: "Professional data presentation platform demonstrating advanced R Markdown capabilities for creating elegant, shareable analytical reports. Features interactive visualizations, mathematical equations, dynamic tables, and multiple output formats to showcase sophisticated data storytelling techniques with customizable code visibility.",
    technologies: ["R Markdown", "R Language"],
    link: "https://rpubs.com/danidata/1219003",
    category: "rmarkdown",
    featured: false
  },
  {
    id: "rmarkdown-2",
    title: "EdTech Market Analysis",
    description: "Comprehensive educational technology market analysis using HolonIQ data, showcasing emerging companies and industry trends through advanced R analytics. Features interactive visualizations, trend analysis, and market insights presented in a professional, shareable format with clean data storytelling techniques.",
    technologies: ["R Markdown", "R Language"],
    link: "https://rpubs.com/danidata/1219006",
    category: "rmarkdown",
    featured: false
  }
];

export const experience: Experience[] = [
  {
    id: "ogs-tbwa",
    company: "OGS (Omnicom Global Solutions) - TBWA New York",
    position: "Senior Data Analyst",
    location: "Remote",
    startDate: "Nov 2024",
    endDate: "Present",
    current: true,
    description: [
      "Develop interactive dashboards and reporting solutions using React and Next.js",
      "Build and maintain Python-based data pipelines for collecting and integrating information from diverse sources",
      "Design and implement automated processes to streamline business operations and reporting workflows",
      "Lead cross-functional projects between technical and business teams to deliver data-driven solutions",
      "Collaborate with stakeholders to transform business requirements into technical implementations"
    ],
    technologies: ["React", "Next.js", "Python", "Data Pipelines", "Business Intelligence"]
  },
  {
    id: "edunext",
    company: "Edunext",
    position: "Data Analyst",
    location: "Bogotá, Colombia",
    startDate: "Aug 2023",
    endDate: "Oct 2024",
    description: [
      "Built ETL processes using SQL and Python for data warehouse development",
      "Created data models and validation frameworks for business intelligence initiatives",
      "Developed testing scripts to ensure data accuracy and consistency",
      "Collaborated with stakeholders to gather requirements and translate them into technical solutions",
      "Implemented data quality monitoring systems and documentation standards"
    ],
    technologies: ["SQL", "Python", "ETL", "Data Warehousing", "Business Intelligence"]
  },
  {
    id: "intempo",
    company: "Intempo (A Subsidiary of RUNT)",
    position: "Quality Data Analyst",
    location: "Bogotá, Colombia",
    startDate: "Jan 2023",
    endDate: "Aug 2023",
    description: [
      "Managed data profiling and quality assurance for transportation data systems",
      "Wrote SQL queries for data validation and analysis",
      "Created dimensional models for reporting and analytics",
      "Built automated testing procedures for data validation"
    ],
    technologies: ["SQL", "Data Quality", "Transportation Systems", "Data Validation"]
  },
  {
    id: "consultant",
    company: "Independent Companies & Public Sector",
    position: "Consultant - Data Analytics",
    location: "Bogotá, Colombia",
    startDate: "Mar 2022",
    endDate: "Dec 2022",
    description: [
      "Execute data cleaning, transformation, and automation projects using Python and SQL",
      "Develop data pipelines, automating workflows from data extraction to report generation",
      "Build reports and visualizations to support decision-making"
    ],
    technologies: ["Python", "SQL", "Data Automation", "Report Generation"]
  },
  {
    id: "motorola",
    company: "Motorola Solutions",
    position: "Data Analyst",
    location: "Bogotá, Colombia",
    startDate: "Feb 2021",
    endDate: "Feb 2022",
    description: [
      "Manage data for two divisions, producing internal and external BI reports",
      "Develop databases and spreadsheets to meet business needs",
      "Handle data related to sales, market research, logistics, and linguistics",
      "Standardize ETL/ELT processes and automate data extraction and reporting"
    ],
    technologies: ["Business Intelligence", "ETL/ELT", "Sales Analytics", "Logistics"]
  },
  {
    id: "triple-helix",
    company: "Triple Helix SLU",
    position: "Research Assistant",
    location: "Las Palmas, Gran Canaria, Spain",
    startDate: "Jul 2020",
    endDate: "Jan 2021",
    description: [
      "Conduct research and collect data on R&D investment candidates in Latin America",
      "Enhance data processes and measurement strategies for research accuracy",
      "Analyze and transform data to support internal decision-making"
    ],
    technologies: ["Research", "Data Collection", "R&D Analytics", "Investment Analysis"]
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Interactive Dashboards", "Custom Reporting Solutions"]
  },
  {
    category: "Data Engineering",
    items: ["ETL/ELT Pipelines", "Data Integration", "Workflow Automation", "Data Warehousing"]
  },
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "R"]
  },
  {
    category: "Cloud Platforms",
    items: ["Microsoft Azure", "Google Cloud Platform (GCP)"]
  },
  {
    category: "Data Visualization",
    items: ["Tableau", "Power BI", "Looker Studio", "Apache Superset", "Custom Dashboard Development"]
  },
  {
    category: "Data Integration",
    items: ["API Development", "Database Connectors", "Cross-platform Solutions"]
  },
  {
    category: "Process Automation",
    items: ["Workflow Optimization", "Scheduled Data Pipelines", "Business Process Automation"]
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"]
  }
];

export const education: Education[] = [
  {
    institution: "Centre for European Master's Programme",
    degree: "MSc in Biostatistics and Bioinformatics",
    location: "Madrid, España (Online)",
    period: "Sep 2023 - Dec 2024"
  },
  {
    institution: "Pontificia Universidad Javeriana",
    degree: "Bachelor of Economics",
    location: "Bogotá, Colombia",
    period: "Sep 2021"
  }
];

export const certifications: Certification[] = [
  {
    name: "Develop Generative AI Solutions with Azure OpenAI Service",
    issuer: "Microsoft Learn",
    date: "Apr 2024"
  },
  {
    name: "Get Started with Microsoft Data Analytics",
    issuer: "Microsoft Learn",
    date: "Jan 2024"
  },
  {
    name: "Advanced Learning Algorithms",
    issuer: "Coursera",
    date: "Jul 2022"
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    date: "Jul 2022"
  }
]; 