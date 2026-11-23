'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { engineeringStrengths, skillCategories } from '@/data/skills';
import { TechLogo } from '@/components/tech-logo';

export function SkillsContent() {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-8 md:py-20">
      <div className="ambient-glow left-10 top-20 h-96 w-96 bg-[#FF6A00] opacity-[0.08]" />
      <div className="ambient-glow bottom-20 right-10 h-96 w-96 bg-[#315FE8] opacity-[0.06]" />

      <motion.header
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto mb-12 max-w-3xl text-center md:mb-16"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/[0.06] px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[#FF8B3D]">
          <Sparkles className="h-3.5 w-3.5" /> MY TECHNICAL TOOLBOX
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Technologies I Work With.</h1>
        <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
          I work across the full product lifecycle, from designing user experiences and building application architecture to developing AI systems, integrating external services, and deploying reliable software. I choose technologies based on what the product needs, not simply because they&apos;re popular.
        </p>
      </motion.header>

      <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.number}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-2xl border border-white/[0.07] bg-[#0B0B0D]/80 p-5 shadow-[0_8px_28px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-colors duration-200 hover:border-[#FF6A00]/25 hover:bg-[#101012]/90 sm:p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <span className="mb-2 block font-mono text-xs tracking-[0.18em] text-[#FF8B3D]/75">{category.number}</span>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">{category.name}</h2>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 text-zinc-600 transition-colors group-hover:text-[#FF8B3D]" />
            </div>
            <p className="mb-5 min-h-[3rem] text-sm leading-relaxed text-zinc-400">{category.description}</p>
            <ul className="flex flex-wrap gap-2" aria-label={`${category.name} technologies`}>
              {category.technologies.map((tech) => (
                <li key={tech} className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-xs text-zinc-300 transition-colors hover:border-white/[0.12] hover:bg-white/[0.045]">
                  <TechLogo name={tech} size={17} className="shrink-0" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <section className="relative z-10 mt-16 md:mt-20" aria-labelledby="engineering-strengths">
        <div className="mb-7 max-w-2xl">
          <span className="mb-2 block text-xs font-mono uppercase tracking-[0.2em] text-[#FF8B3D]">How I work</span>
          <h2 id="engineering-strengths" className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Beyond the Technologies</h2>
          <p className="text-sm leading-relaxed text-zinc-400">Good engineering connects technical choices to the people and products they serve.</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringStrengths.map((strength, index) => (
            <motion.article
              key={strength.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: (index % 3) * 0.05 }}
              className="rounded-xl border border-white/[0.06] bg-[#0B0B0D]/70 p-5 transition-colors hover:border-[#FF6A00]/20"
            >
              <h3 className="mb-2 text-sm font-semibold text-zinc-100">{strength.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{strength.description}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
