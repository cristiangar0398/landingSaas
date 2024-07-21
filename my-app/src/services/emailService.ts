import nodemailer from 'nodemailer';

interface EmailOptions {
  subject: string;
  text: string;
}

export async function sendEmail({ subject, text }: EmailOptions): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: 'mail.ecoret.com.co',
    port: 465,
    secure: true, // true para SSL
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.PERSONAL_EMAIL,
    subject: subject,
    text: text,
  };

  await transporter.sendMail(mailOptions);
}
