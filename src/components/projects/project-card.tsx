'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Github } from '@/components/icons';
import { Project } from '@/types';
import { ProjectAiButton } from './project-ai-button';

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
  onSelect: (project: Project) => void;
  onAskAi: (project: Project) => void;
  onLearnMore: (project: Project) => void;
}

export function ProjectCard({
  project,
  isFeatured = false,
  onSelect,
  onAskAi,
  onLearnMore,
}: ProjectCardProps) {
  return (
    <motion.div
      onClick={() => onSelect(project)}
      className={`p-5 sm:p-6 rounded-3xl flex flex-col justify-between border border-white/[0.07] hover:border-[#FF6A00]/25 bg-[#0B0B0D]/85 backdrop-blur-xl cursor-pointer group relative overflow-hidden transition-colors duration-200 shadow-lg shadow-black/20 ${
        isFeatured ? 'ring-1 ring-[#FF6A00]/30' : ''
      }`}
    >
      <div>
        {/* Project Image */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10 mb-4 group-hover:border-white/20 transition-colors">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-600 font-mono text-sm">
              Visual Preview Pending
            </div>
          )}

          {/* Category & Year Tag */}
          <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10">
              {project.category || 'Independent'}
            </span>
            {project.year && (
              <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-[#FF6A00]/20 text-[#FF6A00] border border-[#FF6A00]/30">
                {project.year}
              </span>
            )}
          </div>
        </div>

        {/* Title and Short Description */}
        <h3 className="text-xl font-bold text-white group-hover:text-[#FF6A00] transition-colors mb-2">
          {project.name}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="min-w-0 pt-4 border-t border-white/10 flex flex-col gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLearnMore(project);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-zinc-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <ProjectAiButton
            onClick={() => onAskAi(project)}
            size="compact"
            className="rounded-lg"
          >
            <span>Explore with AI</span>
          </ProjectAiButton>
        </div>

        {/* External links */}
        <div className="flex min-w-0 flex-wrap items-center gap-2 text-zinc-300">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium hover:border-white/25 hover:bg-white/[0.08] hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-3 py-2 text-xs font-semibold text-[#FF9A5C] hover:border-[#FF6A00] hover:bg-[#FF6A00]/20 hover:text-white transition-colors"
              aria-label="Live Demo Preview"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {project.backendUrl && (
            <a
              href={project.backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex min-h-9 items-center rounded-lg border border-emerald-400/25 bg-emerald-400/[0.06] px-3 py-2 text-xs font-medium text-emerald-200 hover:border-emerald-300/50 hover:bg-emerald-400/10 transition-colors"
              aria-label={`${project.name} ${project.backendUrl.includes('github.com') ? 'backend repository' : 'backend server'}`}
            >
              {project.backendUrl.includes('github.com') ? 'Backend Repo' : 'Start Backend Server'}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
