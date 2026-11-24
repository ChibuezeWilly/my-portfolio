import type { Metadata } from 'next';
import { AboutContent } from '@/components/about/about-content';

export const metadata: Metadata = {
  title: 'About Me | Chibueze Williams Obodo',
  description:
    'Learn about Chibueze Williams Obodo, Full-Stack AI Engineer focused on AI systems engineering, product ownership, and building useful software for real users.',
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex min-w-0 max-w-full flex-col w-full">
      <AboutContent />
    </main>
  );
}
