import { MetadataRoute } from "next";
import { getAllBlogSlugs, getBlogBySlug } from "./utils/data/blogs";
import { getAllServiceSlugs } from "./utils/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Force apex domain even if env accidentally includes www.
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace("//www.", "//") ||
    "https://pebbleboat.com";
  const lastModified = new Date("2025-01-01");

  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = getAllBlogSlugs().map((slug) => {
    const post = getBlogBySlug(slug);
    return {
      url: `${baseUrl}/blogs/${slug}`,
      lastModified: post
        ? new Date(post.updatedAt || post.publishedAt)
        : lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...servicePages,
    ...blogPages,
  ];
}
