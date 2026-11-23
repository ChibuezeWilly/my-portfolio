import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const rateLimit = checkRateLimit(ip, 5, 60 * 1000); // 5 submissions per minute
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Too many messages sent. Please wait a minute before trying again.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const agentMailKey = process.env.AGENTMAIL_API_KEY?.trim();
    const agentMailInboxId = process.env.AGENTMAIL_INBOX_ID?.trim();
    const recipient = 'pricelesswilliams1234@gmail.com';

    if (!agentMailKey || !agentMailInboxId) {
      return NextResponse.json(
        { error: 'Email sending is not configured yet. Please email directly at pricelesswilliams1234@gmail.com.' },
        { status: 503 },
      );
    }

    const mailResponse = await fetch(
      `https://api.agentmail.to/v0/inboxes/${encodeURIComponent(agentMailInboxId)}/messages/send`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${agentMailKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: recipient,
          reply_to: email,
          subject: subject?.trim() || `New Portfolio Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      },
    );

    if (!mailResponse.ok) {
      console.error('AgentMail rejected contact message:', mailResponse.status);
      return NextResponse.json(
        { error: 'Your message could not be sent. Please try again later or email me directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Your message was sent. Thank you for reaching out.',
    });
  } catch (error) {
    console.error('Contact endpoint error:', error);
    return NextResponse.json(
      { error: 'Failed to process message. Please email directly at pricelesswilliams1234@gmail.com.' },
      { status: 500 }
    );
  }
}
