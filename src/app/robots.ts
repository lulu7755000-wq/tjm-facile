import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lulu7755000-wq.github.io/tjm-facile/sitemap.xml",
  };
}
