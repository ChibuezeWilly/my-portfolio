export interface Project {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category?: string;
  year?: string;
  image?: string;
  gallery?: string[];
  technologies: string[];
  githubUrl?: string | null;
  backendUrl?: string | null;
  liveUrl?: string | null;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  technicalDecisions: { decision: string; reason: string }[];
  challenges: { challenge: string; solution: string }[];
  myRole: string;
  futureImprovements: string[];
  aiContext: string;
  verified: boolean;
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  technologies: string[];
}

export interface NavLink {
  label: string;
  route: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
