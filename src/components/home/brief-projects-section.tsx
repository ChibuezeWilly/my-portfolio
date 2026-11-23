'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectAiButton } from '@/components/projects/project-ai-button';
import { openProjectAi } from '@/lib/project-ai-events';

export function BriefProjectsSection() {
  const operonProject = projects.find((p) => p.id === 'operon') || projects[0];
  const otherProjects = projects.filter((p) => p.id !== 'operon').slice(0, 2);

  return (
    <section className="relative w-full border-t border-white/5 bg-[#080808] overflow-hidden">
      {/* Subtle Glow */}
      <div className="ambient-glow top-1/2 right-1/4 w-96 h-96 bg-[#FF6A00]/10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 gap-x-8 items-start">
          {/* Left Column: ~20% */}
          <div className="lg:col-span-3 flex flex-col justify-start sticky top-28 mb-10">
            <span className="text-sm font-mono font-semibold uppercase tracking-[0.25em] text-[#FF6A00] block">
              THINGS I&apos;VE BUILT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Ideas Turned Into <br />
              Working Products.
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              I enjoy building products that solve real problems. Here are some of the projects I&apos;ve worked on, from AI-powered platforms to tools that make complex workflows easier.
            </p>

            <Link
              href="/projects"
              className="bg-white/10 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full hover:bg-[#FF6A00] text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 w-fit shadow-lg"
            >
              <span>All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: ~80% */}
          <div className="lg:col-span-9 flex flex-col mt-10 gap-8 ">
            {/* Project 1: OPERON — falling into page animation */}
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-5 sm:p-7 rounded-3xl bg-[#0B0B0D]/85 backdrop-blur-xl border border-white/[0.07] hover:border-[#FF6A00]/25 transition-colors duration-300 group flex flex-col justify-between shadow-lg shadow-black/20 overflow-hidden"
            >
              {/* Fire glow animating around the card border */}
              <Link href={`/projects/${operonProject.slug}`} className="block relative z-10">
                {/* Large image covering the div */}
                <div className="relative w-full h-64 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden bg-[#0D0D14] mb-6 border border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
                  <Image
                    src={operonProject.image || '/images/operon.svg'}
                    alt={operonProject.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Info row */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#FF6A00] transition-colors">
                          Operon
                        </h3>
                        <span className="text-xs font-mono text-[#FF6A00] font-semibold">
                          — AI Agent Creation &amp; Operations Platform
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
                        {operonProject.longDescription}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end flex-shrink-0">
                      <span className="font-mono text-xs font-semibold text-[#FF6A00] bg-[#FF6A00]/10 border border-[#FF6A00]/30 px-3 py-1 rounded-full whitespace-nowrap">
                        October 2026
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {operonProject.technologies.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md text-[11px] font-mono uppercase bg-white/5 border border-white/10 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </Link>

              <div className="relative z-10 mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-3 text-xs">
                  {operonProject.githubUrl && <a href={operonProject.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-medium text-zinc-200 hover:border-white/25 hover:bg-white/[0.08]">GitHub ↗</a>}
                  {operonProject.liveUrl && <a href={operonProject.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-3 py-2 font-semibold text-[#FF9A5C] hover:border-[#FF6A00] hover:bg-[#FF6A00]/20">Live Demo ↗</a>}
                  {operonProject.backendUrl && <a href={operonProject.backendUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-emerald-400/25 bg-emerald-400/[0.06] px-3 py-2 font-medium text-emerald-200 hover:border-emerald-300/50 hover:bg-emerald-400/10">Start Backend Server ↗</a>}
                </div>
                <ProjectAiButton
                  onClick={() => openProjectAi(operonProject, 'overview')}
                  size="compact"
                  className="rounded-lg"
                >
                  Explore with AI
                </ProjectAiButton>
              </div>
            </motion.div>

            {/* Remaining 40%: 2 other projects with their own names in AI CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative p-5 sm:p-6 rounded-3xl bg-[#0B0B0D]/85 backdrop-blur-xl border border-white/[0.07] hover:border-[#FF6A00]/25 transition-colors duration-300 group flex flex-col justify-between shadow-lg shadow-black/20 overflow-hidden"
                >
                  {/* Fire glow on card border */}
                  <Link href={`/projects/${project.slug}`} className="flex flex-col justify-between h-full relative z-10">
                    <div>
                      {/* Image */}
                      <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-[#0D0D14] mb-5 border border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
                        <Image
                          src={project.image || '/images/novora.svg'}
                          alt={project.name}
                          fill
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      </div>

                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#FF6A00] transition-colors">
                          {project.name}
                        </h4>
                        <span className="font-mono text-xs text-zinc-400 whitespace-nowrap">
                          October 2026
                        </span>
                      </div>

                      <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>
                  </Link>

                  <div className="relative z-10 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 text-[10px]">
                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-medium text-zinc-200 hover:border-white/25 hover:bg-white/[0.08]">GitHub ↗</a>}
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-2.5 py-1.5 font-semibold text-[#FF9A5C] hover:border-[#FF6A00] hover:bg-[#FF6A00]/20">Live Demo ↗</a>}
                        {project.backendUrl && <a href={project.backendUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-emerald-400/25 bg-emerald-400/[0.06] px-2.5 py-1.5 font-medium text-emerald-200 hover:border-emerald-300/50 hover:bg-emerald-400/10">{project.backendUrl.includes('github.com') ? 'Backend Repo' : 'Start Backend Server'} ↗</a>}
                      </div>

                      {/* Project AI assistant */}
                      <ProjectAiButton
                        onClick={() => openProjectAi(project, 'overview')}
                        size="compact"
                        className="rounded-lg"
                      >
                        Explore with AI
                      </ProjectAiButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
