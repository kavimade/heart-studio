import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://heart-studio.vercel.app",
      lastModified: "2026-06-01",
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
