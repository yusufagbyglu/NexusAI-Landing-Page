import React from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  id: string | number;
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

export interface FaqProps {
  items?: FaqItem[];
  className?: string;
  title?: string;
  subtitle?: string;
}

const DEFAULT_FAQ_ITEMS: FaqItem[] = [
  {
    id: "getting-started",
    question: "How long does it take to train the AI on our data?",
    answer:
      "It takes less than 10 minutes. Just paste your website URL or upload your knowledge base documents.",
    defaultOpen: true,
  },
  {
    id: "pricing-cancellation",
    question: "Can I integrate NexusAI with my existing CRM?",
    answer:
      "Yes, we support native integrations with Zendesk, Salesforce, HubSpot, Intercom, and 150+ more tools.",
  },
  {
    id: "customer-support",
    question: "What happens if the AI doesn't know the answer?",
    answer:
      "It gracefully hands off the conversation to a human support agent with full chat context.",
  },
  {
    id: "security",
    question: "Is my customer data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest, and we're SOC 2 Type II compliant. Your data is never used to train models for other customers.",
  },
  {
    id: "cancellation",
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. There are no long-term contracts — cancel anytime from your billing settings with no penalty.",
  },
];

export default function Faq({
  items = DEFAULT_FAQ_ITEMS,
  className = "",
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our product and billing.",
}: FaqProps) {
  return (
    <section
      className={`w-full max-w-4xl mx-auto px-4 py-20 sm:py-28 text-foreground transition-colors duration-300 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-14 text-center space-y-3">
          {title && (
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base text-foreground/70">{subtitle}</p>
          )}
        </div>
      )}

      <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
        {items.map(({ id, question, answer, defaultOpen }) => (
          <details
            key={id}
            className="group py-5 [&_summary::-webkit-details-marker]:hidden"
            open={defaultOpen}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-foreground list-none">
              <span className="text-base sm:text-lg font-semibold select-none group-open:text-brand-main transition-colors">
                {question}
              </span>
              <span className="ml-6 flex h-7 items-center">
                <ChevronDown className="w-5 h-5 text-foreground/50 transition-transform duration-300 group-open:rotate-180 group-open:text-brand-main" />
              </span>
            </summary>

            <div className="mt-3 leading-relaxed text-foreground/70 text-sm sm:text-base pr-8">
              {answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
