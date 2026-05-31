import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/v2" },
    ],
    sitemap: "https://heart-studio.vercel.app/sitemap.xml",
  }
}
