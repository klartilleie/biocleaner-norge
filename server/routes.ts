import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactMessageSchema } from "@shared/schema";
import { sendContactEmail } from "./email";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Ugyldig data", details: parsed.error.errors });
      }
      
      // Save to database first
      await storage.createContactMessage(parsed.data);
      
      // Try to send email (don't fail if email fails)
      try {
         await sendContactEmail(parsed.data);
         console.log("[contact] Email sent OK for", parsed.data.email);
      } catch (emailError) {
        console.error("[contact] Email sending failed:", emailError);
      }
      
      // Forward lead to ODIN command-center for popup-notification + GRIM follow-up
      try {
        const fwdRes = await fetch("https://futuristic-command-center.onrender.com/api/biocleaner/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: parsed.data.name,
            phone: parsed.data.phone || "",
            email: parsed.data.email,
            postcode: (parsed.data as any).municipality || "",
            message: parsed.data.message,
            source: "biocleaner-norge.no/krav",
          }),
        });
        console.log("[contact] Forwarded to ODIN, status:", fwdRes.status);
      } catch (fwdError) {
        console.error("[contact] Forward to ODIN failed:", fwdError);
      }
      
      res.status(201).json({ success: true, message: "Takk for din henvendelse! Vi tar kontakt snart." });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Kunne ikke sende melding. Prøv igjen senere." });
    }
  });

  return httpServer;
}
