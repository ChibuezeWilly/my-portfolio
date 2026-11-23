'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Github } from '@/components/icons';
import { TechLogo } from '@/components/tech-logo';

const techStack = [
  'JavaScript', 'Python', 'React', 'TypeScript', 'Next', 'Tailwind',
  'LangGraph', 'LangChain', 'Redis', 'FastAPI', 'Langfuse', 'Postgres', 'Zustand',
];

const experiencesList = [
  {
    role: 'Full Stack Software Engineer',
    company: 'Spinbrite',
    period: '2024 - Present',
  },
  {
    role: 'Full Stack Developer',
    company: 'Lumecs',
    period: '2024 - 2025',
  },
  {
    role: 'Frontend & UI Engineer',
    company: 'Emerald Gold',
    period: '2024 · 1 month',
  },
];

export function BriefAboutSection() {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-white/5 bg-[#080808] overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="ambient-glow top-1/3 left-1/4 w-96 h-96 bg-[#FF6A00]/15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading with falling into page animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#FF6A00] block mb-2">
            A LITTLE ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            More Than Just Writing Code.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            I build purposeful digital products that solve real problems through thoughtful engineering and product ownership.
          </p>
        </motion.div>

        {/* Two-Column Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Profile Card — falling into page animation */}
          <motion.div
            initial={{ opacity: 0, y: -55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 flex flex-col justify-between shadow-xl overflow-hidden"
          >
            {/* Fire glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 0px 0px rgba(255,106,0,0)',
                  '0 0 16px 3px rgba(255,106,0,0.22)',
                  '0 0 28px 6px rgba(255,106,0,0.35)',
                  '0 0 16px 3px rgba(255,106,0,0.22)',
                  '0 0 0px 0px rgba(255,106,0,0)',
                ],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="w-full flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-6 relative z-10">
              {/* User Photo with L & rotated-L corner border decorations on BOTH sides (30% width & height) */}
              <div className="relative flex-shrink-0">
                {/* Fire glow */}
                <motion.div
                  className="absolute inset-[-3px] rounded-2xl pointer-events-none z-10"
                  animate={{
                    boxShadow: [
                      '0 0 0px 0px rgba(255,106,0,0)',
                      '0 0 20px 5px rgba(255,106,0,0.4)',
                      '0 0 34px 8px rgba(255,106,0,0.55)',
                      '0 0 20px 5px rgba(255,106,0,0.4)',
                      '0 0 0px 0px rgba(255,106,0,0)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Two adjacent corner brackets: Top-Right and Bottom-Right */}
                {/* Top-Right: rotated L shape (30% width, 30% height) */}
                <span className="absolute top-0 left-0 h-[2px] w-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />
                <span className="absolute top-0 left-0 w-[2px] h-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />

                {/* Bottom-Right: rotated L shape (30% width, 30% height) */}
                <span className="absolute bottom-0 right-0 h-[2px] w-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />
                <span className="absolute bottom-0 right-0 w-[2px] h-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />

                <div className="relative w-40 h-48 sm:w-44 sm:h-52 lg:w-48 lg:h-56 rounded-md overflow-hidden bg-[#0D0D12] shadow-lg group border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FF6A00]/40 to-transparent z-[1]" />
                  <Image
                    src="/images/profile.jpg"
                    alt="Chibueze Williams Obodo"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 relative z-[2]"
                  />
                </div>
              </div>

              {/* Text & Actions: beside image on sm/md, below on mobile & lg */}
              <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center w-full">
                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for work</span>
                </div>

                <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-2">
                  Chibueze Williams Obodo
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 max-w-xs leading-relaxed mb-5">
                  Create seamless experiences across web, mobile, and backend with unified, reliable codebases.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-3 mb-6">
                  <a
                    href="https://github.com/ChibuezeWilly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-[#FF6A00] hover:border-[#FF6A00]/50 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:pricelesswilliams1234@gmail.com"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-[#FF6A00] hover:border-[#FF6A00]/50 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+2290161975355"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-[#FF6A00] hover:border-[#FF6A00]/50 transition-colors"
                    aria-label="Call +229 01 61 97 53 55"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="w-28 sm:w-32 py-2.5 rounded-full bg-[#FF6A00] hover:bg-[#FF8533] text-white font-semibold text-xs transition-colors shadow-md shadow-[#FF6A00]/25 text-center"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio Snippet, Tech Stack, & Experience */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: -45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 0px 0px rgba(255,106,0,0)',
                    '0 0 15px 3px rgba(255,106,0,0.2)',
                    '0 0 26px 5px rgba(255,106,0,0.3)',
                    '0 0 15px 3px rgba(255,106,0,0.2)',
                    '0 0 0px 0px rgba(255,106,0,0)',
                  ],
                }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              />
              <h4 className="text-xl font-bold text-white mb-3 relative z-10">
                Hi, I&apos;m Chibueze Williams Obodo.
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3 relative z-10">
                I&apos;m a developer who genuinely enjoys the process of turning an idea into something people can use. What started as an interest in understanding how software works has grown into a passion for building products, solving problems, and seeing the difference good technology can make.
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3 relative z-10">
                I enjoy working on products that have a clear purpose,building AI-powered products and business tools, whether that&apos;s helping a business run more smoothly, making a complicated process feel simple, or creating an entirely new experience for users.
              </p>
            </motion.div>

            {/* A little outside the code */}
            <motion.div
              initial={{ opacity: 0, y: -45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 0px 0px rgba(255,106,0,0)',
                    '0 0 15px 3px rgba(255,106,0,0.2)',
                    '0 0 26px 5px rgba(255,106,0,0.3)',
                    '0 0 15px 3px rgba(255,106,0,0.2)',
                    '0 0 0px 0px rgba(255,106,0,0)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF6A00] block mb-2 relative z-10">
                A little outside the code
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed relative z-10">
                Outside of work, I&apos;m naturally curious. I enjoy exploring new ideas, cooking, playing football, drawing and traveling and experimenting with technology. That curiosity is a big part of why I enjoy building things in the first place.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: -45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#0B0B0D]/85 backdrop-blur-xl border border-white/[0.07] hover:border-[#FF6A00]/25 transition-all duration-300 shadow-lg shadow-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                aria-hidden="true"
              />
              <span className="text-base font-bold text-white whitespace-nowrap relative z-10">
                My Tech Stack:
              </span>
              <div className="relative z-10 flex flex-col items-start gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {techStack.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-lg bg-white/[0.025] border border-white/[0.07] px-2 py-1.5 hover:bg-white/[0.05] hover:border-[#FF6A00]/30 transition-all"
                    >
                      <TechLogo name={tech} size={20} />
                      <span className="text-xs text-zinc-300">{tech}</span>
                    </div>
                  ))}
                </div>
                <Link href="/skills" className="text-xs font-semibold text-[#FF8B3D] hover:text-white transition-colors">
                  View all skills
                </Link>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: -45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 0px 0px rgba(255,106,0,0)',
                    '0 0 15px 3px rgba(255,106,0,0.2)',
                    '0 0 26px 5px rgba(255,106,0,0.3)',
                    '0 0 15px 3px rgba(255,106,0,0.2)',
                    '0 0 0px 0px rgba(255,106,0,0)',
                  ],
                }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              />
              <div className="flex items-center justify-between mb-4 relative z-10">
                <h4 className="text-lg font-bold text-white">Experience</h4>
                <Link
                  href="/about"
                  className="text-xs font-semibold text-[#FF6A00] hover:underline"
                >
                  View full history
                </Link>
              </div>

              <div className="flex flex-col relative z-10">
                {experiencesList.map((exp, index) => (
                  <div
                    key={exp.role}
                    className={`py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm ${index !== experiencesList.length - 1
                      ? 'border-b border-white/10'
                      : ''
                      }`}
                  >
                    <span className="font-medium text-white">{exp.role}</span>
                    <div className="flex items-center justify-between sm:justify-end gap-5 text-zinc-400">
                      <span className="text-zinc-300 text-xs sm:text-sm">{exp.company}</span>
                      <span className="font-mono text-xs text-zinc-500">{exp.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
