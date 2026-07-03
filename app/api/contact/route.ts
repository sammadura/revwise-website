import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name?: string;
  shopName?: string;
  email?: string;
  phone?: string;
  preferredTimes?: string;
  message?: string;
  website?: string; // honeypot — real visitors never fill this
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, shopName, email, phone, preferredTimes, message, website } = body;

    // Honeypot filled → almost certainly a bot. Pretend success, send nothing.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and a short message are required.' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error('[CONTACT] Missing GMAIL_USER / GMAIL_APP_PASSWORD env vars');
      return NextResponse.json(
        { error: 'Email delivery is not configured.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    const subjectName = shopName?.trim() || name.trim();

    await transporter.sendMail({
      from: `"RevWise Website" <${gmailUser}>`,
      to: 'sam@getrevwise.com',
      replyTo: email.trim(),
      subject: `Book-a-call request — ${subjectName}`,
      text: [
        'New book-a-call request from getrevwise.com/contact',
        '',
        `Name: ${name.trim()}`,
        `Shop: ${shopName?.trim() || '(not provided)'}`,
        `Email: ${email.trim()}`,
        `Phone: ${phone?.trim() || '(not provided)'}`,
        `Preferred times: ${preferredTimes?.trim() || '(not provided)'}`,
        '',
        'Message:',
        message.trim(),
      ].join('\n'),
    });

    // Telegram notification for new leads (same pattern as the audit route;
    // must await on Vercel serverless)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_NOTIFY_CHAT_ID;
    if (telegramToken && telegramChatId) {
      try {
        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: [
              '📞 New Book-a-Call Request!',
              '',
              `Name: ${name.trim()}`,
              `Shop: ${shopName?.trim() || '—'}`,
              `Email: ${email.trim()}`,
              `Phone: ${phone?.trim() || '—'}`,
            ].join('\n'),
          }),
        });
      } catch (e) {
        console.error('[TELEGRAM] Notification failed:', e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
