'use client';

import React from 'react';
import { motion } from 'framer-motion';

const processCards = [
  {
    number: '01',
    title: 'Understand the Problem',
    description: "Before thinking about technology, I want to understand what we're trying to solve. Who is experiencing the problem? What makes the current process difficult? What should the experience look like when we get it right? I ask questions, understand the goals, and identify what actually matters.",
  },
  {
    number: '02',
    title: 'Think, Plan & Architect',
    description: 'Once the problem is clear, I work out the best way to approach it. I map the user experience, define the core features, choose the right technologies, and plan how the different parts of the system will work together. The goal is to build with purpose, not add complexity for its own sake.',
  },
  {
    number: '03',
    title: 'Build, Test & Ship',
    description: 'This is where ideas become real. I design and develop the product, connect the systems, test important workflows, and work through the details that make the experience reliable. I believe in shipping working software, getting it in front of people, and learning from how it is actually used.',
  },
  {
    number: '04',
    title: 'Measure, Improve & Maintain',
    description: 'Launching is not the finish line. I pay attention to how the product performs, what users struggle with, and where things can be better. I fix issues, improve existing features, and make sure the product continues to serve its purpose as it grows.',
  },
];

export function ProcessSection() {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-white/5 bg-[#080808] overflow-hidden">
      {/* Subtle Glow */}
      <div className="ambient-glow bottom-10 right-1/4 w-96 h-96 bg-[#FF6A00]/15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#FF6A00] block mb-2">
            MY APPROACH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            From a Problem to a Product.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            I believe good products come from understanding the problem before rushing to write code. Every project deserves a clear direction, thoughtful engineering, and attention beyond the initial launch.
          </p>
        </div>

        {/* 4 Process Cards with Orange theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {processCards.map((card, index) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 flex flex-col justify-between min-h-[260px] group shadow-xl overflow-hidden"
            >
              {/* Fire glow animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 0px 0px rgba(255,106,0,0)',
                    '0 0 16px 3px rgba(255,106,0,0.22)',
                    '0 0 28px 6px rgba(255,106,0,0.35)',
                    '0 0 16px 3px rgba(255,106,0,0.22)',
                    '0 0 0px 0px rgba(255,106,0,0)',
                  ],
                }}
                transition={{ duration: 4.2 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Oversized Number in Vibrant Orange (#FF6A00) matching Line 36 */}
              <span className="font-mono text-6xl sm:text-7xl font-extrabold text-[#FF6A00] tracking-tighter opacity-90 block mb-6">
                {card.number}
              </span>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6A00] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Orange Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <span className="text-base sm:text-lg font-semibold text-white text-center sm:text-left">
            Build reliable, user-focused products with expert code.
          </span>

          <a
            href="mailto:mailtopricelesswilliams@gmail.com"
            className="px-8 py-3 rounded-full bg-[#FF6A00] hover:bg-[#FF8533] text-white font-semibold text-sm transition-colors shadow-lg shadow-[#FF6A00]/25 flex-shrink-0"
          >
            Book a call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
