import type { Metadata } from 'next';
import { ContactContent } from '@/components/contact/contact-content';

export const metadata: Metadata = {
  title: "Let's Build Something Amazing | Contact Chibueze Williams",
  description:
    'Get in touch with Chibueze Williams for full-stack software development, architectural consulting, and high-impact digital products.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex min-w-0 max-w-full flex-col w-full">
      <ContactContent />
    </main>
  );
}
