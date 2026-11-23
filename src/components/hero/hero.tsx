'use client';

import React from 'react';
import { HeroIntro } from './hero-intro';
import { HeroPortrait } from './hero-portrait';
import { HeroStats } from './hero-stats';
import { DotGrid } from '@/components/ui/dot-grid';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-4 pb-16 md:pb-24">
      {/* Ambient Lighting Glows */}
      <div className="ambient-glow top-1/4 left-10 w-96 h-96 bg-[#FF6A00]" />
      <div className="ambient-glow bottom-10 right-20 w-80 h-80 bg-[#FF6A00]/20" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Top-Left Dot Grid + ABOUT ME side by side, aligned at the bottom */}
        <div className="mb-6 flex flex-row items-end gap-4 sm:gap-6">
          <DotGrid cols={5} rows={5} />
          <div className="flex items-center gap-3 pb-0.5">
            <span className="text-xs font-mono uppercase text-[#FF6A00] font-bold tracking-wider">
              ABOUT ME
            </span>
            <div className="w-12 h-0.5 bg-[#FF6A00] rounded-full" />
          </div>
        </div>

        {/* Responsive Grid:
            - Mobile: 1 by 1 (Intro -> Image -> Stats)
            - SM & MD: Intro & Image side by side, Stats under them
            - LG: 3 columns (Intro 5 cols, Image center 3 cols, Stats 4 cols)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Intro */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-5 order-1">
            <HeroIntro />
          </div>

          {/* Center: Image between the 2 divs */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 order-2 flex justify-center items-center">
            <HeroPortrait />
          </div>

          {/* Right: Stats under intro & image on sm/md, on right side on lg */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 order-3 flex flex-col justify-between h-full gap-4">
            <HeroStats />

            {/* Bottom-Right Dot Grid */}
            <div className="flex justify-end mt-2">
              <DotGrid cols={5} rows={5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
