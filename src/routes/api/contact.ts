import { createFileRoute } from "@tanstack/react-router";
import type { ContactSubmission } from "@/lib/contact";
import { handleContactSubmission } from "@/server/contact-handler";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const payload = (await request.json()) as ContactSubmission;
        return handleContactSubmission(payload);
      },
    },
  },
});
