import React from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function CallToAction({
  title = "Ready to transform your customer support?",
  description = "Join 10,000+ teams serving happy customers 24/7 with NexusAI. Start your 14-day free trial today.",
  primaryBtnText = "Start Free Trial",
  secondaryBtnText = "Schedule a Demo",
  onPrimaryClick,
  onSecondaryClick,
}: CallToActionProps) {
  return (
    <section className="py-20 md:py-28 bg-bg-main overflow-hidden border-t border-border-subtle transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative rounded-3xl border border-border bg-gradient-to-b from-panel-bg via-card to-panel-bg p-8 md:p-16 text-center space-y-8 shadow-xl shadow-brand-main/5 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-main/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-brand-main/20 bg-brand-muted px-3.5 py-1 text-xs font-medium text-brand-main shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-main animate-pulse" />
            <span>Start in under 5 minutes • No credit card required</span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight tracking-tight text-foreground max-w-3xl mx-auto relative z-10">
            {title}
          </h2>

          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10 pt-2">
            <button
              onClick={onPrimaryClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-brand-main hover:bg-brand-hover rounded-xl transition-all shadow-lg shadow-brand-main/20 cursor-pointer"
            >
              {primaryBtnText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={onSecondaryClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-foreground bg-card border border-border hover:bg-panel-bg rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              {secondaryBtnText}
            </button>
          </div>

          <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-foreground/60 relative z-10">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 14-day free
              trial
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" /> Instant 5-min setup
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-main" /> Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
