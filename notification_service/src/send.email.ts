import nodemailer from 'nodemailer';

export async function sendEmail(to: string, subject: string, html: string){
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Shopper`,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to} with subject: ${subject}`);
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
    throw new Error('Email sending failed');
  }
}