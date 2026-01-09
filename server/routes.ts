import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactMessageSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

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
      
      await sendContactEmail(parsed.data);
      res.status(201).json({ success: true, message: "Takk for din henvendelse! Vi tar kontakt snart." });
    } catch (error) {
      console.error("Error sending contact email:", error);
      res.status(500).json({ error: "Kunne ikke sende melding. Prøv igjen senere." });
    }
  });

  return httpServer;
}
