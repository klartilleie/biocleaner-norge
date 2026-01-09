import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ContactFormData {
  name: string;
  email: string;
  phone?: string | null;
  municipality?: string | null;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const mailOptions = {
    from: `"BioCleaner Nettside" <${process.env.SMTP_USER}>`,
    to: "biocleaner-norge@klartilleie.no",
    replyTo: data.email,
    subject: `Ny henvendelse fra ${data.name}`,
    html: `
      <h2>Ny henvendelse fra nettsiden</h2>
      <p><strong>Navn:</strong> ${data.name}</p>
      <p><strong>E-post:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ""}
      ${data.municipality ? `<p><strong>Kommune:</strong> ${data.municipality}</p>` : ""}
      <hr />
      <h3>Melding:</h3>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
    text: `
Ny henvendelse fra nettsiden

Navn: ${data.name}
E-post: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ""}
${data.municipality ? `Kommune: ${data.municipality}` : ""}

Melding:
${data.message}
    `,
  };

  await transporter.sendMail(mailOptions);
}
