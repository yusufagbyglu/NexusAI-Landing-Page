import Link from "next/link";
import { ArrowRight, Bot, Zap, TrendingUp, Clock } from "lucide-react";

export function SocialProof() {
  const stats = [
    {
      icon: Bot,
      title: "80%",
      description:
        "Automated ticket resolution rate without human intervention",
    },
    {
      icon: Clock,
      title: "< 30s",
      description: "Average first-response time across all customer channels",
    },
    {
      icon: TrendingUp,
      title: "3.5x",
      description: "Boost in support team efficiency and daily capacity",
    },
    {
      icon: Zap,
      title: "24/7",
      description: "Instant, multi-language AI support active around the clock",
    },
  ];

  return (
    <section className="w-full bg-bg-main py-24 md:py-32 lg:py-36 border-t border-border-subtle transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-brand-main tracking-wider uppercase bg-brand-muted px-3 py-1.5 rounded-full inline-block border border-brand-main/20">
              Trusted Worldwide
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.15]">
              Delivering real impact for fast-growing support teams
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              See how automated AI workflows improve your response times and
              reduce operational costs instantly.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-5 text-sm font-semibold">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brand-main text-white hover:bg-brand-hover transition-all shadow-sm shadow-brand-main/20"
              >
                Read Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-card border border-border text-foreground hover:bg-panel-bg transition-all shadow-sm"
              >
                Visit Trust Center
              </Link>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-brand-main/30 transition-all duration-200 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-muted text-brand-main flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-card-foreground">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
