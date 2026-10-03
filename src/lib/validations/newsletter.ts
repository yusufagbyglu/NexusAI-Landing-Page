import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
