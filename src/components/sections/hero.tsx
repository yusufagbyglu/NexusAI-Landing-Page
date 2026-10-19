import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  AArrowUp,
  Brain,
  Galaxy,
  Activity,
  ZodiacAquarius,
  AudioLines,
  Bot,
  User,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// Fictional companies — deliberately not real brand logos.
// Showing real, unaffiliated brands here would imply a false partnership/endorsement.
const LOGOS = [
  { name: "Apex", Icon: AArrowUp },
  { name: "Nexus", Icon: Brain },
  { name: "Vortex", Icon: Galaxy },
  { name: "Pulse", Icon: Activity },
  { name: "Nova", Icon: ZodiacAquarius },
  { name: "Echo", Icon: AudioLines },
];

export function Hero() {
  return (
    <section className="bg-bg-main py-14 lg:py-24 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Main Hero Grid Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Heading & CTAs */}
          <div className="space-y-6 lg:col-span-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-main/20 bg-brand-muted px-3.5 py-1 text-xs font-medium text-brand-main transition-colors hover:bg-brand-main/20">
              <span className="flex h-2 w-2 rounded-full bg-brand-main animate-pulse"></span>
              <span>Introducing NexusAI 2.0</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>

            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
              AI-Powered Customer Support That Scales With You
            </h1>

            <p className="max-w-xl text-base text-foreground/70 sm:text-lg leading-relaxed">
              Automate up to 80% of your customer inquiries in minutes, lower
              resolution times, and delight your customers with smart AI agents.
              No coding required.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <Button
                asChild
                variant="brand"
                size="lg"
                className="bg-brand-main hover:bg-brand-hover text-white shadow-lg shadow-brand-main/20"
              >
                <Link href="/register">Start Free Trial</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border bg-card text-foreground hover:bg-panel-bg shadow-sm"
              >
                <Link href="/pricing">Pricing & FAQ</Link>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-md">
              {/* Soft background glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-main to-brand-dark opacity-20 blur-xl"></div>

              {/* Chat Container */}
              <div className="relative rounded-2xl border border-border bg-card/90 backdrop-blur-md p-5 shadow-2xl space-y-4">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-main flex items-center justify-center text-white shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-card-foreground">
                        NexusAI Assistant
                      </h4>
                      <p className="text-[11px] text-emerald-500 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active • 24ms response
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-muted text-brand-main font-semibold border border-brand-main/20">
                    NexusAI Core
                  </span>
                </div>

                {/* Chat Messages */}
                <div className="space-y-3 text-xs">
                  {/* User Message */}
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-chat-user-bg text-card-foreground p-3 rounded-2xl rounded-tr-none max-w-[80%] leading-relaxed">
                      Can I track my order status for #TR-892341?
                    </div>
                    <div className="w-6 h-6 rounded-full bg-chat-user-bg flex items-center justify-center text-foreground/60 shrink-0">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-main flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-chat-ai-bg border border-chat-ai-border text-card-foreground p-3 rounded-2xl rounded-tl-none max-w-[85%] space-y-2">
                      <p className="leading-relaxed">
                        Your package is out for delivery! Estimated arrival is
                        today by 4:00 PM.
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Auto-resolved in
                        1.2s
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Stats Footer */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-foreground/60 border-t border-border-subtle">
                  <span>
                    Auto-resolution rate:{" "}
                    <strong className="text-foreground">88.4%</strong>
                  </span>
                  <span className="text-brand-main font-semibold flex items-center gap-0.5 hover:underline cursor-pointer">
                    Live Demo <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof: Infinite Logo Marquee */}
        <div className="mt-20 lg:mt-28 border-t border-border-subtle pt-12">
          <p className="pb-8 text-center text-xs font-semibold tracking-wider text-foreground/40 uppercase">
            Trusted by over 10,000+ modern teams worldwide
          </p>

          {/* Edge-fade wrapper: overflow hidden + mask so the track fades in/out at the sides */}
          <div
            className="group relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {/* Track: logo list duplicated once so the -50% loop is seamless */}
            <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused] sm:gap-20">
              {[...LOGOS, ...LOGOS].map(({ name, Icon }, index) => (
                <div
                  key={`${name}-${index}`}
                  className="flex shrink-0 items-center gap-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
