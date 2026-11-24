'use client';

import { useRef, useState } from 'react';
import { ArrowUpRight, LoaderCircle, RotateCw } from 'lucide-react';
import type { Project } from '@/types';

const STARTUP_MESSAGE = 'Waking up the application. This may take a little while because the demo runs on free-tier infrastructure.';
const POLL_INTERVAL_MS = 5_000;
const STARTUP_TIMEOUT_MS = 120_000;

export function ProjectDemoLink({ project, className }: { project: Project; className: string }) {
  const [state, setState] = useState<'idle' | 'waking' | 'failed'>('idle');
  const inFlight = useRef(false);

  if (!project.liveUrl) return null;

  if (!project.backendUrl) {
    return (
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={className}>
        Open live demo <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }

  const wakeAndOpen = async () => {
    if (inFlight.current) return;
    inFlight.current = true;
    setState('waking');
    const deadline = Date.now() + STARTUP_TIMEOUT_MS;

    try {
      while (Date.now() < deadline) {
        try {
          const response = await fetch(`/api/projects/${project.slug}/wake`, { cache: 'no-store' });
          const result = (await response.json()) as { ready?: boolean };
          if (response.ok && result.ready) {
            window.location.assign(project.liveUrl!);
            return;
          }
        } catch {
          // A temporary network failure should not stop the remaining wake-up checks.
        }

        await new Promise((resolve) => window.setTimeout(resolve, POLL_INTERVAL_MS));
      }

      setState('failed');
    } finally {
      inFlight.current = false;
    }
  };

  return (
    <div className="min-w-0">
      <button type="button" onClick={wakeAndOpen} disabled={state === 'waking'} className={`${className} disabled:cursor-wait disabled:opacity-75`}>
        {state === 'waking' ? <LoaderCircle className="h-4 w-4 animate-spin" /> : state === 'failed' ? <RotateCw className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
        {state === 'waking' ? 'Waking up…' : state === 'failed' ? 'Retry wake-up' : 'View demo'}
      </button>
      {state !== 'idle' && (
        <p aria-live="polite" className="mt-2 max-w-sm text-xs leading-relaxed text-zinc-400">
          {state === 'waking' ? STARTUP_MESSAGE : 'The service may still be starting. Check your connection and try again.'}
        </p>
      )}
    </div>
  );
}
