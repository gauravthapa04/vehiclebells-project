import nodemailer from 'nodemailer';

export default async function SendEmail(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Extract the necessary data from the request body
  const { to, subject, text } = req.body;

  try {
    // Create a Nodemailer transporter using your SMTP configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      auth: {
        user: 'contact@gigspero.com',
        pass: '$a9Ba&123!@#',
      },
    });

    // Create the email message
    const message = {
      from:'contact@gigspero.com',
      to,
      subject,
      text,
    };

    // Send the email
    await transporter.sendMail(message);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}

