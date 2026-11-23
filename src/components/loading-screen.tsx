'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has already seen intro this session
    const hasSeen = sessionStorage.getItem('cw_intro_seen');
    if (hasSeen) {
      setShow(false);
      onComplete?.();
      return;
    }

    // Smoothly increment progress to 100% over ~5 seconds (5000ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 48); // ~100 steps * 48ms = ~4800ms

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('cw_intro_seen', 'true');
      onComplete?.();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Lock body scroll while intro animation is displaying
  useEffect(() => {
    if (show) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [show]);

  const nameLetters = 'CHIBUEZE WILLIAMS OBODO'.split('');

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] text-white overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.25, 1], opacity: [0, 0.4, 0.25] }}
            transition={{ duration: 4.5, ease: 'easeInOut' }}
            className="absolute w-[540px] h-[540px] rounded-full bg-[#FF6A00] blur-[130px] pointer-events-none"
          />

          {/* Dotted Grid Background */}
          <div className="absolute inset-0 opacity-15 dot-matrix pointer-events-none" />

          {/* Monogram / Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.3em] text-[#FF6A00]"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
            Full-Stack Software Engineer
          </motion.div>

          {/* Animated Name Reveal */}
          <div className="relative flex flex-wrap justify-center px-4 overflow-hidden mb-6">
            {nameLetters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: 0.5 + index * 0.06,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider ${
                  char === ' ' ? 'w-3 sm:w-6' : 'text-[#F5F5F5]'
                }`}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Progress Bar & Percentage */}
          <div className="w-64 max-w-[80vw] flex flex-col items-center gap-3">
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF6A00] to-[#FFA04D]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="w-full flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-ping" />
                Loading experience
              </span>
              <span className="text-[#FF6A00] font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
