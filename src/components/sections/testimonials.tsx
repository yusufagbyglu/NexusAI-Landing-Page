import Image from "next/image";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="w-full bg-bg-main py-20 md:py-28 border-b border-border-subtle transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-6">
        {/* Star Rating */}
        <div className="flex justify-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400" />
          ))}
        </div>

        {/* Quote Text */}
        <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed tracking-tight">
          &ldquo;NexusAI reduced our customer support ticket volume by 65% in
          the very first month. Our team now focuses only on complex cases while
          the AI handles the rest seamlessly.&rdquo;
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center justify-center space-x-3 pt-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-main/20 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="Sarah Jenkins"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm font-medium text-foreground sm:divide-x sm:divide-border-subtle text-left">
            <span className="sm:pr-3 font-bold text-foreground">
              Sarah Jenkins
            </span>
            <span className="sm:pl-3 text-foreground/60">
              Head of Customer Experience at TechScale
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
