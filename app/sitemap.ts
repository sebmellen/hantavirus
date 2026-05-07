import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hantavir.us";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-05-07T00:00:00.000Z"),
      changeFrequency: "hourly",
      priority: 1,
    },
  ];
}
