import fs from 'fs';
import path from 'path';

export interface ProjectKnowledge {
  name: string;
  slug: string;
  classification: string;
  verified: boolean;
  overview: string | null;
  problem: string | null;
  solution: string | null;
  architecture: string | null;
  technologies: string[];
  features: string[];
  design_decisions: { decision: string; reason: string }[];
  challenges: { challenge: string; solution: string }[];
  contributions: string[];
  results: string[];
  links: {
    github: string | null;
    live_preview: string | null;
  };
  additional_context: string;
}

export function getProjectKnowledge(slug: string): ProjectKnowledge | null {
  try {
    const knowledgeDir = path.join(process.cwd(), 'src', 'data', 'knowledge');
    const filePath = path.join(knowledgeDir, `${slug.toLowerCase()}.json`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as ProjectKnowledge;
  } catch (error) {
    console.error(`Error loading project knowledge for ${slug}:`, error);
    return null;
  }
}

export function getGlobalKnowledge() {
  try {
    const knowledgeDir = path.join(process.cwd(), 'src', 'data', 'knowledge');
    const globalPath = path.join(knowledgeDir, 'global.json');
    const expPath = path.join(knowledgeDir, 'experience.json');
    const skillsPath = path.join(knowledgeDir, 'skills.json');

    const globalData = fs.existsSync(globalPath) ? JSON.parse(fs.readFileSync(globalPath, 'utf-8')) : {};
    const expData = fs.existsSync(expPath) ? JSON.parse(fs.readFileSync(expPath, 'utf-8')) : {};
    const skillsData = fs.existsSync(skillsPath) ? JSON.parse(fs.readFileSync(skillsPath, 'utf-8')) : {};

    return { global: globalData, experience: expData, skills: skillsData };
  } catch (error) {
    console.error('Error loading global knowledge:', error);
    return { global: {}, experience: {}, skills: {} };
  }
}
