export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
  category: 'dashboard' | 'rmarkdown' | 'tableau' | 'powerbi' | 'other';
  featured: boolean;
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
  title: "Senior Data Analyst",
  location: "Bogotá, Colombia",
  phone: "+57 3103783850",
  email: "danielariosperez2@gmail.com",
  linkedin: "https://linkedin.com/in/daniela-rios-perez/",
  summary: "Data Analytics professional with experience transforming complex business problems into data-driven solutions. Track record of analyzing data from multiple sources to provide actionable insights. MSc in Biostatistics and Bioinformatics graduate with strong stakeholder management skills and experience in Agile methodologies. Focus on translating business requirements into technical solutions while ensuring data quality and consistency throughout the development lifecycle."
};

export const projects: Project[] = [
  {
    id: "hilton-dashboard",
    title: "Hilton Analytics Dashboard",
    description: "Comprehensive analytics dashboard for hospitality industry with interactive visualizations and real-time data insights. Features web, desktop and mobile versions with integrated chatbot.",
    technologies: ["React", "Next.js", "D3.js", "TypeScript", "Chatbot Integration"],
    link: "https://hilton-all.vercel.app/",
    category: "dashboard",
    featured: true
  },
  {
    id: "emerge-dashboard",
    title: "Emerge Business Intelligence",
    description: "Advanced BI solution with custom reporting capabilities and automated data processing workflows. Multi-platform dashboard with chatbot assistance.",
    technologies: ["React", "JavaScript", "Chart.js", "API Integration", "Chatbot"],
    link: "https://emerge-orcin.vercel.app/",
    category: "dashboard",
    featured: true
  },
  {
    id: "qatar-tourism",
    title: "Qatar Tourism Analytics",
    description: "Tourism data visualization platform with interactive maps and statistical analysis. Available across web, desktop and mobile platforms with AI chatbot.",
    technologies: ["React", "Mapbox", "Python", "Data Visualization", "AI Chatbot"],
    link: "https://qatar-tourism.vercel.app/",
    category: "dashboard",
    featured: true
  },
  {
    id: "banks-analytics",
    title: "Banking Sector Analytics",
    description: "Financial data analysis platform with risk assessment and performance metrics visualization. Multi-platform solution with intelligent chatbot support.",
    technologies: ["React", "Financial APIs", "Data Analytics", "Security", "Chatbot"],
    link: "https://banks-two.vercel.app/",
    category: "dashboard",
    featured: true
  },
  {
    id: "capital-one",
    title: "Capital One Dashboard",
    description: "Enterprise-level financial analytics dashboard with advanced reporting and data integration. Cross-platform compatibility with AI-powered chatbot.",
    technologies: ["React", "Enterprise APIs", "Advanced Analytics", "TypeScript", "AI Chatbot"],
    link: "https://capital-one-nine.vercel.app/",
    category: "dashboard",
    featured: true
  },
  {
    id: "powerbi-analytics",
    title: "Power BI Analytics Dashboard",
    description: "Interactive Power BI dashboard featuring comprehensive data analysis and visualization capabilities with advanced filtering and drill-down functionality.",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "Business Intelligence"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYmMyMDk0MzQtZTFkYy00Y2JmLTg5NmYtOTAxY2YyYjExNzg5IiwidCI6IjRhMTM4ZTAyLTQxOTctNDAyOS1iMzVlLTMwODk5YTIwZmI5OSIsImMiOjR9",
    category: "powerbi",
    featured: true
  },
  {
    id: "datathon-un",
    title: "UN Datathon 2024 - Insight Analytics",
    description: "72-hour intensive data challenge for the United Nations, creating comprehensive Tableau dashboards and web design solutions for global development insights.",
    technologies: ["Tableau", "Web Design", "Data Analytics", "UN SDGs", "Dashboard Design"],
    link: "https://andiespejo.github.io/Datathon_insight_analytics/",
    category: "tableau",
    featured: true
  },
  {
    id: "rmarkdown-1",
    title: "Statistical Analysis with R",
    description: "Comprehensive statistical analysis and data modeling using R Markdown with advanced visualization techniques.",
    technologies: ["R", "R Markdown", "Statistical Modeling", "Data Visualization"],
    link: "https://rpubs.com/danidata/1219003",
    category: "rmarkdown",
    featured: false
  },
  {
    id: "rmarkdown-2",
    title: "Advanced Data Mining",
    description: "Data mining and predictive analytics project with machine learning algorithms implementation.",
    technologies: ["R", "Machine Learning", "Predictive Analytics", "Data Mining"],
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