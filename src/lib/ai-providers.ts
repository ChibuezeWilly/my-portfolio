import { ProjectKnowledge } from './knowledge-retrieval';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export function buildSystemPrompt(
  project: ProjectKnowledge | null,
  globalData: { global: Record<string, unknown>; experience: Record<string, unknown>; skills: Record<string, unknown> }
): string {
  const projectName = project ? project.name : 'Chibueze Williams Portfolio';
  const isVerified = project ? project.verified : false;

  return `You are the AI Project Assistant for Chibueze Williams' developer portfolio.
Your purpose is to help visitors understand Chibueze's work, technical decisions, architecture, technologies, features, challenges, and background.

CURRENT EXPLORATION CONTEXT:
Project: ${projectName}
Classification: ${project?.classification || 'General Portfolio'}
Verified Status: ${isVerified ? 'Fully Verified' : 'In Development / Unverified'}

PROJECT KNOWLEDGE:
${JSON.stringify(project || {}, null, 2)}

GLOBAL PORTFOLIO KNOWLEDGE:
Owner: Chibueze Williams (Full-Stack Software Engineer)
Email: mailtopricelesswilliams@gmail.com
GitHub: https://github.com/ChibuezeWilly
Experience:
- Spinbrite (Full-Stack Engineer, Aug 2025 – Sep 2026): Command center, customer portal, AI customer support workflows.
- Lumecs (Founding Frontend Engineer, Jan 2024 – Jun 2025): Web3 quest platform, scaled to 1,500+ DAU.

STRICT ACCURACY RULES:
1. You are an AI assistant representing Chibueze's portfolio. Never claim to be Chibueze himself.
2. Answer based ONLY on the provided project context. Do NOT fabricate features, unverified architecture, awards, metrics, or technologies not documented above.
3. If the user asks about an architectural detail, feature, or metric that is unverified or marked null, DO NOT speculate. Explicitly reply:
"I don't have a verified answer to that. You can reach Chibueze directly and ask him about it."
4. If the user asks about another project, briefly explain what that project is and invite them to switch to that project in the left panel to explore it in depth.
5. Keep explanations technically clear, modular, and professional. Format code, architecture layers, and key points with clean Markdown.`;
}

/**
 * Intelligent deterministic response generator when external API keys are not provided.
 * Answers based purely on verified knowledge JSON files and strictly abides by the unknown information policy.
 */
export function generateLocalKnowledgeResponse(
  prompt: string,
  project: ProjectKnowledge | null
): string {
  const p = prompt.toLowerCase();

  if (!project) {
    return `Welcome! I am Chibueze Williams' portfolio assistant. You can select any project from the showcase to explore its architecture, problem statement, technical stack, and design challenges. What would you like to know?`;
  }

  // Question: What problem does this solve?
  if (p.includes('problem') || p.includes('solve') || p.includes('why build') || p.includes('purpose')) {
    if (project.problem) {
      return `### Problem & Vision for ${project.name}

${project.problem}

**Solution Approach:**
${project.solution || 'Streamlined architectural design focused on reliability and performance.'}`;
    }
    return `I don't have a verified answer to that. You can reach Chibueze directly and ask him about it.`;
  }

  // Question: Architecture
  if (p.includes('architecture') || p.includes('how it works') || p.includes('system design') || p.includes('structure')) {
    if (project.architecture) {
      const decisions = project.design_decisions
        ?.map((d) => `- **${d.decision}**: ${d.reason}`)
        .join('\n') || '';

      return `### Architecture Overview: ${project.name}

${project.architecture}

${decisions ? `\n**Key Technical Decisions:**\n${decisions}` : ''}`;
    }
    return `I don't have a verified answer to that. You can reach Chibueze directly and ask him about it.`;
  }

  // Question: Technologies
  if (p.includes('technology') || p.includes('technologies') || p.includes('stack') || p.includes('tools')) {
    if (project.technologies && project.technologies.length > 0) {
      return `### Technology Stack: ${project.name}

${project.name} is built with:
${project.technologies.map((t) => `- **${t}**`).join('\n')}

Each technology was chosen to optimize developer ergonomics, compile-time safety, and high-performance delivery.`;
    }
    return `I don't have a verified answer to that. You can reach Chibueze directly and ask him about it.`;
  }

  // Question: Challenges
  if (p.includes('challenge') || p.includes('difficulty') || p.includes('hard') || p.includes('obstacle')) {
    if (project.challenges && project.challenges.length > 0) {
      return `### Engineering Challenges & Solutions

${project.challenges
  .map((c) => `**Challenge:** ${c.challenge}\n**Resolution:** ${c.solution}`)
  .join('\n\n')}`;
    }
    return `I don't have a verified answer to that. You can reach Chibueze directly and ask him about it.`;
  }

  // Question: Features
  if (p.includes('feature') || p.includes('what can it do') || p.includes('capabilities')) {
    if (project.features && project.features.length > 0) {
      return `### Key Features of ${project.name}

${project.features.map((f) => `- ${f}`).join('\n')}`;
    }
    return `I don't have a verified answer to that. You can reach Chibueze directly and ask him about it.`;
  }

  // Question: Role
  if (p.includes('role') || p.includes('what did you do') || p.includes('contribution')) {
    if (project.contributions && project.contributions.length > 0) {
      return `### Chibueze's Role on ${project.name}

${project.contributions.join('\n\n')}`;
    }
    return `I don't have a verified answer to that. You can reach Chibueze directly and ask him about it.`;
  }

  // Default overview if asking general overview
  if (project.overview) {
    return `### About ${project.name}

${project.overview}

**Technologies:** ${project.technologies.join(', ')}

Feel free to ask about its architecture, specific engineering challenges, or design decisions!`;
  }

  // Unknown information fallback
  return `I don't have a verified answer to that. You can reach Chibueze directly and ask him about it.`;
}

/**
 * Call Hugging Face Inference API (Meta Llama 3.1 8B Instruct)
 */
async function callHuggingFace(
  systemPrompt: string,
  messages: ChatMessage[],
  apiKey: string
): Promise<Response> {
  const model = process.env.HUGGINGFACE_MODEL || 'meta-llama/Meta-Llama-3.1-8B-Instruct';

  const formattedMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.slice(-8), // Limit recent history for token economy
  ];

  return fetch(`https://api-inference.huggingface.co/models/${model}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: formattedMessages,
      stream: true,
      max_tokens: 800,
      temperature: 0.3,
    }),
  });
}

/**
 * Call Google Gemini API
 */
async function callGemini(
  systemPrompt: string,
  messages: ChatMessage[],
  apiKey: string
): Promise<Response> {
  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;

  const contents = messages.slice(-8).map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents,
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 800,
      },
    }),
  });
}

export async function getStreamingChatResponse(
  systemPrompt: string,
  messages: ChatMessage[],
  project: ProjectKnowledge | null
): Promise<ReadableStream<Uint8Array>> {
  const encoder = new TextEncoder();
  const hfKey = process.env.HUGGINGFACE_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;
  const lastUserMessage = messages[messages.length - 1]?.content || '';

  // 1. Try Primary: Hugging Face
  if (hfKey) {
    try {
      const response = await callHuggingFace(systemPrompt, messages, hfKey);
      if (response.ok && response.body) {
        return response.body;
      }
      console.warn('Hugging Face response not OK, falling back to Gemini.');
    } catch (err) {
      console.warn('Hugging Face request failed:', err);
    }
  }

  // 2. Try Fallback: Gemini
  if (geminiKey) {
    try {
      const response = await callGemini(systemPrompt, messages, geminiKey);
      if (response.ok && response.body) {
        return response.body;
      }
      console.warn('Gemini response not OK, falling back to local deterministic stream.');
    } catch (err) {
      console.warn('Gemini request failed:', err);
    }
  }

  // 3. Fallback: Intelligent Deterministic Stream based on JSON knowledge
  // Simulates token streaming for seamless UX
  const answer = generateLocalKnowledgeResponse(lastUserMessage, project);
  const words = answer.split(' ');

  return new ReadableStream({
    async start(controller) {
      for (let i = 0; i < words.length; i++) {
        const text = words[i] + (i === words.length - 1 ? '' : ' ');
        // Format as SSE event
        const data = `data: ${JSON.stringify({ text })}\n\n`;
        controller.enqueue(encoder.encode(data));
        // Small delay between tokens to mimic streaming
        await new Promise((r) => setTimeout(r, 22));
      }
      controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      controller.close();
    },
  });
}
