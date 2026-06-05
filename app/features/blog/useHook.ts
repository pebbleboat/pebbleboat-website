import { blogPosts } from "@/app/apis";
import { BLOG_PAGE_SIZE } from "@/app/utils/data/blogs";
import { IBlogCard } from "@/app/shared/cards/BlogCard";
import { convertDate, getBlogCoverImage } from "@/app/utils/functions";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface IBlog {
  author: string;
  publishedAt: string;
  title: string;
  subtitle: string;
  coverImage: { url: string };
  slug: string;
  documentId: string;
}

const mapApiBlogToCard = (item: IBlog): IBlogCard => ({
  id: item.documentId,
  author: item.author,
  createdAt: convertDate(item.publishedAt),
  title: item.title,
  subtitle: item.subtitle,
  image: getBlogCoverImage(item.coverImage?.url),
  slug: item.slug,
});

const useHook = (initialBlogs: IBlogCard[], initialHasMore: boolean) => {
  const [page, setPage] = useState(1);
  const [blogList, setBlogList] = useState<IBlogCard[]>(initialBlogs);
  const [hasMore, setHasMore] = useState(initialHasMore);

  const { data, isFetching } = useQuery({
    queryKey: ["blogPosts", page],
    queryFn: () => blogPosts(page),
    enabled: page > 1,
  });

  useEffect(() => {
    if (page === 1 || !data || !Array.isArray(data)) return;

    const mapped = data.map((item: IBlog) => mapApiBlogToCard(item));

    setBlogList((prev) => {
      const existingIds = new Set(prev.map((blog) => blog.id));
      const newBlogs = mapped.filter((blog) => !existingIds.has(blog.id));
      return [...prev, ...newBlogs];
    });

    setHasMore(data.length >= BLOG_PAGE_SIZE);
  }, [data, page]);

  const loadMore = () => {
    if (hasMore && !isFetching) {
      setPage((prev) => prev + 1);
    }
  };

  return {
    blogs: blogList,
    isFetchingMore: isFetching && page > 1,
    hasMore,
    loadMore,
  };
};

export default useHook;
