import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { getCatalogProducts } from "@/lib/catalog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getCatalogProducts();
  const pages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/productos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/servicio-tecnico`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/empresa`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteConfig.url}/contacto`, changeFrequency: "yearly", priority: 0.7 },
  ];

  return [
    ...pages,
    ...products.map((product) => ({
      url: `${siteConfig.url}/productos/${product.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: product.image ? [product.image] : undefined,
    })),
  ];
}
