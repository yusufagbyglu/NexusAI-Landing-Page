"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    monthly: 0,
    annual: 0,
    priceLabel: "Free",
    features: [
      "1,000 AI Generations / mo",
      "Standard Neural Model",
      "Basic Code Completion",
      "Community Support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "professional",
    name: "Professional",
    monthly: 19,
    annual: 15,
    originalMonthly: 32,
    originalAnnual: 25,
    features: [
      "Unlimited Generations",
      "Nexus Large Reasoning Model",
      "Advanced Multi-modal Processing",
      "Priority Support & API Access",
    ],
    cta: "Subscribe Now",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: 37,
    annual: 30,
    originalMonthly: 49,
    originalAnnual: 40,
    features: [
      "Custom Fine-Tuned Models",
      "Dedicated GPU Clusters",
      "Enterprise SOC-2 Security",
      "24/7 Technical Account Manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-20 lg:py-28 bg-panel-bg text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Pricing
          </h2>
          <p className="text-lg text-foreground/70">
            Scale your workflow with NexusAI. Choose a plan tailored to your
            project goals and team requirements.
          </p>
        </div>

        {/* Monthly / Annual Toggle */}
        <div className="mb-14 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-semibold transition-colors ${
              billing === "monthly" ? "text-foreground" : "text-foreground/50"
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
              billing === "annual" ? "text-foreground" : "text-foreground/50"
            }`}
          >
            Annually
          </span>

          <span className="ml-1 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            Save ~20%
          </span>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-full lg:grid-cols-3 items-stretch">
          {PLANS.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.annual;
            const originalPrice =
              billing === "monthly"
                ? plan.originalMonthly
                : plan.originalAnnual;
            const isFree = plan.id === "starter";

            return (
              <div
                key={plan.id}
                className={
                  plan.highlighted
                    ? "relative flex flex-col justify-between p-8 border-2 border-brand-main rounded-2xl bg-card shadow-xl scale-105 z-10"
                    : "flex flex-col justify-between p-8 border border-border rounded-2xl bg-card shadow-sm hover:shadow-md transition-all"
                }
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold rounded-full bg-brand-main text-white shadow-sm uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div>
                  <span
                    className={
                      plan.highlighted
                        ? "text-xs font-bold uppercase tracking-wider text-brand-main"
                        : "text-xs font-bold uppercase tracking-wider text-foreground/60"
                    }
                  >
                    {plan.name}
                  </span>

                  {isFree ? (
                    <p className="my-4 text-4xl font-extrabold text-card-foreground">
                      Free
                    </p>
                  ) : (
                    <p className="flex items-baseline my-4 space-x-2">
                      <span className="text-4xl font-extrabold text-card-foreground">
                        {price}€
                      </span>
                      <span className="text-foreground/60 text-sm">/mo</span>
                      {originalPrice && (
                        <span className="text-xs line-through text-foreground/40">
                          {originalPrice}€
                        </span>
                      )}
                    </p>
                  )}

                  {!isFree && billing === "annual" && (
                    <p className="text-xs text-foreground/50 -mt-2 mb-2">
                      Billed annually
                    </p>
                  )}

                  <ul className="space-y-3 pt-4 border-t border-border-subtle">
                    {plan.features.map((text, i) => (
                      <li
                        key={i}
                        className={
                          plan.highlighted
                            ? "flex items-center space-x-3 text-sm font-medium text-foreground"
                            : "flex items-center space-x-3 text-sm text-foreground/80"
                        }
                      >
                        <Check className="w-4 h-4 text-brand-main shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={
                    plan.highlighted
                      ? "w-full py-3 mt-8 text-sm font-semibold rounded-xl bg-brand-main text-white hover:bg-brand-hover transition-colors shadow-md shadow-brand-main/25 cursor-pointer"
                      : "w-full py-3 mt-8 text-sm font-semibold rounded-xl border border-border bg-card text-card-foreground hover:bg-panel-bg transition-colors cursor-pointer"
                  }
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
