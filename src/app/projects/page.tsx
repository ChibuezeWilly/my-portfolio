import type { Metadata } from 'next';
import { ProjectsShowcase } from '@/components/projects/projects-showcase';

export const metadata: Metadata = {
  title: 'Selected Work & Projects | Chibueze Williams Obodo',
  description:
    'Explore case studies for Operon, Novora, TallyFlow, and ChurnDesk, with product workflows and links to available source code and demos.',
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 flex min-w-0 max-w-full flex-col w-full">
      <ProjectsShowcase />
    </main>
  );
}
