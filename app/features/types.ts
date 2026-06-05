export interface IBlogDetails {
  title?: string;
  subtitle?: string;
  description?: string;
  publishedAt?: string;
  createdAt?: string;
  author?: string;
  slug?: string;
  documentId?: string;
  coverImage?: { url?: string };
  authorImage?: { url?: string };
}
