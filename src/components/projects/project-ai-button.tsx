'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface ProjectAiButtonProps {
  children: React.ReactNode;
  size?: 'compact' | 'regular';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ProjectAiButton({
  children,
  size = 'regular',
  className = '',
  onClick,
}: ProjectAiButtonProps) {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick?.(event);
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-400/30 bg-white/[0.06] font-semibold text-zinc-100 shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:border-zinc-300/55 hover:bg-white/[0.11] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/60 ${
        size === 'compact' ? 'px-3 py-1.5 text-xs' : 'px-5 py-3 text-sm'
      } ${className}`}
    >
      <Sparkles className="h-4 w-4 text-zinc-300" aria-hidden="true" />
      <span>{children}</span>
    </button>
  );
}
