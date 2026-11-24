import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';
import { ProjectDemoLink } from './project-demo-link';

const projectNarratives: Record<string, { title: string; problem: string; approach: string; workflow: string[] }> = {
  operon: {
    title: 'AI Agent Creation & Operations Platform',
    problem: 'Building an agent is only one part of the work. Teams also need a way to configure it, connect the context and tools it needs, test its behavior, and understand what happened during a run.',
    approach: 'Operon brings agent setup and operations into one workspace. The project description covers the agent lifecycle; detailed claims about approvals, integrations, and execution controls should be checked against the source before being presented as implemented.',
    workflow: ['Configure an agent', 'Connect tools and knowledge', 'Test its behavior', 'Review execution'],
  },
  novora: {
    title: 'Voice Agent Evaluation Platform',
    problem: 'Voice agent failures can be hard to reproduce by listening to isolated conversations. Teams need repeatable scenarios and evidence they can inspect when an agent misses the expected behavior.',
    approach: 'Novora is for evaluating voice agents, not for joining or summarizing meetings. The public project description supports conversational workflow testing and performance evaluation. More specific claims about providers, deterministic assertions, LLM judges, and regression workflows need source-level confirmation.',
    workflow: ['Define a test scenario', 'Run a simulated conversation', 'Inspect the run and transcript', 'Compare behavior against expectations'],
  },
  tallyflow: {
    title: 'AI-Powered Financial Close & Reconciliation Platform',
    problem: 'Reconciling financial records means finding which entries correspond and investigating the differences that remain. A proposed match needs clear evidence and validation before someone relies on it.',
    approach: 'TallyFlow pairs deterministic matching and validation with AI-assisted discrepancy investigation and human review. The available portfolio source does not confirm specific bank, Stripe, or payment gateway integrations, nor measured time savings, so those claims are omitted.',
    workflow: ['Bring records together', 'Match and validate deterministically', 'Investigate exceptions with AI assistance', 'Review before resolving'],
  },
  churndesk: {
    title: 'AI-Powered Incident Response & Customer Support Platform',
    problem: 'A support ticket may need investigation across product context and relevant records before a useful resolution can be proposed. Sending a generated reply alone does not resolve the underlying issue.',
    approach: 'ChurnDesk is framed around moving a ticket through investigation and human review, with escalation when the issue needs a person. Detailed retrieval sources and resolution integrations should be confirmed against the project repositories.',
    workflow: ['Ticket', 'Classification', 'Retrieval', 'Investigation', 'Proposed resolution', 'Human review', 'Escalation'],
  },
};

export function ProjectCaseStudy({ project }: { project: Project }) {
  const narrative = projectNarratives[project.slug];
  if (!narrative) return null;

  const sourceUrl = project.githubUrl;
  const sourceLabel = project.slug === 'operon' || project.slug === 'novora' ? 'Browse GitHub organization' : 'View GitHub repository';

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-6 pb-20 pt-8 md:pt-14">
      <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white">
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#FF8B3D]">{project.category} · Independent project</p>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">{project.name}</h1>
        <h2 className="mb-4 text-lg font-semibold text-zinc-200 sm:text-xl">{narrative.title}</h2>
        <p className="text-base leading-relaxed text-zinc-400">{project.shortDescription}</p>
      </header>

      <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0D]">
        {project.image && <Image src={project.image} alt={`${project.name} project preview`} fill priority sizes="(max-width: 768px) 100vw, 1152px" className="object-cover" />}
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-8">
          <section className="rounded-2xl border border-white/[0.08] bg-[#0B0B0D]/80 p-6 sm:p-8">
            <h2 className="mb-3 text-xl font-bold text-white">The problem</h2>
            <p className="leading-relaxed text-zinc-300">{narrative.problem}</p>
          </section>
          <section className="rounded-2xl border border-white/[0.08] bg-[#0B0B0D]/80 p-6 sm:p-8">
            <h2 className="mb-3 text-xl font-bold text-white">Product approach</h2>
            <p className="leading-relaxed text-zinc-300">{narrative.approach}</p>
          </section>
          <section className="rounded-2xl border border-white/[0.08] bg-[#0B0B0D]/80 p-6 sm:p-8">
            <h2 className="mb-5 text-xl font-bold text-white">Workflow</h2>
            <ol className="grid gap-3 sm:grid-cols-2">
              {narrative.workflow.map((step, index) => (
                <li key={step} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <span className="font-mono text-sm text-[#FF8B3D]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm leading-relaxed text-zinc-300">{step}</span>
                </li>
              ))}
            </ol>
          </section>
          <section className="rounded-2xl border border-white/[0.08] bg-[#0B0B0D]/80 p-6 sm:p-8">
            <h2 className="mb-2 text-xl font-bold text-white">Project tags</h2>
            <p className="mb-4 text-sm leading-relaxed text-zinc-400">These labels describe the project area. Confirm framework and implementation details in the linked source.</p>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => <li key={technology} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300">{technology}</li>)}
            </ul>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0B0B0D]/80 p-5">
            <h2 className="mb-2 font-semibold text-white">Explore the project</h2>
            <p className="mb-5 text-sm leading-relaxed text-zinc-400">The live demo may ask you to sign in. No demo credentials or customer data are published here, and a video walkthrough is not available yet. Contact me to discuss access or request a walkthrough.</p>
            <div className="flex flex-col gap-2">
              {project.liveUrl && <ProjectDemoLink project={project} className="inline-flex min-h-11 items-center justify-between rounded-xl bg-[#FF6A00] px-4 py-3 text-sm font-semibold text-white hover:bg-[#FF8533]" />}
              {project.backendRepoUrl && <a href={project.backendRepoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-zinc-200 hover:bg-white/[0.05]">View backend repository <ArrowUpRight className="h-4 w-4" /></a>}
              {sourceUrl && <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-zinc-200 hover:bg-white/[0.05]">{sourceLabel} <ArrowUpRight className="h-4 w-4" /></a>}
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm text-zinc-200 hover:bg-white/[0.05]">Request a walkthrough</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-[#0B0B0D]/80 p-5">
            <h2 className="mb-2 font-semibold text-white">Current evidence</h2>
            <p className="text-sm leading-relaxed text-zinc-400">The project image is a portfolio preview. Detailed implementation claims and measured outcomes are included only when supported by accessible source material.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
