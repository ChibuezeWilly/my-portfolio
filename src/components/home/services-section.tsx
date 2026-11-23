'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2, Server, Bot } from 'lucide-react';

const serviceCards = [
  {
    number: '01',
    title: 'Product Design & User Experience',
    description: 'Good software should feel natural to use. I think through how people will interact with a product, then create clean, intuitive interfaces that make complicated things feel simple.',
    icon: Palette,
  },
  {
    number: '02',
    title: 'Full-Stack Development',
    description: 'From the interface users see to the systems working behind it, I build complete applications with maintainable code, thoughtful architecture, and performance in mind.',
    icon: Code2,
  },
  {
    number: '03',
    title: 'Backend, APIs & Integrations',
    description: 'I build the systems that make products work: APIs, databases, background jobs, payment integrations, webhooks, and the connections between different services.',
    icon: Server,
  },
  {
    number: '04',
    title: 'AI Systems & Automation',
    description: 'I build AI-powered features and workflows that do more than generate responses. From intelligent agents and knowledge retrieval to workflow automation and evaluation, I focus on making AI useful, dependable, and safe to operate.',
    icon: Bot,
  },
];

export function ServicesSection() {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-white/5 bg-[#080808] overflow-hidden">
      {/* Subtle Glow */}
      <div className="ambient-glow top-1/3 left-10 w-96 h-96 bg-[#FF6A00]/10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Title Column matching Image 3 */}
          <div className="lg:col-span-4 sticky top-28">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#FF6A00] block mb-2">
              WHAT I BRING TO THE TABLE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              How Can I <br /> Help You Build?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-sm">
              I work with founders, teams, and businesses to turn ideas into working products. Whether you need help shaping an idea, building a new application, connecting complex systems, or bringing an AI-powered product to life, I can help take it from concept to deployment.
            </p>
          </div>

          {/* Right 4 Cards matching Image 3 */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {serviceCards.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: -45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative p-6 sm:p-7 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 group flex flex-col items-start shadow-lg overflow-hidden"
                >
                  {/* Fire glow animation */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    animate={{
                      boxShadow: [
                        '0 0 0px 0px rgba(255,106,0,0)',
                        '0 0 14px 2px rgba(255,106,0,0.18)',
                        '0 0 24px 5px rgba(255,106,0,0.28)',
                        '0 0 14px 2px rgba(255,106,0,0.18)',
                        '0 0 0px 0px rgba(255,106,0,0)',
                      ],
                    }}
                    transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {/* Top Icon & Number */}
                  <div className="flex w-full items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6A00] shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xl font-bold text-zinc-600 group-hover:text-[#FF6A00] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#FF6A00] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
