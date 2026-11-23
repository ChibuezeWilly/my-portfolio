export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand the Problem',
    description: 'Understand the vision, mission, business goals, user needs and requirements.',
  },
  {
    number: '02',
    title: 'Define & Architect',
    description: 'Define the solution, plan the architecture, identify technologies and establish the foundation.',
  },
  {
    number: '03',
    title: 'Build & Develop',
    description: 'Develop clean, modular, reliable software with thoughtful user experiences.',
  },
  {
    number: '04',
    title: 'Deploy & Support',
    description: 'Deploy, monitor, improve and support the product to maintain reliability and performance.',
  },
];
