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
    name: 'AI Systems & Agent Engineering',
    description: 'Designing AI workflows with clear steps, retrieval, evaluation, and appropriate human review.',
    technologies: ['Python', 'LangGraph', 'LLM Workflows', 'Retrieval-Augmented Generation', 'LLM Evaluation', 'Human-in-the-Loop'],
  },
  {
    number: '02',
    name: 'Backend & API Engineering',
    description: 'Building application logic and APIs that connect product interfaces, data, and external services.',
    technologies: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'WebSockets', 'Webhooks', 'Background Jobs'],
  },
  {
    number: '03',
    name: 'Frontend & Product Engineering',
    description: 'Turning product requirements into responsive interfaces and clear user workflows.',
    technologies: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Zustand'],
  },
  {
    number: '04',
    name: 'Data, Retrieval & Databases',
    description: 'Designing data structures, storage systems, and retrieval pipelines that support reliable application behaviour.',
    technologies: ['PostgreSQL', 'Redis', 'Neo4j', 'ChromaDB', 'Pinecone', 'Database Design', 'Data Modelling', 'BM25 & Vector Search'],
  },
  {
    number: '05',
    name: 'Infrastructure, Testing & Reliability',
    description: 'Packaging, testing, deploying, and observing application behavior across services.',
    technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Pytest', 'ARQ', 'Langfuse', 'Application Monitoring'],
  },
  {
    number: '06',
    name: 'Integrations & Application Safety',
    description: 'Connecting services and applying safeguards at application boundaries.',
    technologies: ['API Integration', 'Authentication & Authorization', 'Role-Based Access Control', 'Credential Handling', 'Webhook Verification', 'Input Validation', 'Human Approval Workflows'],
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
