import type { Metadata } from 'next';
import { ProjectsShowcase } from '@/components/projects/projects-showcase';

export const metadata: Metadata = {
  title: 'Selected Work & Projects | Chibueze Williams Obodo',
  description:
    'Explore projects built by Chibueze Williams Obodo including Operon, Novora, TallyFlow, and ChurnDesk, featuring an interactive project-aware AI assistant.',
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 flex min-w-0 max-w-full flex-col w-full">
      <ProjectsShowcase />
    </main>
  );
}
