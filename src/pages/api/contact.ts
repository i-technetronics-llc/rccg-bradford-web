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

  // ✅ Construct email body dynamically based on subject
  let emailBody = `Name: ${fullName}\nSubject: ${subject}\n`;

  // Only include email if it's provided (not for Testimony)
  if (email) {
    emailBody += `Email: ${email}\n`;
  }

  if (subject !== "Testimony") {
    emailBody += `Phone Number: ${phoneNumber}\n`; // Include phone number if NOT Testimony
  } else {
    emailBody += `Testimony Service: ${testimonyService}\n`; // Include service selection for Testimony
  }

  emailBody += `Message:\n${message}`;

  try {
    await transporter.sendMail({
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${subject}`,
      text: emailBody,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email. Please try again." });
  }
}
