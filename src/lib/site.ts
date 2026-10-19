const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteConfig = {
  name: "NexusAI",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (productionHost ? `https://${productionHost}` : "http://localhost:3000"),
  title: "NexusAI — AI-Powered Customer Support That Scales With You",
  description:
    "Automate up to 80% of customer inquiries in minutes. NexusAI resolves repetitive tickets instantly and connects with Zendesk, Intercom, Salesforce and Slack.",
  shortDescription:
    "Automate up to 80% of customer inquiries in minutes with NexusAI's smart AI agents.",
  locale: "en_US",
  language: "en",
  themeColor: { light: "#ffffff", dark: "#0a0a0a" },
  brandColor: "#7c3aed",
  lastUpdated: "2026-10-04", // Only update when the content actually changes.
  sameAs: [] as string[], // Add your real profile URLs here.
} as const;

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();
