import { NextResponse } from 'next/server';
import { sendEmail } from '../../../services/emailService';

export async function POST(request: Request) {
  const { firstName, phone, email, message } = await request.json();

  try {
    await sendEmail({ firstName, phone, email, message });
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
