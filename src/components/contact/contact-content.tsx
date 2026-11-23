'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { Github } from '@/components/icons';
import { socialLinks } from '@/data/navigation';

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit message.');
      }

      setStatus('success');
      setStatusMessage(data.message || 'Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setStatusMessage((err as Error)?.message || 'Something went wrong. Please email directly.');
    }
  };

  return (
    <div className="w-full pt-4 pb-12 md:py-20 max-w-7xl mx-auto px-6 relative">
      {/* Background Ambient Glows */}
      <div className="ambient-glow top-20 right-10 w-96 h-96 bg-[#FF6A00] opacity-20" />
      <div className="ambient-glow bottom-20 left-10 w-96 h-96 bg-[#315FE8] opacity-15" />

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 text-xs font-mono uppercase tracking-[0.2em] text-[#FF6A00] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
          Get In Touch
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Let&apos;s Build Something Amazing Together
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          Have a project, an idea, or an opportunity? I&apos;d love to hear from you. Let&apos;s create something impactful together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        {/* Left Column: Direct Contact Details & Info (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 shadow-xl space-y-8"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Feel free to reach out via the form, or email directly. I respond promptly to inquiries and collaborative proposals.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:mailtopricelesswilliams@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FF6A00]/40 hover:bg-[#FF6A00]/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/15 flex items-center justify-center text-[#FF6A00] group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono uppercase text-zinc-500">Email Address</p>
                <p className="text-sm font-semibold text-white truncate group-hover:text-[#FF6A00] transition-colors">
                  mailtopricelesswilliams@gmail.com
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://github.com/ChibuezeWilly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FF6A00]/40 hover:bg-[#FF6A00]/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono uppercase text-zinc-500">GitHub Profile</p>
                <p className="text-sm font-semibold text-white truncate group-hover:text-[#FF6A00] transition-colors">
                  github.com/ChibuezeWilly
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="p-5 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/20">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF6A00] font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Current Availability
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Available for full-time engineering roles, high-impact contract projects, and technical advisory.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#080808]/90 backdrop-blur-xl border border-[#FF6A00]/30 hover:border-[#FF6A00]/60 transition-all duration-300 shadow-xl relative overflow-hidden"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Send a Direct Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  Your Name <span className="text-[#FF6A00]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF6A00] transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  Your Email <span className="text-[#FF6A00]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF6A00] transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                Subject / Project Description
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Full-Stack Role / Project Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF6A00] transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                Message <span className="text-[#FF6A00]">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, goals, or timeline..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF6A00] transition-colors text-sm resize-none"
              />
            </div>

            {/* Status Feedback */}
            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start justify-between gap-3 text-emerald-400 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FF6A00] text-white font-semibold text-sm hover:bg-[#FF8533] disabled:opacity-50 transition-all shadow-lg shadow-[#FF6A00]/25"
            >
              {status === 'loading' ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
