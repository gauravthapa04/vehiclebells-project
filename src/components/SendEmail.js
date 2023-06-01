import nodemailer from 'nodemailer';

// Create a transporter using your SMTP configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS,
  },
});

export default async function SendEmail({ to, subject, text }) {
  try {
    // Send the email using the transporter
    const info = await transporter.sendMail({
      from: 'bytecodetechnologies.co.in',
      to,
      subject,
      text,
    });

    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
