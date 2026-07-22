import { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools";

const BASE_URL = "https://the-toolbox-alpha.vercel.app"; // TODO: غيّرها لدومينك الحقيقي بعد ربطه

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/contact", "/privacy-policy"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
    })
  );

  const toolPages = TOOLS.map((t) => ({
    url: `${BASE_URL}/tools/${t.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...toolPages];
}
