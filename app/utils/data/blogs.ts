import blogsJson from "./blogs.json";

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

const PAGE_SIZE = 9;

function getPosts(): BlogPost[] {
  return [...(blogsJson.data as BlogPost[])].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostsPage(page: number): BlogPost[] {
  const start = (page - 1) * PAGE_SIZE;
  return getPosts().slice(start, start + PAGE_SIZE);
}

export function getBlogBySlug(slug: string): BlogPost | null {
  return getPosts().find((post) => post.slug === slug) ?? null;
}

export function getAllBlogSlugs(): string[] {
  return getPosts().map((post) => post.slug);
}
