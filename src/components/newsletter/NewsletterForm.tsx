"use client";

import { FormEvent, useState } from "react";
import { subscribeToNewsletter } from "@/actions/newsletter";
import { EmailPreviewModal } from "./EmailPreviewModal";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewHtml, setPreviewHtml] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null);
    setIsSubmitting(true);
    try {
      const res = await subscribeToNewsletter({ email });
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setPreviewHtml(res.html);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-auto lg:min-w-[400px]"
      >
        <label htmlFor="UserEmail" className="sr-only">
          Email
        </label>

        <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-1.5 focus-within:ring-2 focus-within:ring-brand-main/40 transition-all">
          <input
            type="email"
            id="UserEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            maxLength={254}
            autoComplete="email"
            aria-describedby="newsletter-note"
            aria-invalid={error ? true : undefined}
            className="w-full min-w-0 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 border-none focus:outline-none focus:ring-0"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="shrink-0 rounded-lg bg-brand-main px-5 py-2.5 text-xs font-bold tracking-wide text-white uppercase hover:bg-brand-hover transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Subscribe"}
          </button>
        </div>

        {error && (
          <p role="alert" className="mt-2 text-xs text-red-400">
            {error}
          </p>
        )}
        <p id="newsletter-note" className="mt-2 text-[11px] text-foreground/45">
          Demo: submitting previews the welcome email. Nothing is sent or
          stored.
        </p>
      </form>

      <EmailPreviewModal
        html={previewHtml}
        onClose={() => setPreviewHtml(null)}
      />
    </>
  );
}
