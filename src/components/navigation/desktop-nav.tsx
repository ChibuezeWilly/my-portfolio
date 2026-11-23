'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { navLinks, cvDownloadConfig } from '@/data/navigation';

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 hidden md:block w-full glass-nav transition-colors duration-200">
      <div className="max-w-7xl mx-auto sm:px-4 md:px-5 lg:px-6 h-20 flex items-center justify-between">
        {/* Brand: CW Emblem ('C' white, 'W' orange) right before Chibueze Williams */}
        <Link href="/" className="flex items-center sm:gap-2 md:gap-3 group">
          <div className="flex items-center font-black text-2xl tracking-tighter leading-none select-none">
            <span className="text-white">C</span>
            <span className="text-[#FF6A00]">W</span>
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-[#FF6A00] transition-colors duration-200">
            Chibueze Williams Obodo
          </span>
        </Link>

        {/* Center Navigation Links with Double Active Dot Animation */}
        <nav className="flex items-center md:gap-5 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
              <Link
                key={link.route}
                href={link.route}
                className="relative pb-3 pt-2 text-sm font-medium transition-colors duration-200 flex flex-col items-center group"
              >
                <span
                  className={`${
                    isActive
                      ? 'text-[#FF6A00] font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </span>

                {/* Double dot indicator: shifted down a bit */}
                {isActive ? (
                  <motion.div
                    layoutId="navbarActiveDots"
                    className="absolute -bottom-2.5 flex flex-col items-center gap-[3px]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  >
                    {/* Larger primary dot */}
                    <span className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_10px_#FF6A00]" />
                    {/* Smaller secondary dot */}
                    <span className="w-1 h-1 rounded-full bg-[#FF6A00]/70 shadow-[0_0_6px_#FF6A00]" />
                  </motion.div>
                ) : (
                  <span className="absolute -bottom-2.5 flex flex-col items-center gap-[3px] opacity-0 group-hover:opacity-30 transition-opacity">
                    <span className="w-2 h-2 rounded-full bg-zinc-500" />
                    <span className="w-1 h-1 rounded-full bg-zinc-500/70" />
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Download CV Button */}
        <div className="flex items-center gap-4">
          <a
            href={cvDownloadConfig.filePath}
            download={cvDownloadConfig.fileName}
            className="flex items-center gap-2 md:px-3 lg:px-5 py-2.5 rounded-xl border border-white/20 text-sm font-medium text-white hover:border-[#FF6A00] hover:text-[#FF6A00] transition-all duration-200 group"
          >
            <span>{cvDownloadConfig.label}</span>
            <ArrowDown className="w-4 h-4 text-[#FF6A00] group-hover:translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </header>
  );
}
