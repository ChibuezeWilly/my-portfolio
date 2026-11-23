import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/footer/footer';
import { LoadingScreen } from '@/components/loading-screen';
import { ProjectAiOverlay } from '@/components/projects/project-ai-overlay';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chibueze Williams Obodo | Full-Stack Software Engineer',
  description:
    "Portfolio of Chibueze Williams Obodo, a Full-Stack Software Engineer specializing in high-performance web applications, scalable backends, and interactive digital products.",
  keywords: [
    'Chibueze Williams Obodo',
    'Full-Stack Developer',
    'Software Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'FastAPI',
    'Python',
    'Web Development',
  ],
  authors: [{ name: 'Chibueze Williams Obodo' }],
  creator: 'Chibueze Williams Obodo',
  openGraph: {
    title: 'Chibueze Williams Obodo | Full-Stack Software Engineer',
    description:
      'I Understand, Code & Solve Problems. Discover projects, technical architecture, and interactive AI assistant.',
    url: 'https://chibuezewilliams.dev',
    siteName: 'Chibueze Williams Obodo Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen w-full min-w-0 bg-[#080808] text-[#F5F5F5] antialiased selection:bg-[#FF6A00]/25 selection:text-white">
        <ThemeProvider>
          <div id="site-layout" className="relative mx-auto flex min-h-screen w-full min-w-0 max-w-full flex-col overflow-x-clip">
            <LoadingScreen />
            <Navbar />
            <ProjectAiOverlay />
            <div className="flex w-full min-w-0 max-w-full flex-1 flex-col">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
