import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { cn } from "@/lib/utils";

// Body font
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

// Heading font
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "NexusAI — AI-Powered Customer Support That Scales With You",
    template: "%s | NexusAI",
  },
  description:
    "Automate up to 80% of your customer inquiries in minutes. NexusAI resolves repetitive tickets instantly, connects with your existing tech stack, and lets your team focus on what matters.",
  keywords: [
    "AI customer support",
    "AI helpdesk",
    "customer support automation",
    "AI chatbot",
    "ticket automation",
  ],
  openGraph: {
    title: "NexusAI — AI-Powered Customer Support That Scales With You",
    description:
      "Automate up to 80% of your customer inquiries in minutes. NexusAI resolves repetitive tickets instantly, connects with your existing tech stack, and lets your team focus on what matters.",
    url: "https://yourdomain.com",
    siteName: "NexusAI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusAI — AI-Powered Customer Support That Scales With You",
    description:
      "Automate up to 80% of your customer inquiries in minutes with NexusAI's smart AI agents.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable, bricolage.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
