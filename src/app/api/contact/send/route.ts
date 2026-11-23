import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
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

    const recipient = 'pricelesswilliams1234@gmail.com';
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');

    if (!gmailAppPassword) {
      return NextResponse.json(
        { error: 'Gmail sending is not configured yet. Please email directly at pricelesswilliams1234@gmail.com.' },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: recipient,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: { name: 'Chibueze Williams Portfolio', address: recipient },
      to: recipient,
      replyTo: email,
      subject: subject?.trim() || `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({
      success: true,
      message: 'Your message was sent. Thank you for reaching out.',
    });
  } catch (error) {
    console.error('Gmail SMTP contact send failed:', error);
    return NextResponse.json(
      { error: 'Your message could not be sent. Please try again later or email directly at pricelesswilliams1234@gmail.com.' },
      { status: 502 }
    );
  }
}
