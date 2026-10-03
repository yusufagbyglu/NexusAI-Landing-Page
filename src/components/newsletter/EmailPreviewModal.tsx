"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  html: string | null;
  onClose: () => void;
}

export function EmailPreviewModal({ html, onClose }: Props) {
  useEffect(() => {
    if (!html) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [html, onClose]);

  if (!html) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-preview-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-border-subtle bg-panel-bg p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3
              id="email-preview-title"
              className="text-lg font-semibold text-foreground"
            >
              This is the email you would receive
            </h3>
            <p className="mt-1 text-sm text-foreground/70">
              Demo mode: no real email was sent and your address was not stored.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="text-foreground/60 hover:text-brand-main transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <iframe
          title="Welcome email preview"
          srcDoc={html}
          sandbox=""
          className="h-[420px] w-full rounded-lg bg-white"
        />
      </div>
    </div>
  );
}
