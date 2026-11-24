import { Project } from '@/types';

/**
 * PROJECT DATA SOURCE
 * NOTE: Operon, Novora, TallyFlow, and ChurnDesk are independent projects.
 * Spinbrite and Lumecs are professional employment experiences (see experience data).
 * Live demo previews are null until verified URLs are provided.
 */
export const projects: Project[] = [
  {
    id: 'operon',
    slug: 'operon',
    name: 'Operon',
    shortDescription: 'An AI agent platform to build, configure, test, and manage agents, tools, and knowledge sources from one workspace.',
    longDescription: 'An AI agent creation and operations platform that lets users build, configure, test, and manage AI agents, connect knowledge sources and tools, and monitor their execution from one workspace.',
    category: 'AI Systems',
    image: '/images/Operon.png',
    technologies: ['FULL-STACK APPLICATION', 'AI AGENTS', 'WORKFLOW AUTOMATION', 'MULTI-TENANT SAAS'],
    githubUrl: 'https://github.com/Operon-Operation-Platform',
    backendUrl: 'https://backend-qg67.onrender.com',
    liveUrl: 'https://operon-operation-platform.github.io/frontend',
    problem: 'Managing distributed AI agents, multi-tool connections, and workflow execution across environments typically requires fragmented tools with high operational complexity.',
    solution: 'Operon provides a unified workspace for configuring agents, integrating knowledge retrieval and external tools, testing agent behavior in sandboxes, and monitoring live telemetry.',
    features: [
      'Visual AI agent configuration and lifecycle management',
      'Knowledge retrieval connectors and dynamic tool calling',
      'Real-time execution telemetry and state observability',
      'Automated fallback flows and guardrail enforcement'
    ],
    architecture: 'Python services expose agent orchestration and telemetry APIs through FastAPI, with Redis coordinating state and asynchronous task queues. A React and TypeScript interface powers the agent workspace.',
    technicalDecisions: [
      {
        decision: 'Redis for message coordination',
        reason: 'Offers sub-millisecond latency for distributed locking and pub/sub channels without the overhead of heavy message brokers.'
      },
      {
        decision: 'FastAPI for orchestration APIs',
        reason: 'Keeps the service layer in Python and uses typed request models to validate agent definitions and execution payloads.'
      }
    ],
    challenges: [
      {
        challenge: 'Maintaining deterministic agent execution and state recovery across long-running tool calls',
        solution: 'Implemented atomic Redis state snapshots to allow seamless pause-and-resume execution.'
      }
    ],
    myRole: 'Full-Stack AI Engineer — designed the agent operations architecture, FastAPI backend endpoints, and the interactive workspace UI.',
    futureImprovements: [
      'Multi-agent collaborative swarm execution',
      'Fine-tuned evaluation benchmarks'
    ],
    aiContext: 'Operon is an AI agent creation and operations platform built with Python, FastAPI, Redis, Docker, React, and TypeScript. Users configure agents, connect tools, test behaviors, and monitor executions.',
    verified: false,
  },
  {
    id: 'novora',
    slug: 'novora',
    name: 'Novora',
    shortDescription: 'An AI voice agent evaluation platform for testing workflows, measuring performance, and finding failures before launch.',
    longDescription: 'An AI voice agent evaluation platform for testing conversational workflows, measuring agent performance, and identifying failures before they affect real users.',
    category: 'AI Systems',
    image: '/images/Novora.png',
    technologies: ['FULL-STACK APPLICATION', 'VOICE AI', 'AGENT EVALUATION', 'AUTOMATED TESTING'],
    githubUrl: 'https://github.com/novora-voice',
    backendUrl: 'https://novora-backend-616w.onrender.com',
    backendRepoUrl: 'https://github.com/novora-voice/novora-backend',
    liveUrl: 'https://novora-voice.github.io/novora-frontend/',
    problem: 'Voice AI agents frequently derail in production conversations, struggle with speech interruptions, or hallucinate outside defined workflow bounds without early warning.',
    solution: 'Novora simulates multi-turn audio and text conversations against synthetic personas, scoring compliance, latency, speech naturalness, and safety constraints automatically.',
    features: [
      'Automated synthetic conversation simulations',
      'Voice latency, turn-taking, and interruption benchmark analysis',
      'Workflow rule compliance scoring and regression reporting',
      'Detailed conversation trace visualization and audio replay'
    ],
    architecture: 'FastAPI backend orchestrates simulated conversations over WebSockets, recording audio transcripts and telemetry into PostgreSQL. A Next.js and Tailwind interface provides interactive inspection dashboards.',
    technicalDecisions: [
      {
        decision: 'FastAPI with WebSockets for simulation feeds',
        reason: 'Handles streaming real-time voice telemetry and turn-by-turn evaluation scores with minimal latency.'
      },
      {
        decision: 'PostgreSQL JSONB for conversation traces',
        reason: 'Enables flexible schema storage for diverse agent outputs and evaluation metrics while maintaining strict relational foreign keys.'
      }
    ],
    challenges: [
      {
        challenge: 'Accurately detecting conversational deadlocks and repeated prompt looping',
        solution: 'Designed graph-based path verification to detect cyclic agent responses against specified conversation state machines.'
      }
    ],
    myRole: 'Full-Stack Developer — built the evaluation engine APIs, WebSocket streaming layer, and the trace analysis dashboard.',
    futureImprovements: [
      'Real-time streaming audio emotion classification',
      'One-click integration with LiveKit and Twilio'
    ],
    aiContext: 'Novora is a voice agent evaluation platform built with Python, FastAPI, PostgreSQL, React, and TypeScript for testing and benchmarking conversational AI agents.',
    verified: false,
  },
  {
    id: 'tallyflow',
    slug: 'tallyflow',
    name: 'TallyFlow',
    shortDescription: 'An AI-powered reconciliation platform that investigates invoices, payments, and ledger discrepancies with human approval.',
    longDescription: 'An AI-powered financial reconciliation platform that investigates invoices, payments, and ledger discrepancies, combining intelligent investigation with deterministic matching and human approval.',
    category: 'Fintech & AI',
    image: '/images/Tallyflow.png',
    technologies: ['FULL-STACK APPLICATION', 'FINTECH', 'AI AUTOMATION', 'FINANCIAL RECONCILIATION'],
    githubUrl: 'https://github.com/ChibuezeWilly/AI-Powered-Financial-Close-Reconciliation-platform',
    backendUrl: 'https://ai-powered-financial-close.onrender.com',
    liveUrl: 'https://ai-powered-financial-close-system.vercel.app/',
    problem: 'Finance teams need to match records across a close and investigate discrepancies with enough evidence to make a reliable decision.',
    solution: 'TallyFlow pairs deterministic matching and validation with AI-assisted discrepancy investigation and human review. Specific bank, Stripe, or payment gateway connections and measured reconciliation results are not verified in the available portfolio source.',
    features: [
      'Deterministic transaction matching and validation',
      'AI-assisted investigation of financial discrepancies',
      'Human review of proposed resolutions'
    ],
    architecture: 'FastAPI Python backend handling high-precision financial arithmetic and database migrations with PostgreSQL, accompanied by a React & TypeScript frontend.',
    technicalDecisions: [
      {
        decision: 'FastAPI for backend calculations',
        reason: 'Provides asynchronous high-throughput execution with strict Pydantic data validation for sensitive monetary amounts.'
      },
      {
        decision: 'PostgreSQL with Decimal precision',
        reason: 'Avoids floating point rounding errors critical in financial accounting systems.'
      }
    ],
    challenges: [
      {
        challenge: 'Handling mismatched date formats and currency strings from diverse banking exports',
        solution: 'Created an extensible parser pipeline that normalizes various CSV and JSON bank schemas into a unified transaction structure.'
      }
    ],
    myRole: 'Lead Engineer — developed the reconciliation parser in FastAPI and the interactive data visualization dashboard.',
    futureImprovements: [
      'Automated receipt OCR parsing',
      'Direct Open Banking API connectors'
    ],
    aiContext: 'TallyFlow is an AI-assisted financial reconciliation platform built with FastAPI, PostgreSQL, and React. Focuses on transaction matching and anomaly resolution.',
    verified: false,
  },
  {
    id: 'churndesk',
    slug: 'churndesk',
    name: 'ChurnDesk',
    shortDescription: 'An AI support and incident platform that investigates tickets, coordinates resolutions, and escalates issues to people.',
    longDescription: 'An AI-powered customer support and incident response platform that helps teams investigate tickets, retrieve relevant information, coordinate resolutions, and escalate issues requiring human attention.',
    category: 'AI & Automation',
    image: '/images/ChurnDesk.png',
    technologies: ['FULL-STACK APPLICATION', 'AI AGENTS', 'CUSTOMER SUPPORT', 'INCIDENT AUTOMATION'],
    githubUrl: 'https://github.com/ChibuezeWilly/AI-Powered-Incident-Response-Customer-Support-Platform',
    backendUrl: 'https://ai-powered-incident-response-customer.onrender.com',
    liveUrl: 'https://ai-incident-response-customer-suppo.vercel.app/',
    problem: 'Customer support teams are overwhelmed by incident spikes, while engineers lack context when tickets escalate, leading to delayed resolution and customer churn.',
    solution: 'ChurnDesk supports a ticket workflow from classification and retrieval through investigation, proposed resolution, human review, and escalation when a person needs to take over.',
    features: [
      'Ticket classification and relevant information retrieval',
      'Investigation support and proposed resolutions',
      'Human review and escalation'
    ],
    architecture: 'A React and TypeScript dashboard consumes Python FastAPI endpoints for account health, ticket classification, and incident routing. PostgreSQL stores customer and activity records.',
    technicalDecisions: [
      {
        decision: 'FastAPI for analytics endpoints',
        reason: 'Keeps the backend in Python and validates event and account data at the API boundary.'
      },
      {
        decision: 'Tailwind CSS with glassmorphic dashboards',
        reason: 'Delivers a modern, dense data-display layout with high contrast and readable metrics.'
      }
    ],
    challenges: [
      {
        challenge: 'Computing health scores efficiently across thousands of activity events',
        solution: 'Scheduled batch aggregation jobs that compute rolling 7-day and 30-day window metrics into summary tables.'
      }
    ],
    myRole: 'Full-Stack Developer — implemented the FastAPI event ingestion endpoints, PostgreSQL-backed analytics, and retention dashboard.',
    futureImprovements: [
      'Integration with Slack and email webhooks for instant team alerts',
      'Machine learning classification for churn probability'
    ],
    aiContext: 'ChurnDesk is an AI incident response and customer support platform built with Python, FastAPI, PostgreSQL, React, and TypeScript.',
    verified: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
