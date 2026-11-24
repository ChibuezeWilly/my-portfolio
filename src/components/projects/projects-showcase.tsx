'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import { FeaturedProject } from './featured-project';
import { ProjectCard } from './project-card';
import { openProjectAi, type ProjectAiMode } from '@/lib/project-ai-events';

interface ProjectsShowcaseProps {
  initialProject?: Project;
}

export function ProjectsShowcase({ initialProject = projects[0] }: ProjectsShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<Project>(initialProject);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleOpenAi = (project: Project, mode: ProjectAiMode) => {
    setSelectedProject(project);
    openProjectAi(project, mode);
  };

  const filteredProjects =
    filterCategory === 'all'
      ? projects.filter((project) => project.id !== selectedProject.id)
      : projects.filter(
          (project) =>
            project.id !== selectedProject.id &&
            project.category?.toLowerCase() === filterCategory.toLowerCase(),
        );

  return (
    <div className="w-full pt-4 pb-12 md:py-20 max-w-7xl mx-auto px-6 relative">
      {/* Background Lighting Glows */}
      <div className="ambient-glow top-20 left-10 w-96 h-96 bg-[#FF6A00] opacity-[0.07]" />
      <div className="ambient-glow bottom-20 right-10 w-96 h-96 bg-[#315FE8] opacity-[0.06]" />

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 text-xs font-mono uppercase tracking-[0.2em] text-[#FF6A00] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
          Portfolio Showcase
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Selected Work
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          Products and experiments shaped around a specific problem. Open a case study for the workflow, available evidence, and direct source and demo links.
        </p>
      </div>

      {/* Project showcase */}
      <div className="relative z-10">
        {/* Desktop project showcase */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 space-y-12">
            {/* Featured Project Banner */}
            <FeaturedProject
              project={selectedProject}
              onAskAi={(p) => handleOpenAi(p, 'chat')}
              onLearnMore={(p) => handleOpenAi(p, 'overview')}
            />

            {/* Other Projects Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Explore Other Projects
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    Click any card to feature it and explore its architecture.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isFeatured={project.id === selectedProject.id}
                    onSelect={handleSelectProject}
                    onAskAi={(p) => handleOpenAi(p, 'chat')}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* MOBILE & TABLET LAYOUT */}
        <div className="lg:hidden space-y-8">
          <FeaturedProject
            project={selectedProject}
            onAskAi={(p) => handleOpenAi(p, 'chat')}
            onLearnMore={(p) => handleOpenAi(p, 'overview')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured={project.id === selectedProject.id}
                onSelect={handleSelectProject}
                onAskAi={(p) => handleOpenAi(p, 'chat')}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
