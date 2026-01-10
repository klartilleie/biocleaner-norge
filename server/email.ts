import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string | null;
  municipality?: string | null;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  await resend.emails.send({
    from: "BioCleaner Nettside <onboarding@resend.dev>",
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
  });
}
