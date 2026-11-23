import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';
import { getProjectKnowledge, getGlobalKnowledge } from '@/lib/knowledge-retrieval';
import { buildSystemPrompt, getStreamingChatResponse, ChatMessage } from '@/lib/ai-providers';

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const rateLimit = checkRateLimit(ip, 30, 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a moment before sending another message.' },
        { status: 429 }
      );
    }

    // 2. Parse and Validate Request
    const body = await req.json();
    const projectId: string | undefined = body.projectId || body.project_id;
    const message: string | undefined = body.message;
    const incomingMessages: ChatMessage[] = body.messages || body.conversation_history || [];

    if (!message && (!incomingMessages || incomingMessages.length === 0)) {
      return NextResponse.json(
        { error: 'Missing required field: message or messages array.' },
        { status: 400 }
      );
    }

    // Format chat history
    const messages: ChatMessage[] = incomingMessages.length > 0
      ? incomingMessages
      : [{ role: 'user', content: message! }];

    // Enforce message length limits
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.content.length > 2000) {
      return NextResponse.json(
        { error: 'Message exceeds maximum length of 2000 characters.' },
        { status: 400 }
      );
    }

    // 3. Retrieve Knowledge Context
    const project = projectId ? getProjectKnowledge(projectId) : null;
    const globalData = getGlobalKnowledge();

    // 4. Build Structured System Prompt
    const systemPrompt = buildSystemPrompt(project, globalData);

    // 5. Generate Streaming Response
    const stream = await getStreamingChatResponse(systemPrompt, messages, project);

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error handling AI chat request:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
