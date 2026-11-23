'use client';

import React from 'react';

interface DotGridProps {
  cols?: number;
  rows?: number;
  className?: string;
}

export function DotGrid({ cols = 5, rows = 6, className = '' }: DotGridProps) {
  const dots = Array.from({ length: cols * rows });

  return (
    <div
      aria-hidden="true"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: '9px',
        width: `${cols * 15}px`,
      }}
      className={`select-none pointer-events-none ${className}`}
    >
      {dots.map((_, i) => (
        <span
          key={i}
          className="w-[2.7px] h-[2.7px] rounded-full bg-[#ff6600] opacity-70"
        />
      ))}
    </div>
  );
}
