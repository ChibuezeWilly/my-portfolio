import { Hero } from '@/components/hero/hero';
import { BriefAboutSection } from '@/components/home/brief-about-section';
import { BriefProjectsSection } from '@/components/home/brief-projects-section';
import { ServicesSection } from '@/components/home/services-section';
import { ProcessSection } from '@/components/home/process-section';

export default function HomePage() {
  return (
    <main className="flex-1 flex min-w-0 max-w-full flex-col w-full">
      <Hero />
      <BriefAboutSection />
      <BriefProjectsSection />
      <ServicesSection />
      <ProcessSection />
    </main>
  );
}
