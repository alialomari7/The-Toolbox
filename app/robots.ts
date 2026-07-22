import { MetadataRoute } from "next";

const BASE_URL = "https://the-toolbox-alpha.vercel.app"; // TODO: غيّرها لدومينك الحقيقي بعد ربطه

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
