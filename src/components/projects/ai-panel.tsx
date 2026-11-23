'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  Square,
  Copy,
  Check,
  Mail,
  Bot,
  User,
} from 'lucide-react';
import { Project, ChatMessage } from '@/types';

interface AiPanelProps {
  project: Project;
  onClose: () => void;
  initialMode?: 'chat' | 'overview';
}

const defaultSuggestedQuestions = [
  'What problem does this project solve?',
  'Why did you choose this architecture?',
  'What technologies did you use?',
  'What was the most challenging part?',
  'What was your role in building this?',
  'How does the system work?',
];

export function AiPanel({ project, onClose, initialMode = 'chat' }: AiPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const questionInputRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Initialize or reset conversation when project changes
  useEffect(() => {
    // Start fresh conversation for context isolation
    const projectContext = `### ${project.name}\n\n${project.shortDescription}\n\n**Problem:** ${project.problem}\n\n**Solution:** ${project.solution}\n\n**Core stack:** ${project.technologies.join(', ')}`;
    const initialGreeting: ChatMessage = {
      role: 'assistant',
      content:
        initialMode === 'overview'
          ? `${projectContext}\n\n**Architecture:** ${project.architecture}\n\nAsk me anything about the design or implementation.`
          : `${projectContext}\n\nI can walk you through the architecture, tradeoffs, and implementation details. What would you like to explore?`,
    };
    setMessages([initialGreeting]);
    setError(null);
  }, [project.id, initialMode]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input.trim();
    if (!textToSend || isLoading) return;

    setInput('');
    if (questionInputRef.current) questionInputRef.current.style.height = '48px';
    setError(null);

    const userMessage: ChatMessage = { role: 'user', content: textToSend };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    // Setup abort controller for cancellation
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    // Placeholder for streamed assistant message
    const assistantIndex = updatedMessages.length;
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: project.id,
          message: textToSend,
          messages: updatedMessages,
        }),
        signal: abortController.signal,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${response.status}`);
      }

      if (!response.body) {
        throw new Error('Response stream unavailable.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.replace('data: ', '').trim();
            if (dataStr === '[DONE]') break;

            try {
              const parsed = JSON.parse(dataStr);
              if (parsed.text) {
                streamedContent += parsed.text;
                setMessages((prev) => {
                  const copy = [...prev];
                  copy[assistantIndex] = {
                    role: 'assistant',
                    content: streamedContent,
                  };
                  return copy;
                });
              }
            } catch {
              // Ignore non-JSON line
            }
          }
        }
      }
    } catch (err: unknown) {
      if ((err as Error)?.name !== 'AbortError') {
        const errMsg = (err as Error)?.message || 'Failed to stream response.';
        setError(errMsg);
        setMessages((prev) => {
          const copy = [...prev];
          copy[assistantIndex] = {
            role: 'assistant',
            content: `I encountered an issue connecting to the AI inference service: ${errMsg}. You can try again or reach out to Chibueze directly!`,
          };
          return copy;
        });
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleStop = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        role: 'assistant',
        content: `Conversation reset. Exploring **${project.name}**. What would you like to know?`,
      },
    ]);
  };

  const copyToClipboard = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-zinc-950/98 backdrop-blur-2xl">
      {/* Top Header */}
      <div className="w-full border-b border-white/10 bg-white/[0.035]">
        <div className="max-w-5xl mx-auto flex shrink-0 items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] text-zinc-100">
              <Sparkles className="w-5 h-5 text-[#FF6A00]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
                Project Assistant
                <span className="rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-2 py-0.5 font-mono text-[10px] text-[#FF8533]">
                  AI Interactive
                </span>
              </h3>
              <p className="text-xs sm:text-sm font-mono text-zinc-400">
                Exploring: <span className="font-semibold text-white">{project.name}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClear}
              title="Clear conversation"
              aria-label="Clear conversation"
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Close AI panel"
              aria-label="Close AI assistant"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-[#FF6A00] text-zinc-200 hover:text-white transition-all shadow-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-5xl mx-auto space-y-4">
        {messages.map((msg, index) => {
          const isAi = msg.role === 'assistant';
          const containsUnknown =
            isAi &&
            msg.content.includes("I don't have a verified answer to that");

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
            >
              {isAi && (
                <div className="w-7 h-7 rounded-lg bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00] flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed relative group ${
                  isAi
                    ? 'bg-zinc-900/90 text-zinc-200 border border-white/10'
                    : 'bg-[#FF6A00] text-white font-medium shadow-md shadow-[#FF6A00]/20'
                }`}
              >
                {isAi ? (
                  <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-black/60 prose-pre:border prose-pre:border-white/10">
                    <ReactMarkdown>{msg.content || '...'}</ReactMarkdown>
                  </div>
                ) : (
                  <p>{msg.content}</p>
                )}

                {/* Unknown information fallback action */}
                {containsUnknown && (
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-zinc-400">
                      Want to inquire directly?
                    </span>
                    <a
                      href="mailto:pricelesswilliams1234@gmail.com"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FF6A00] text-white text-xs font-semibold hover:bg-[#FF8533] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Message Chibueze</span>
                    </a>
                  </div>
                )}

                {/* Copy button for AI messages */}
                {isAi && msg.content && (
                  <button
                    onClick={() => copyToClipboard(msg.content, index)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded bg-black/60 text-zinc-400 hover:text-white transition-opacity"
                    title="Copy response"
                    aria-label="Copy response"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>

              {!isAi && (
                <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-300 flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3 items-center">
            <div className="w-7 h-7 rounded-lg bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00] flex-shrink-0">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-zinc-900 border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-bounce [animation-delay:0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-bounce [animation-delay:0.3s]" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested Questions Carousel */}
      <div className="shrink-0 border-t border-white/10 bg-black/40 px-4 py-2.5">
        <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto scrollbar-none">
          {defaultSuggestedQuestions.map((q) => (
            <button
              key={q}
              disabled={isLoading}
              onClick={() => handleSend(q)}
              className="flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/10 hover:border-[#FF6A00]/40 hover:text-white hover:bg-[#FF6A00]/10 transition-all disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="shrink-0 border-t border-white/10 bg-zinc-950/95 p-3 sm:p-5">
        <div className="max-w-5xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-3"
          >
            <textarea
              ref={questionInputRef}
              rows={1}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.currentTarget.style.height = '48px';
                e.currentTarget.style.height = `${Math.min(e.currentTarget.scrollHeight, 112)}px`;
              }}
              placeholder={`Ask about ${project.name}'s architecture, stack, challenges...`}
              disabled={isLoading}
              className="min-h-12 max-h-28 min-w-0 w-full max-w-full flex-1 resize-none overflow-y-auto rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] leading-6 text-white placeholder-gray-400 transition-colors focus:border-[#FF6A00] focus:outline-none"
            />

            {isLoading ? (
              <button
                type="button"
                onClick={handleStop}
                className="p-3.5 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-colors flex-shrink-0"
                title="Stop generating"
                aria-label="Stop generation"
              >
                <Square className="w-4 h-4 fill-current" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-3.5 rounded-xl bg-[#FF6A00] text-white hover:bg-[#FF8533] disabled:opacity-40 disabled:hover:bg-[#FF6A00] transition-all shadow-md shadow-[#FF6A00]/25 flex-shrink-0"
                title="Send message"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            )}
          </form>
          <p className="text-xs font-mono text-zinc-400 text-center mt-2.5">
            Responses are grounded exclusively in verified project documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
