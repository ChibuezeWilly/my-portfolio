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

    const agentMailKey = process.env.AGENTMAIL_API_KEY;
    const recipient = 'pricelesswilliams1234@gmail.com';

    // If AgentMail is configured, attempt sending via AgentMail API
    if (agentMailKey) {
      try {
        const mailResponse = await fetch('https://api.agentmail.to/v1/send', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${agentMailKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: recipient,
            from: email,
            subject: subject || `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        });

        if (mailResponse.ok) {
          return NextResponse.json({
            success: true,
            message: 'Your message has been sent successfully.',
          });
        }
      } catch (mailError) {
        console.warn('AgentMail request failed:', mailError);
      }
    }

    // If AgentMail is not configured or failed, notify client gracefully with mailto fallback
    return NextResponse.json({
      success: true,
      provider: 'fallback',
      message: 'Message received! You can also reach Chibueze directly at pricelesswilliams1234@gmail.com.',
      mailto: `mailto:${recipient}?subject=${encodeURIComponent(
        subject || `Question for Chibueze from ${name}`
      )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`,
    });
  } catch (error) {
    console.error('Contact endpoint error:', error);
    return NextResponse.json(
      { error: 'Failed to process message. Please email directly at pricelesswilliams1234@gmail.com.' },
      { status: 500 }
    );
  }
}
