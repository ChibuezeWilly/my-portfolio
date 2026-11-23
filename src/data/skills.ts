export interface SkillCategory {
  number: string;
  name: string;
  description: string;
  technologies: string[];
}

export interface EngineeringStrength {
  title: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    number: '01',
    name: 'Frontend Development',
    description: 'Building responsive, accessible, and intuitive interfaces that make products easy and enjoyable to use.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Zustand'],
  },
  {
    number: '02',
    name: 'Backend Development',
    description: 'Building the application logic, APIs, and services that power reliable and scalable products.',
    technologies: ['Python', 'FastAPI', 'Node.js', 'REST API Development', 'API Integration', 'Background Jobs & Task Queues', 'Webhooks', 'Asynchronous Processing'],
  },
  {
    number: '03',
    name: 'AI & Agent Engineering',
    description: 'Building AI-powered applications, intelligent agents, and automated workflows that solve practical problems.',
    technologies: ['LangGraph', 'Large Language Models (LLMs)', 'AI Agents & Multi-step Workflows', 'Retrieval-Augmented Generation (RAG)', 'Hybrid Search & Graph RAG', 'Model Context Protocol (MCP)', 'Prompt Engineering', 'LLM Evaluation & Testing', 'Human-in-the-Loop Systems'],
  },
  {
    number: '04',
    name: 'Database & Data Engineering',
    description: 'Designing data structures, storage systems, and retrieval pipelines that support reliable application behaviour.',
    technologies: ['PostgreSQL', 'Redis', 'Neo4j', 'ChromaDB', 'Pinecone', 'Database Design', 'Data Modelling', 'BM25 & Vector Search'],
  },
  {
    number: '05',
    name: 'DevOps & Deployment',
    description: 'Taking applications from development to production and keeping them running reliably.',
    technologies: ['Docker', 'GitHub Actions', 'CI/CD Pipelines', 'Render', 'Automated Testing', 'Pytest', 'ARQ', 'Langfuse', 'Application Monitoring'],
  },
  {
    number: '06',
    name: 'Integrations & Payments',
    description: 'Connecting applications to external services and building workflows across different platforms.',
    technologies: ['Stripe', 'PayPal', 'Shopify', 'Google Sheets', 'Twilio', 'Vapi', 'Retell', 'ElevenLabs', 'AssemblyAI', 'Zendesk', 'Salesforce', 'HubSpot', 'Jira'],
  },
  {
    number: '07',
    name: 'Security & Reliability',
    description: 'Building systems with appropriate safeguards, predictable behaviour, and controlled access.',
    technologies: ['Authentication & Authorization', 'Role-Based Access Control', 'Credential Protection', 'PII Sanitization', 'Webhook Signature Verification', 'SSRF Protection', 'Prompt Injection Defenses', 'Retry & Recovery Mechanisms', 'Human Approval Workflows'],
  },
];

export const engineeringStrengths: EngineeringStrength[] = [
  { title: 'Problem Solving', description: 'Understanding problems and finding practical technical solutions.' },
  { title: 'Product Thinking', description: 'Considering users, business goals, and the overall product experience.' },
  { title: 'System Architecture', description: 'Planning how application components and services work together.' },
  { title: 'End-to-End Ownership', description: 'Taking products from an initial idea through development and deployment.' },
  { title: 'AI Systems Engineering', description: 'Building useful AI workflows with evaluation, safeguards, and human oversight.' },
  { title: 'Continuous Improvement', description: 'Monitoring products, identifying weaknesses, and improving them after launch.' },
];
