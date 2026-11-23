'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { cvDownloadConfig } from '@/data/navigation';

const heroSkillsLeft = [
  'Product Development',
  'API Development',
  'Database Design',
];

const heroSkillsRight = [
  'Frontend Development',
  'Backend Development',
  'Full-Stack Development',
];

export function HeroIntro() {
  return (
    <div className="flex flex-col justify-center relative z-10">
      {/* Small Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-3"
      >
        <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#FF6A00] font-semibold">
          HELLO, I&apos;M CHIBUEZE WILLIAMS OBODO
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight"
      >
        I Understand, Build <br />
        <span className="text-[#FF6A00]">&amp; Solve </span>
        Real Problems.
      </motion.h1>

      {/* Introduction Paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mb-6 space-y-3"
      >
        <p>
          I&apos;m a Full-Stack Software Engineer who has built and ship products used by 10,000+ active users, launched two products, and worked on software that makes everyday tasks easier for customers and teams.
        </p>
         <p>
          I care about more than getting something to work. I care about making it useful, reliable, and worth coming back to.
        </p>

      </motion.div>

      {/* Two-Column Bullet Points with Orange Dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8 max-w-md"
      >
        <div className="space-y-3">
          {heroSkillsLeft.map((skill) => (
            <div key={skill} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] flex-shrink-0" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {heroSkillsRight.map((skill) => (
            <div key={skill} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] flex-shrink-0" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Buttons: Primary (Let's Work Together) & Secondary (Download My CV) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap items-center gap-4"
      >
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#FF6A00] text-white font-medium text-sm hover:bg-[#FF8533] transition-all duration-300 shadow-lg shadow-[#FF6A00]/25 group"
        >
          <span>Let&apos;s Work Together</span>
        </a>

        <a
          href={cvDownloadConfig.filePath}
          download={cvDownloadConfig.fileName}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-medium text-sm hover:border-[#FF6A00] hover:text-[#FF6A00] transition-all duration-300 group"
        >
          <span>Download My CV</span>
          <ArrowDown className="w-4 h-4 text-[#FF6A00] group-hover:translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </div>
  );
}
