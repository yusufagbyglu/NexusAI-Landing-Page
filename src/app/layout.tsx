import type { Metadata, Viewport } from "next";
import { Geist, Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

// Body font
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

// Heading font
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/opengraph-image.png",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: siteConfig.themeColor.light,
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: siteConfig.themeColor.dark,
    },
  ],
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
