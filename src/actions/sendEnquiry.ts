"use server";

import nodemailer from "nodemailer";

export type EnquiryState = { status: "idle" | "success" | "error"; message?: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!,
  );

const field = (formData: FormData, name: string, maxLength = 200) =>
  String(formData.get(name) ?? "").trim().slice(0, maxLength);

export async function sendEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Hidden honeypot field: real users leave it empty, bots usually fill it
  if (field(formData, "website")) return { status: "success" };

  const enquiry = {
    fullName: field(formData, "fullName"),
    companyName: field(formData, "companyName"),
    email: field(formData, "email"),
    phone: field(formData, "phone", 50),
    interest: field(formData, "interest"),
    message: field(formData, "message", 5000),
  };

  if (!enquiry.fullName || !enquiry.message || !EMAIL_PATTERN.test(enquiry.email)) {
    return { status: "error", message: "Please fill in your name, a valid email and a message." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("sendEnquiry: SMTP_USER / SMTP_PASS are not configured");
    return { status: "error", message: "Something went wrong. Please try again later." };
  }

  const port = Number(SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST ?? "smtp.hostinger.com",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Full Name", enquiry.fullName],
    ["Company Name", enquiry.companyName],
    ["Email Address", enquiry.email],
    ["Contact Number", enquiry.phone],
    ["Product or Brand of Interest", enquiry.interest],
    ["Message", enquiry.message],
  ];

  try {
    await transporter.sendMail({
      // Hostinger only allows sending as the authenticated mailbox
      from: `"Al Ihsas Website" <${SMTP_USER}>`,
      to: CONTACT_EMAIL ?? SMTP_USER,
      replyTo: { name: enquiry.fullName, address: enquiry.email },
      subject: `New Enquiry from ${enquiry.fullName}`,
      text: rows.map(([label, value]) => `${label}: ${value || "-"}`).join("\n"),
      html: `<h2>New website enquiry</h2><table cellpadding="6">${rows
        .map(
          ([label, value]) =>
            `<tr><td valign="top"><strong>${label}</strong></td><td style="white-space:pre-wrap">${
              escapeHtml(value) || "-"
            }</td></tr>`,
        )
        .join("")}</table>`,
    });
    return { status: "success" };
  } catch (error) {
    console.error("sendEnquiry: failed to send email", error);
    return { status: "error", message: "We couldn't send your enquiry. Please try again later." };
  }
}
