'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroPortrait() {
  return (
    <div className="relative flex items-center justify-center py-4 my-auto w-full">
      {/* Background Radial Glow */}
      <div className="absolute w-64 h-64 rounded-full bg-[#FF6A00] blur-[95px] opacity-25 pointer-events-none" />

      {/* Animated fire-like glow that circles the entire portrait wrapper on both sides / all around */}
      <motion.div
        className="absolute inset-[-4px] rounded-3xl pointer-events-none z-10"
        animate={{
          boxShadow: [
            '0 0 0px 0px rgba(255,106,0,0), inset 0 0 0px 0px rgba(255,106,0,0)',
            '0 0 25px 6px rgba(255,106,0,0.35), inset 0 0 15px 3px rgba(255,106,0,0.18)',
            '0 0 42px 10px rgba(255,106,0,0.55), inset 0 0 25px 6px rgba(255,106,0,0.28)',
            '0 0 25px 6px rgba(255,106,0,0.35), inset 0 0 15px 3px rgba(255,106,0,0.18)',
            '0 0 0px 0px rgba(255,106,0,0), inset 0 0 0px 0px rgba(255,106,0,0)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Outer wrapper with corner border decorations on BOTH sides */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-[220px] sm:max-w-[240px]"
      >
        {/* Two adjacent corner brackets: Top-Right and Bottom-Right */}
        {/* Top-Right Corner: rotated L shape (30% width, 30% height) */}
        <span className="absolute top-0 left-0 h-[2px] w-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />
        <span className="absolute top-0 left-0 w-[2px] h-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />

        {/* Bottom-Right Corner: rotated L shape (30% width, 30% height) */}
        <span className="absolute bottom-0 right-0 h-[2px] w-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />
        <span className="absolute bottom-0 right-0 w-[2px] h-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />

        {/* Inner Card */}
        <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-[#0c0c10]/80 border border-white/10 shadow-2xl backdrop-blur-xl group">
          {/* Orange photo background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6A00]/80 to-[#E55A00]/60" />

          <Image
            src="/images/profile.jpg"
            alt="Chibueze Williams Obodo | Full-Stack Engineer"
            fill
            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 relative z-10"
            priority
          />
        </div>

        {/* Lower Name Label */}
        <div className="mt-2 text-center flex flex-col items-center">
          <span className="font-serif italic text-xs text-[#FF6A00] -mb-0.5 select-none">
            Williams Obodo
          </span>
          <span className="font-bold text-xs tracking-widest uppercase text-white">
            Chibueze
          </span>
        </div>
      </motion.div>
    </div>
  );
}
