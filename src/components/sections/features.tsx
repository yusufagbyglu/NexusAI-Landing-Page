import React from "react";
import {
  CircleCheckBig,
  Zap,
  Clock,
  TrendingUp,
  CheckCircle,
  Workflow,
  MessageSquare,
  Layers,
  ShieldCheck,
  Radio,
} from "lucide-react";

const SECTION_1_FEATURES = [
  "Smart Intent Recognition",
  "Instant Knowledge Base Sync",
  "Human-in-the-loop Escalation",
];

const SECTION_2_FEATURES = [
  "One-click 150+ App Integrations",
  "Multi-language Support (50+ Languages)",
  "Custom AI Tone & Persona Settings",
];

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 pt-4">
    {items.map((feature, index) => (
      <li key={index} className="flex items-center gap-3">
        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-brand-muted text-brand-main">
          <CircleCheckBig className="w-4 h-4" />
        </span>
        <span className="text-base font-medium text-foreground">{feature}</span>
      </li>
    ))}
  </ul>
);

export const Features = () => {
  return (
    <section className="bg-bg-main w-full bg-panel-bg py-16 lg:py-24 border-y border-border-subtle transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        {/* First Feature Block: With Analytics UI Mockup */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              Resolve tickets in seconds, not hours
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              NexusAI instantly analyzes customer intent, pulls answers from
              your knowledge base, and resolves repetitive tickets
              automatically.
            </p>

            <div className="pt-2 border-t border-border-subtle space-y-6">
              <FeatureList items={SECTION_1_FEATURES} />
              <p className="text-base text-foreground/60 leading-relaxed pt-2">
                Deliver great service experiences fast — without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
          </div>

          {/* Analytics UI Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-main">
                  Real-time AI Analytics
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <TrendingUp className="w-3 h-3" /> +65% Ticket Efficiency
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1 text-foreground/80">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" /> AI
                      Auto-Resolution Rate
                    </span>
                    <span className="font-mono text-brand-main">82.4%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-border-subtle overflow-hidden">
                    <div className="h-full bg-brand-main rounded-full w-[82%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1 text-foreground/80">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-500" /> Avg First
                      Response Time
                    </span>
                    <span className="font-mono text-emerald-500">
                      1.2s (vs 45m human)
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-border-subtle overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[94%]"></div>
                  </div>
                </div>
              </div>

              {/* Log Item */}
              <div className="p-3.5 rounded-xl bg-panel-bg border border-border-subtle text-xs space-y-1">
                <div className="flex items-center justify-between font-semibold text-card-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />{" "}
                    Ticket #4029 Resolved
                  </span>
                  <span className="text-[10px] text-foreground/40 font-normal">
                    Just now
                  </span>
                </div>
                <p className="text-foreground/60 text-[11px]">
                  Knowledge base matched: &ldquo;Refund & Cancellation Policy
                  v2&ldquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature Block: With Integrations Hub UI Mockup */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Tech Stack Hub Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-xl flex flex-col items-center justify-center min-h-[320px] relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(var(--brand-main)_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-main to-brand-dark flex items-center justify-center text-white shadow-lg shadow-brand-main/25">
                  <Workflow className="w-7 h-7" />
                </div>
                <span className="mt-2 text-xs font-extrabold tracking-wider text-card-foreground uppercase">
                  NexusAI Engine
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 w-full relative z-10">
                {[
                  { name: "Slack", icon: MessageSquare, status: "Connected" },
                  { name: "Zendesk", icon: Layers, status: "Connected" },
                  {
                    name: "Salesforce",
                    icon: ShieldCheck,
                    status: "Connected",
                  },
                  { name: "Webhooks", icon: Radio, status: "Ready" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-border-subtle bg-panel-bg flex flex-col items-center text-center space-y-1 hover:border-brand-main/50 transition-colors"
                  >
                    <item.icon className="w-4 h-4 text-brand-main" />
                    <span className="text-xs font-bold text-card-foreground">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-emerald-500 font-medium">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              Seamlessly connects with your existing tech stack
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Integrate NexusAI with Zendesk, Intercom, Salesforce, and Slack in
              less than 5 minutes with zero technical setup.
            </p>

            <div className="pt-2 border-t border-border-subtle">
              <FeatureList items={SECTION_2_FEATURES} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
