'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '@/data/projects';
import type { Project } from '@/types';
import {
  PROJECT_AI_OPEN_EVENT,
  type ProjectAiMode,
} from '@/lib/project-ai-events';
import { AiPanel } from './ai-panel';

interface ProjectAiOpenDetail {
  projectId: string;
  mode?: ProjectAiMode;
}

export function ProjectAiOverlay() {
  const [project, setProject] = useState<Project | null>(null);
  const [mode, setMode] = useState<ProjectAiMode>('chat');

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const detail = (event as CustomEvent<ProjectAiOpenDetail>).detail;
      const nextProject = projects.find((item) => item.id === detail?.projectId);
      if (!nextProject) return;

      setProject(nextProject);
      setMode(detail.mode ?? 'chat');
    };

    window.addEventListener(PROJECT_AI_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(PROJECT_AI_OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setProject(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-ai-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setProject(null);
          }}
          className="fixed inset-0 h-screen w-screen z-[100] flex flex-col bg-black/98 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} AI project assistant`}
        >
          <div className="absolute inset-0 z-0 bg-black/95 backdrop-blur-2xl" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative z-10 h-full w-full flex flex-col"
          >
            <AiPanel
              project={project}
              onClose={() => setProject(null)}
              initialMode={mode}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
