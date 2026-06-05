import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://heartstudiodn.com",
      lastModified: "2026-06-01",
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
