import Link from "next/link";
import { ModeToggle } from "@/components/shared/mode-toggle";

export default function Navbar({ isMobile = false }: { isMobile?: boolean }) {
  const linkStyles = isMobile
    ? "block px-3 py-2 text-base font-medium text-foreground hover:bg-panel-bg rounded-md transition-colors"
    : "text-base font-medium text-foreground/80 hover:text-brand-main transition-colors";

  const containerStyles = isMobile
    ? "px-4 pt-2 pb-2 space-y-1"
    : "hidden md:flex items-center gap-8";

  return (
    <nav className={containerStyles}>
      <Link href="/company" className={linkStyles}>
        Product
      </Link>
      <Link href="/marketplace" className={linkStyles}>
        Solutions
      </Link>
      <Link href="/features" className={linkStyles}>
        Pricing
      </Link>
      <Link href="/features" className={linkStyles}>
        Docs
      </Link>
      <div className={isMobile ? "px-3 py-2" : "ml-2"}>
        <ModeToggle />
      </div>
    </nav>
  );
}
