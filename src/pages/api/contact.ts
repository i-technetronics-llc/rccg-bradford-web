import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { fullName, email, phoneNumber, subject, message, testimonyService } = req.body;

  console.log("Received Form Data:", req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let emailBody = `Name: ${fullName}\nEmail: ${email}\nSubject: ${subject}\n`;

  if (subject === "Testimony") {
    emailBody += `Testimony Service: ${testimonyService}\n`;
  }

  emailBody += `Message:\n${message}`;

  await transporter.sendMail({
    from: `"${fullName}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Submission: ${subject}`,
    text: emailBody,
  });

  res.status(200).json({ success: true, message: "Email sent successfully!" });
}
