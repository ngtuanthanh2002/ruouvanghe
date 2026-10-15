import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { WINE_PRODUCTS } from "@/lib/wine-data";
import { getBlogPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const currentDate = new Date("2026-03-25T00:00:00.000Z");

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/san-pham`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ve-chung-toi`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/chinh-sach`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic product routes
  const productRoutes: MetadataRoute.Sitemap = WINE_PRODUCTS.map((wine) => ({
    url: `${baseUrl}/san-pham/${wine.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    ...(await getBlogPosts()).map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
