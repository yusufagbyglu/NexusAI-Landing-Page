"use server";

import { headers } from "next/headers";
import { render } from "@react-email/components";
import { newsletterSchema } from "@/lib/validations/newsletter";
import { checkRateLimit } from "@/lib/ratelimit";
import { WelcomeEmail } from "@/components/emails/WelcomeEmail";

export type SubscribeResult =
  { ok: true; html: string } | { ok: false; error: string };

export async function subscribeToNewsletter(
  input: unknown,
): Promise<SubscribeResult> {
  // 1) Server side validation
  const parsed = newsletterSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      error: parsed.error.issues[0]?.message ?? "Invalid email.",
    };
  }
  const { email } = parsed.data;

  // 2) IP based rate limit
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    h.get("x-real-ip") ??
    "unknown";
  if (!(await checkRateLimit(ip))) {
    return {
      ok: false,
      error: "Too many attempts. Please try again in a few minutes.",
    };
  }

  // 3) Convert email to HTML (not sent anywhere, not saved)
  const html = await render(<WelcomeEmail email={email} />);
  return { ok: true, html };
}
