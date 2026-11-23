import type { Metadata } from 'next';
import { AboutContent } from '@/components/about/about-content';

export const metadata: Metadata = {
  title: 'About Me | Chibueze Williams Obodo',
  description:
    'Learn more about Chibueze Williams Obodo: full-stack software engineer background, technical philosophy, and engineering experience at Spinbrite and Lumecs.',
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex min-w-0 max-w-full flex-col w-full">
      <AboutContent />
    </main>
  );
}
