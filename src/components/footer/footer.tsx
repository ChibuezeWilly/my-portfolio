'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Copy, Mail, Phone } from 'lucide-react';
import { Github } from '@/components/icons';

export function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('pricelesswilliams1234@gmail.com');
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#080808] pt-20 pb-24 md:pb-16 text-zinc-300 overflow-hidden">
      {/* Background Animation on top of #080808 background (visible underneath text) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 left-1/4 w-[650px] h-[450px] rounded-full bg-gradient-to-r from-[#FF6A00]/25 via-[#8B5CF6]/15 to-transparent blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.18, 0.08],
            x: [30, -30, 30],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-10 w-[500px] h-[400px] rounded-full bg-[#FF6A00]/15 blur-[130px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Upper Container: Flex Row on desktop matching Line 38 */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-14 border-b border-white/10">
          {/* Left Column: Heading + Subtext + CTAs */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Have a Problem <br />
              <span className="font-serif italic font-normal text-zinc-300">
                Worth Solving?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              Whether you&apos;re starting with an idea, improving an existing product, or looking for someone to help your team build and ship, I&apos;d love to hear about it. Let&apos;s talk about what you&apos;re building and how I can help make it happen.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#E55A00] text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-[#FF6A00]/25 transition-all group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-sm hover:border-[#FF6A00] hover:text-[#FF6A00] transition-all"
              >
                <span>Send Message</span>
              </a>
            </div>

            {/* CW Emblem: One white, one orange matching line 40 */}
            <div className="flex items-center gap-3 mb-5">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="flex items-center font-black text-2xl tracking-tighter leading-none select-none">
                  <span className="text-white">C</span>
                  <span className="text-[#FF6A00]">W</span>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center gap-7 text-sm font-medium text-zinc-400">
              <Link href="/projects" className="hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/about" className="hover:text-white transition-colors">
                About Me
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Column: Project brewing in your mind + Email + Socials matching Line 42 */}
          <div className="flex-1 max-w-lg lg:text-right flex flex-col lg:items-end justify-between self-stretch">
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal text-white mb-6 leading-snug">
                Is there a fascinating <br />
                <span className="font-serif italic text-zinc-300">
                  project brewing in your mind?
                </span>
              </h3>

              <div className="mb-6 flex items-center gap-2 lg:justify-end">
                <a
                  href="mailto:pricelesswilliams1234@gmail.com"
                  className="inline-flex min-w-0 items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6A00]/50 text-sm text-zinc-200 hover:text-white transition-all shadow-md group"
                >
                  <Mail className="w-4 h-4 text-[#FF6A00]" />
                  <span className="truncate">pricelesswilliams1234@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={emailCopied ? 'Email address copied' : 'Copy email address'}
                  title={emailCopied ? 'Copied' : 'Copy email address'}
                  className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-[#FF6A00]/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]"
                >
                  {emailCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-6 lg:justify-end">
              <a
                href="https://github.com/ChibuezeWilly"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF6A00]/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:pricelesswilliams1234@gmail.com"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF6A00]/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+2290161975355"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF6A00]/50 transition-colors"
                aria-label="Call +229 01 61 97 53 55"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Center Credit matching Line 43 */}
        <div className="pt-8 flex justify-center text-center">
          <p className="text-xs text-zinc-500 font-mono tracking-wider">
            Designed &amp; Built by Chibueze Williams Obodo
          </p>
        </div>
      </div>
    </footer>
  );
}
