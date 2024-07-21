import { NextResponse } from 'next/server';
import { sendEmail } from '../../../services/emailService';

export async function POST(request: Request) {
  const { subject, text } = await request.json();

  try {
    await sendEmail({ subject, text });
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
