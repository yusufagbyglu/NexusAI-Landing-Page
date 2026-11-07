"use client";

import { Dispatch, SetStateAction } from "react";

interface PricingToggleProps {
  billing: "monthly" | "annual";
  setBilling: Dispatch<SetStateAction<"monthly" | "annual">>;
}

export function PricingToggle({ billing, setBilling }: PricingToggleProps) {
  return (
    <div className="mb-14 flex items-center justify-center gap-3">
      <span
        className={`text-sm font-semibold transition-colors ${
          billing === "monthly" ? "text-foreground" : "text-foreground/65"
        }`}
      >
        Monthly
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={billing === "annual"}
        onClick={() =>
          setBilling((prev) => (prev === "monthly" ? "annual" : "monthly"))
        }
        className="relative inline-flex h-7 w-13 items-center rounded-full bg-border transition-colors data-[state=on]:bg-brand-main cursor-pointer"
        data-state={billing === "annual" ? "on" : "off"}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
            billing === "annual" ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </button>

      <span
        className={`text-sm font-semibold transition-colors ${
          billing === "annual" ? "text-foreground" : "text-foreground/65"
        }`}
      >
        Annually
      </span>

      <span className="ml-1 text-xs font-bold text-success-text bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
        Save ~20%
      </span>
    </div>
  );
}
