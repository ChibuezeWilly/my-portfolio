'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Briefcase, Users, Coffee, Rocket } from 'lucide-react';

const statsData = [
  { value: '2+', label: 'Years of Experience', icon: Smile },
  { value: '2,000+', label: 'Spinbrite Customers', icon: Users },
  { value: '10,000+', label: 'Lumecs Daily Active Users', icon: Users },
  { value: '100+', label: 'Spinbrite Tickets / Day', icon: Briefcase },
  { value: '6,000+', label: 'Hours of Coding', icon: Coffee },
  { value: '2', label: 'Products Launched', icon: Rocket },
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10 w-full">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
            className="relative p-3.5 sm:p-4 rounded-2xl bg-[#121217]/90 border border-white/10 hover:border-[#FF6A00]/40 transition-all duration-200 group flex flex-col justify-between overflow-hidden shadow-lg"
          >
            {/* Orange fire-like animated glow circling the div */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                boxShadow: [
                  'inset 0 0 0px 0px rgba(255,106,0,0)',
                  'inset 0 0 14px 2px rgba(255,106,0,0.22)',
                  'inset 0 0 24px 5px rgba(255,106,0,0.35)',
                  'inset 0 0 14px 2px rgba(255,106,0,0.22)',
                  'inset 0 0 0px 0px rgba(255,106,0,0)',
                ],
              }}
              transition={{ duration: 3.2 + (index % 3) * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Outer fire glow ring */}
            <motion.div
              className="absolute inset-[-1px] rounded-2xl pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 0px 0px rgba(255,106,0,0)',
                  '0 0 12px 2px rgba(255,106,0,0.25)',
                  '0 0 22px 5px rgba(255,106,0,0.38)',
                  '0 0 12px 2px rgba(255,106,0,0.25)',
                  '0 0 0px 0px rgba(255,106,0,0)',
                ],
              }}
              transition={{ duration: 3.2 + (index % 3) * 0.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            />

            <div className="mb-2.5 relative z-10">
              <Icon className="w-5 h-5 text-[#FF6A00]" />
            </div>
            <div className="w-full flex flex-col relative z-10">
              <span className="text-xl sm:text-2xl font-extrabold text-white">
                {stat.value}
              </span>
              <p className="text-[11px] sm:text-xs text-zinc-400 font-medium mt-1 leading-tight">
                {stat.label}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
