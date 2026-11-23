import type { Project } from '@/types';

export type ProjectAiMode = 'chat' | 'overview';

export const PROJECT_AI_OPEN_EVENT = 'portfolio:open-project-ai';

export function openProjectAi(project: Project, mode: ProjectAiMode = 'chat') {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent(PROJECT_AI_OPEN_EVENT, {
      detail: { projectId: project.id, mode },
    }),
  );
}
