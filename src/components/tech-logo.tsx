'use client';

import React from 'react';
import Image from 'next/image';

interface TechLogoProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechLogo({ name, size = 32, className = '' }: TechLogoProps) {
  const s = size;
  const key = name.toLowerCase();
  const imageFiles: Record<string, string> = {
    fastapi: 'fastapi.webp',
    langchain: 'langchain.png',
    langfuse: 'langfuse.svg',
    langgraph: 'langgraph.png',
    postgres: 'postgresql.webp',
    postgresql: 'postgresql.webp',
    redis: 'redis.png',
    zustand: 'zustand.jpg',
  };

  if (imageFiles[key]) {
    return (
      <Image
        src={`/images/skills/${imageFiles[key]}`}
        alt={`${name} logo`}
        width={s}
        height={s}
        className={`object-contain ${className}`}
      />
    );
  }

  const compactMarks: Record<string, { mark: string; color: string; background: string }> = {
    fastapi: { mark: 'FA', color: '#009688', background: '#E6FFFA' },
    postgresql: { mark: 'Pg', color: '#336791', background: '#EAF2F8' },
    docker: { mark: 'D', color: '#2496ED', background: '#E8F5FF' },
    langgraph: { mark: 'LG', color: '#111827', background: '#E5E7EB' },
    langchain: { mark: 'LC', color: '#1C3C3C', background: '#E5F3EE' },
    langfuse: { mark: 'LF', color: '#6B4EFF', background: '#F0EDFF' },
    zustand: { mark: 'Z', color: '#7C3AED', background: '#F3E8FF' },
    'html5': { mark: '5', color: '#E34F26', background: '#FFF0EB' },
    'css3': { mark: '3', color: '#1572B6', background: '#EAF5FF' },
    redis: { mark: 'R', color: '#D82C20', background: '#FFF0EF' },
    postgres: { mark: 'Pg', color: '#336791', background: '#EAF2F8' },
    neo4j: { mark: 'N', color: '#008CC1', background: '#E8F8FF' },
    stripe: { mark: 'S', color: '#635BFF', background: '#F0EFFF' },
    paypal: { mark: 'P', color: '#003087', background: '#EAF0FC' },
    shopify: { mark: 'S', color: '#7AB55C', background: '#F1F8EC' },
    'tailwind css': { mark: 'TW', color: '#06B6D4', background: '#E8FBFF' },
    'node.js': { mark: 'N', color: '#339933', background: '#ECF8EC' },
    node: { mark: 'N', color: '#339933', background: '#ECF8EC' },
  };

  switch (name.toLowerCase()) {
    case 'javascript':
    case 'js':
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#F7DF1E" />
          <path
            d="M8.5 24.5V14h3.2v7.5c0 2-1 3-3.2 3zm9.3 0c-2.3 0-3.6-1.1-4.1-2.2l2.6-1.5c.3.6.8 1.1 1.6 1.1.9 0 1.5-.4 1.5-1.2 0-.9-.7-1.2-2-1.7-2-.8-3.3-1.6-3.3-3.6 0-1.9 1.5-3.3 3.7-3.3 1.6 0 2.8.6 3.5 1.8l-2.4 1.6c-.3-.5-.7-.8-1.2-.8-.6 0-1 .4-1 1 0 .6.4.9 1.6 1.4 2.2.9 3.7 1.7 3.7 3.8 0 2.2-1.7 3.7-4.2 3.7z"
            fill="#000000"
          />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#3178C6" />
          <path
            d="M7 13h9v2.5h-3.2v9H9.8v-9H7V13zm11 11.5c-2.1 0-3.4-1.1-3.8-2.2l2.3-1.4c.3.6.8 1.1 1.6 1.1.8 0 1.4-.4 1.4-1.1 0-.8-.6-1.1-1.8-1.6-1.9-.8-3.1-1.5-3.1-3.4 0-1.8 1.4-3.2 3.5-3.2 1.5 0 2.6.6 3.3 1.7l-2.2 1.5c-.3-.5-.6-.7-1.1-.7-.5 0-.9.3-.9.8 0 .6.4.9 1.5 1.3 2 .8 3.5 1.6 3.5 3.6 0 2-1.6 3.6-4.1 3.6z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'node.js':
    case 'node':
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#18181B" />
          <path
            d="M16 6.5l8.5 4.9v9.8L16 26.1l-8.5-4.9v-9.8L16 6.5z"
            fill="#5FA04E"
          />
          <path
            d="M16 11.2l5.5 3.2v6.4L16 24l-5.5-3.2v-6.4l5.5-3.2z"
            fill="#339933"
          />
        </svg>
      );

    case 'python':
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#1F2937" />
          <path
            d="M15.8 7c-4.2 0-3.9 1.8-3.9 1.8l.04 1.9h4v.6h-5.6C8.2 11.3 7 12.6 7 15.4c0 2.7 1 3.9 3.1 3.9h1.1v-1.6c0-1.7 1.4-3.1 3.1-3.1h4.8c1.3 0 2.4-1.1 2.4-2.4V9.4C21.5 8 19.8 7 15.8 7zm-1.2 1.2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z"
            fill="#3776AB"
          />
          <path
            d="M16.2 25c4.2 0 3.9-1.8 3.9-1.8l-.04-1.9h-4v-.6h5.6c2.1 0 3.3-1.3 3.3-4.1 0-2.7-1-3.9-3.1-3.9h-1.1v1.6c0 1.7-1.4 3.1-3.1 3.1h-4.8c-1.3 0-2.4 1.1-2.4 2.4v2.8c0 1.4 1.7 2.4 5.7 2.4zm1.2-1.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"
            fill="#FFD43B"
          />
        </svg>
      );

    case 'react':
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#0E1726" />
          <ellipse cx="16" cy="16" rx="3" ry="3" fill="#61DAFB" />
          <ellipse
            cx="16"
            cy="16"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.2"
            fill="none"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.2"
            fill="none"
            transform="rotate(60 16 16)"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.2"
            fill="none"
            transform="rotate(120 16 16)"
          />
        </svg>
      );

    case 'next.js':
    case 'nextjs':
    case 'next':
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#000000" stroke="#333333" strokeWidth="1" />
          <path
            d="M11 11h2.5l7.5 10V11h2.5v10h-2.5l-7.5-10V21H11V11z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'tailwind css':
    case 'tailwind':
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#0B132B" />
          <path
            d="M13.5 12.5c1-1.5 2.5-2.2 4.5-2 2.8.3 4 2 4.5 4 .5-1.5 1.5-2.5 3-2.5 2 0 3 1.5 3 4-.5 2.5-2 4-4.5 4.5-2.8.5-4-1-4.5-3-.5 1.5-1.5 2.5-3 2.5-2 0-3-1.5-3-4 .5-2 1.5-3.5 2.5-4z"
            fill="#06B6D4"
          />
        </svg>
      );

    default: {
      const brand = compactMarks[key];
      return (
        <div
          className={`rounded-md border border-black/[0.04] flex items-center justify-center font-mono font-bold ${brand ? '' : 'bg-zinc-800 text-[#FF6A00]'} ${className}`}
          style={brand ? { width: s, height: s, color: brand.color, backgroundColor: brand.background, fontSize: Math.max(8, s * 0.39) } : { width: s, height: s }}
        >
          {brand?.mark ?? name.slice(0, 2).toUpperCase()}
        </div>
      );
    }
  }
}
