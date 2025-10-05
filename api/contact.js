import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log("API Key:", process.env.RESEND_API_KEY); 

  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Portfolio Contact <ashishakteri@gmail.com>",
      to: "ashishakteri@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ success: false, message: "Failed to send message." });
  }
}
