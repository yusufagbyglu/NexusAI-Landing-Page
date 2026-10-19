import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const vercelEnv = process.env.VERCEL_ENV;
  const indexable = !vercelEnv || vercelEnv === "production";
  return {
    rules: indexable
      ? [{ userAgent: "*", allow: "/" }]
      : [{ userAgent: "*", disallow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
