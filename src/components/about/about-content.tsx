"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Github } from "@/components/icons";
import { TechLogo } from "@/components/tech-logo";
import { HeroIntro } from "@/components/hero/hero-intro";

const techStack = [
  "JavaScript",
  "Python",
  "React",
  "TypeScript",
  "Next",
  "Tailwind",
  "LangGraph",
  "LangChain",
  "Redis",
  "FastAPI",
  "Langfuse",
  "Postgres",
  "Zustand",
];

const experiencesList = [
  {
    role: "Full Stack Software Engineer",
    company: "Spinbrite",
    period: "2025 - Present",
  },
  {
    role: "Full Stack Developer",
    company: "Lumecs",
    period: "2024 - 2025",
  },
  {
    role: "Frontend & UI Engineer",
    company: "Emerald Gold",
    period: "2024 · 1 month",
  },
];

export function AboutContent() {
  return (
    <>
      <div className="w-full pt-4 pb-8 md:py-16 max-w-7xl mx-auto px-6 relative">
        {/* Ambient Glows */}
        <div className="ambient-glow top-20 left-10 w-96 h-96 bg-[#FF6A00]" />
        <div className="ambient-glow bottom-20 right-10 w-96 h-96 bg-[#FF6A00]/15" />

        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
          <span className="text-[14px] font-mono font-semibold uppercase tracking-[0.25em] text-[#FF6A00] block mb-2">
            A LITTLE ABOUT ME
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            More Than Just Writing Code.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            I build intuitive digital products, scalable, high-performing, and
            made through collaboration.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          {/* Left: Profile Card — on mobile: 1 by 1; on sm/md: image & name on a row; on lg: vertical card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 flex flex-col justify-between shadow-2xl overflow-hidden"
          >
            {/* Fire glow around this card */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 0px 0px rgba(255,106,0,0)",
                  "0 0 16px 3px rgba(255,106,0,0.22)",
                  "0 0 28px 6px rgba(255,106,0,0.35)",
                  "0 0 16px 3px rgba(255,106,0,0.22)",
                  "0 0 0px 0px rgba(255,106,0,0)",
                ],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="w-full flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-6 relative z-10">
              {/* Framed Portrait with L & rotated-L corner border decorations on BOTH sides (30% width & height) */}
              <div className="relative flex-shrink-0">
                {/* Fire glow around image */}
                <motion.div
                  className="absolute inset-[-3px] rounded-2xl pointer-events-none z-10"
                  animate={{
                    boxShadow: [
                      "0 0 0px 0px rgba(255,106,0,0)",
                      "0 0 20px 5px rgba(255,106,0,0.4)",
                      "0 0 34px 8px rgba(255,106,0,0.55)",
                      "0 0 20px 5px rgba(255,106,0,0.4)",
                      "0 0 0px 0px rgba(255,106,0,0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Two adjacent corner brackets: Top-Right and Bottom-Right */}
                {/* Top-Right: rotated L shape (30% width, 30% height) */}
                <span className="absolute top-0 left-0 h-[2px] w-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />
                <span className="absolute top-0 left-0 w-[2px] h-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />

                {/* Bottom-Right: rotated L shape (30% width, 30% height) */}
                <span className="absolute bottom-0 right-0 h-[2px] w-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />
                <span className="absolute bottom-0 right-0 w-[2px] h-[30%] bg-[#FF6A00] rounded-full z-20 shadow-[0_0_8px_#FF6A00]" />

                <div className="relative w-44 h-52 sm:w-48 sm:h-56 lg:w-56 lg:h-64 rounded-md overflow-hidden bg-[#0D0D12] shadow-xl group border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FF6A00]/40 to-transparent z-[1]" />
                  <Image
                    src="/images/profile.jpg"
                    alt="Chibueze Williams Obodo"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 relative z-[2]"
                    priority
                  />
                </div>
              </div>

              {/* Name, Status, Bio, Socials — beside image on sm/md, below on mobile & lg */}
              <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center w-full">
                {/* Availability Status Indicator */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for work</span>
                </div>

                <h2 className="text-2xl font-bold uppercase tracking-wider text-white mb-2">
                  Chibueze Williams Obodo
                </h2>

                <p className="text-xs sm:text-sm text-zinc-400 max-w-xs leading-relaxed mb-5">
                  Create seamless experiences across web, mobile, and desktop
                  with one codebase.
                </p>

                {/* Social Icons row */}
                <div className="flex items-center gap-3 mb-6">
                  <a
                    href="https://github.com/ChibuezeWilly"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-[#FF6A00] hover:border-[#FF6A00]/50 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:pricelesswilliams1234@gmail.com"
                    aria-label="Email"
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-[#FF6A00] hover:border-[#FF6A00]/50 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/2290161975355"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-[#FF6A00] hover:border-[#FF6A00]/50 transition-all"
                  >
                    <span className="font-mono text-xs font-bold">WA</span>
                  </a>
                </div>

                {/* Let's Connect button */}
                <Link
                  href="/contact"
                  className="w-28 sm:w-32 py-2.5 rounded-full bg-[#FF6A00] hover:bg-[#FF8533] text-white text-xs font-semibold shadow-lg shadow-[#FF6A00]/25 transition-all text-center"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: 3 Stacked Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Card 1: Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Fire glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 0px 0px rgba(255,106,0,0)",
                    "0 0 15px 3px rgba(255,106,0,0.2)",
                    "0 0 26px 5px rgba(255,106,0,0.3)",
                    "0 0 15px 3px rgba(255,106,0,0.2)",
                    "0 0 0px 0px rgba(255,106,0,0)",
                  ],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 relative z-10">
                Hi, I&apos;m Chibueze Williams Obodo.
              </h3>
              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed relative z-10">
                <p>
                  I'm a Full-Stack Software Engineer who has built and ship
                  products used by 10,000+ active users, launched two products,
                  and worked on software that makes everyday tasks easier for
                  customers and teams. I care about more than getting something
                  to work. I care about making it useful, reliable, and worth
                  coming back to.
                </p>
                <p>
                  What started as
                  an interest in understanding how software works has grown into
                  a passion for building products, solving problems, and seeing
                  the difference good technology can make.
                </p>
                <p>
                  I enjoy working on products that have a clear purpose, whether
                  that&apos;s helping a business run more smoothly, making a
                  complicated process feel simple, or creating an entirely new
                  experience for users.
                </p>
                <p>
                  I really love building AI-powered products and
                  business tools that solves a problem. 
                  I like working across the entire product:
                  thinking through the experience, designing the architecture,
                  building the frontend and backend, connecting services, and
                  making sure everything works together.
                </p>
                <p>
                  I also enjoy taking ownership. I don&apos;t like stopping at
                  the point where something technically works. I want to
                  understand how people use it, where they get stuck, what can
                  be improved, and how to make the product better over time.
                </p>
              </div>
            </motion.div>

            {/* Card: A little outside the code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Fire glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 0px 0px rgba(255,106,0,0)",
                    "0 0 15px 3px rgba(255,106,0,0.2)",
                    "0 0 26px 5px rgba(255,106,0,0.3)",
                    "0 0 15px 3px rgba(255,106,0,0.2)",
                    "0 0 0px 0px rgba(255,106,0,0)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
              <span className="text-[14px] font-mono font-semibold uppercase tracking-wider text-[#FF6A00] block mb-2 relative z-10">
                A little outside the code
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed relative z-10">
                Outside of work, I&apos;m naturally curious. I enjoy exploring
                new ideas, cooking, playing football, drawing and traveling and
                planting. That curiosity is a big part of why I enjoy building
                things in the first place.
              </p>
            </motion.div>

            {/* Card 2: My Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden"
            >
              {/* Fire glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 0px 0px rgba(255,106,0,0)",
                    "0 0 15px 3px rgba(255,106,0,0.2)",
                    "0 0 26px 5px rgba(255,106,0,0.3)",
                    "0 0 15px 3px rgba(255,106,0,0.2)",
                    "0 0 0px 0px rgba(255,106,0,0)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />

              <span className="text-base sm:text-lg font-bold text-white whitespace-nowrap relative z-10">
                My Tech Stack:
              </span>

              <div className="relative z-10 flex flex-col items-start gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {techStack.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-2 py-1.5 hover:border-[#FF6A00]/50 transition-all shadow-sm"
                    >
                      <TechLogo name={tech} size={22} />
                      <span className="text-xs text-zinc-300">{tech}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/skills"
                  className="text-xs font-semibold text-[#FF8B3D] hover:text-white transition-colors"
                >
                  View all skills
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Fire glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 0px 0px rgba(255,106,0,0)",
                    "0 0 15px 3px rgba(255,106,0,0.2)",
                    "0 0 26px 5px rgba(255,106,0,0.3)",
                    "0 0 15px 3px rgba(255,106,0,0.2)",
                    "0 0 0px 0px rgba(255,106,0,0)",
                  ],
                }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />

              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 relative z-10">
                Experience
              </h3>

              <div className="flex flex-col relative z-10">
                {experiencesList.map((exp, index) => (
                  <div
                    key={exp.role}
                    className={`py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm ${
                      index !== experiencesList.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <span className="font-semibold text-white">{exp.role}</span>
                    <div className="flex items-center justify-between sm:justify-end gap-6 text-zinc-400">
                      <span className="text-zinc-300">{exp.company}</span>
                      <span className="font-mono text-xs text-zinc-500">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
