import type { IBlogCard } from "@/app/shared/cards/BlogCard";
import { convertDate, getBlogCoverImage } from "@/app/utils/functions";
import blogsJson from "./blogs.json";

export const BLOG_PAGE_SIZE = 9;

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  author: string;
  description: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  coverImage: { url?: string };
  authorImage?: { url?: string };
}

function getPosts(): BlogPost[] {
  return [...(blogsJson.data as BlogPost[])].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostsPage(page: number): BlogPost[] {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return getPosts().slice(start, start + BLOG_PAGE_SIZE);
}

export function mapBlogPostToCard(post: BlogPost): IBlogCard {
  return {
    id: post.documentId,
    author: post.author,
    createdAt: convertDate(post.publishedAt),
    title: post.title,
    subtitle: post.subtitle,
    image: getBlogCoverImage(post.coverImage?.url),
    slug: post.slug,
  };
}

export function getBlogCardsPage(page: number): IBlogCard[] {
  return getBlogPostsPage(page).map(mapBlogPostToCard);
}

export function blogPageHasMore(page: number): boolean {
  return getBlogPostsPage(page).length >= BLOG_PAGE_SIZE;
}

export function getRecentBlogCards(
  excludeSlug: string,
  limit = 4,
): IBlogCard[] {
  return getPosts()
    .filter((post) => post.slug !== excludeSlug)
    .slice(0, limit)
    .map(mapBlogPostToCard);
}

export function getBlogBySlug(slug: string): BlogPost | null {
  return getPosts().find((post) => post.slug === slug) ?? null;
}

export function getAllBlogSlugs(): string[] {
  return getPosts().map((post) => post.slug);
}
