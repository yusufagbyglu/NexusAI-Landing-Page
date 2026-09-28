"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./navbar";
import { MicSignal, Bot } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-card/90 backdrop-blur-md border-b border-border-subtle sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br from-brand-main to-brand-hover text-white shadow-sm shadow-brand-main/20">
              {/* <MicSignal className="w-6 h-6 group-hover:scale-110 transition-transform" /> */}
              <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-heading text-2xl font-bold text-foreground">
              NexusAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <Navbar />

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-base font-medium text-foreground/80 hover:text-brand-main transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-brand-main hover:bg-brand-hover rounded-lg transition-colors shadow-sm shadow-brand-main/20"
            >
              Get started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground/70 hover:bg-panel-bg rounded-lg transition-colors cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-card">
          <Navbar isMobile={true} />

          <div className="px-4 pb-6 pt-2 flex flex-col gap-3">
            <Link
              href="/login"
              className="block w-full text-center px-3 py-2 text-base font-medium text-foreground border border-border rounded-lg hover:bg-panel-bg transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-brand-main hover:bg-brand-hover rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
