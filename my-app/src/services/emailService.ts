import nodemailer from 'nodemailer';

interface EmailOptions {
  firstName: string;
  phone: string;
  email: string;
  message: string;
}

export async function sendEmail({ firstName, phone, email, message }: EmailOptions): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: 'mail.ecoret.com.co',
    port: 465,
    secure: true, 
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.PERSONAL_EMAIL,
    subject: `Nuevo mensaje De ${firstName}`,
    text: `tienes un nuevo mensaje De : ${firstName}:\n\n (${email}, ${phone}):\n\n${message}`,
  };

  console.log(mailOptions)

  await transporter.sendMail(mailOptions);
}
