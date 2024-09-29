// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { to, subject, text } = await request.json();

    const msg = {
      to, // recipient email address
      from: 'your-email@example.com', // Replace with your verified sender email
      subject,
      text,
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
