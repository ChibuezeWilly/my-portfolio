'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Code2, FolderGit2, Mail, ArrowDown } from 'lucide-react';
import { cvDownloadConfig } from '@/data/navigation';

interface NavItem {
  label: string;
  route: string;
  icon: React.ComponentType<{ className?: string }>;
}

const mobileItems: NavItem[] = [
  { label: 'Home', route: '/', icon: Home },
  { label: 'About', route: '/about', icon: User },
  { label: 'Skills', route: '/skills', icon: Code2 },
  { label: 'Projects', route: '/projects', icon: FolderGit2 },
  { label: 'Contact', route: '/contact', icon: Mail },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-40 w-full h-14 glass-nav px-4 flex items-center justify-between gap-2 overflow-hidden border-b border-white/10">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <div className="flex items-center font-black text-lg tracking-tighter leading-none select-none">
            <span className="text-white">C</span>
            <span className="text-[#FF6A00]">W</span>
          </div>
          <span className="truncate font-bold text-sm tracking-tight text-white">
            Chibueze Williams
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={cvDownloadConfig.filePath}
            download={cvDownloadConfig.fileName}
            aria-label="Download CV"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/20 text-xs font-medium text-white hover:border-[#FF6A00] transition-colors"
          >
            <ArrowDown className="w-3.5 h-3.5 text-[#FF6A00]" />
            <span className="text-[11px] font-semibold"> Download CV</span>
          </a>
        </div>
      </header>

      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-md px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      >
        <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/15 bg-zinc-950/90 shadow-[0_18px_50px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="flex h-16 w-full min-w-0 items-center justify-between gap-1 px-1.5">
            {mobileItems.map((item) => {
              const isActive = pathname === item.route || (item.route !== '/' && pathname.startsWith(`${item.route}/`));
              const Icon = item.icon;

              return (
                <Link
                  key={item.route}
                  href={item.route}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-2 text-[11px] font-medium transition-colors ${
                    isActive
                      ? 'bg-white/[0.09] text-[#FF8533]'
                      : 'text-zinc-400 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  <span className="relative">
                    <Icon className="h-5 w-5" />
                    {isActive && (
                      <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
                    )}
                  </span>
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
