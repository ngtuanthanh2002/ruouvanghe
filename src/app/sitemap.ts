import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { WINE_PRODUCTS } from "@/lib/wine-data";
import { WINE_ARTICLES } from "@/lib/article-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

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
      url: `${baseUrl}/kienthuc-ruouvang`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ve-chung-toi`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lien-he`,
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

  // Dynamic knowledge/article routes
  const articleRoutes: MetadataRoute.Sitemap = WINE_ARTICLES.map((article) => ({
    url: `${baseUrl}/kienthuc-ruouvang/${article.slug}`,
    lastModified: new Date(article.modifiedTime),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
