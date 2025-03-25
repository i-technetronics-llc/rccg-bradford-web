import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { fullName, email, phoneNumber, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${fullName}\nEmail: ${email}\n${phoneNumber ? `Phone: ${phoneNumber}\n` : ""}Subject: ${subject}\nMessage: ${message}`,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to send email.", error });
  }
}
