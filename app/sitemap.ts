import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://itslhuis.github.io/vela",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ]
}
