"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"; // Correct import

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent transition-colors cursor-pointer"
      type="button"
    >
      {/* 
        We use CSS classes (dark:) to handle the icons. 
        This avoids the need for 'mounted' state and 'useEffect', 
        fixing the ESLint "cascading renders" error.
      */}
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
