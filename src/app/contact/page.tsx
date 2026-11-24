import type { Metadata } from 'next';
import { ContactContent } from '@/components/contact/contact-content';

export const metadata: Metadata = {
  title: "Let's Build Something Amazing | Contact Chibueze Williams Obodo",
  description:
    'Contact Chibueze Williams Obodo about remote Full-Stack AI Engineer roles and selected product development opportunities.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex min-w-0 max-w-full flex-col w-full">
      <ContactContent />
    </main>
  );
}
