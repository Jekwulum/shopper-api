import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  // display which one is not set
  const missingVars = [];
  if (!process.env.EMAIL_HOST) missingVars.push('EMAIL_HOST');
  if (!process.env.EMAIL_USER) missingVars.push('EMAIL_USER');
  if (!process.env.EMAIL_PASS) missingVars.push('EMAIL_PASS');
  console.error(`❌ Missing environment variables: ${missingVars.join(', ')}`);
  throw new Error('Email configuration is not set in environment variables');
}

const transporter = nodemailer.createTransport({
  port: 587,
  secure: false, // TLS
  tls: {
    rejectUnauthorized: false,
  },
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

Promise.all([
  transporter.verify(),
]).then(() => {
  console.log('[Notification-service]: Email transporter is ready to send emails ✅');
}).catch((error) => {
  console.error('❌ Failed to verify email transporter:', error);
});

export async function sendEmail(to: string, subject: string, html: string) {
  const mailOptions = {from: `Shopper`, to, subject, html};
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to} with subject: ${subject}`);
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
    throw new Error('Email sending failed');
  }
}