import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    await resend.emails.send({
      from: process.env.LEADS_FROM_EMAIL,
      to: process.env.LEADS_TO_EMAIL,
      subject: "New NZ Road Tours Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${data.full_name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Service:</b> ${data.service_type}</p>
        <p><b>Pickup:</b> ${data.pickup_location}</p>
        <p><b>Dropoff:</b> ${data.dropoff_location}</p>
        <p><b>Date:</b> ${data.travel_date}</p>
        <p><b>Passengers:</b> ${data.passengers}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return res.status(500).json({ error: "Email failed" });
  }
}