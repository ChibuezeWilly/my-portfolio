'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Github } from '@/components/icons';
import { Project } from '@/types';
import { ProjectAiButton } from './project-ai-button';
import { ProjectDemoLink } from './project-demo-link';

interface FeaturedProjectProps {
  project: Project;
  onAskAi: (project: Project) => void;
  onLearnMore: (project: Project) => void;
}

export function FeaturedProject({
  project,
  onAskAi,
  onLearnMore,
}: FeaturedProjectProps) {
  return (
    <motion.div
      className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/[0.08] hover:border-[#FF6A00]/25 relative overflow-hidden bg-[#0B0B0D]/85 backdrop-blur-xl shadow-lg shadow-black/25 mb-12 transition-all duration-300"
    >
      {/* Background Glow */}
      <div className="ambient-glow -top-32 -right-32 w-96 h-96 bg-[#FF6A00] opacity-[0.07]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Visual Artwork (7 cols) */}
        <div className="lg:col-span-7">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl group">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-600 font-mono">
                Visual Pending
              </div>
            )}

            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono uppercase bg-black/80 backdrop-blur-md text-[#FF6A00] border border-[#FF6A00]/30 font-semibold">
                FEATURED WORK
              </span>
              {project.year && <span className="px-3 py-1 rounded-md text-xs font-mono bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10">{project.year}</span>}
            </div>
          </div>
        </div>

        {/* Right Column: Details & Exploration Actions (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF6A00]">
              {project.category || 'Independent Project'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
            {project.name}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
            {project.longDescription || project.shortDescription}
          </p>

          {/* Key Architecture / Problem Bullet */}
          <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
              <span>{project.problem}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <span className="text-xs font-mono uppercase text-zinc-500 mb-2 block">
              Core Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <ProjectAiButton
              onClick={() => onAskAi(project)}
              className="px-6 py-3.5"
            >
              Ask AI About This Project
            </ProjectAiButton>

            <button
              onClick={() => onLearnMore(project)}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 text-zinc-300 font-medium text-sm hover:text-white hover:bg-white/10 transition-all duration-200 group"
            >
              <span>Explore Architecture</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-200 hover:border-white/25 hover:bg-white/[0.08] hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && <ProjectDemoLink project={project} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-4 py-3 text-sm font-semibold text-[#FF9A5C] hover:border-[#FF6A00] hover:bg-[#FF6A00]/20 hover:text-white transition-colors" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
