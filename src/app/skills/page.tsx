import type { Metadata } from 'next';
import { SkillsContent } from '@/components/skills/skills-content';

export const metadata: Metadata = {
  title: 'Tech Toolbox & Skills | Chibueze Williams Obodo',
  description:
    'Technologies and engineering strengths across frontend and backend development, AI systems, data engineering, integrations, deployment, security, and reliability.',
};

export default function SkillsPage() {
  return (
    <main className="flex-1 flex min-w-0 max-w-full flex-col w-full">
      <SkillsContent />
    </main>
  );
}
