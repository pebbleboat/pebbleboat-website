// app/features/blog/useHook.ts
import { blogPosts } from "@/app/apis";
import { IBlogCard } from "@/app/shared/cards/BlogCard";
import { convertDate, getBlogCoverImage } from "@/app/utils/functions";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";

interface IBlog {
  author: string;
  publishedAt: string;
  title: string;
  subtitle: string;
  coverImage: { url: string };
  slug: string;
  documentId: string;
}

const useHook = () => {
  const [page, setPage] = useState(1);
  const [blogList, setBlogList] = useState<IBlogCard[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["blogPosts", page],
    queryFn: () => blogPosts(page),
  });

  const blogs: IBlogCard[] = useMemo(() => {
    // ✅ Add this check - data is undefined until the API call completes
    if (!data || !Array.isArray(data)) {
      return [];
    }

    const mapped = data.map((item: IBlog) => ({
      id: item.documentId,
      author: item.author,
      createdAt: convertDate(item.publishedAt),
      title: item.title,
      subtitle: item.subtitle,
      image: getBlogCoverImage(item.coverImage?.url),
      slug: item.slug,
    }));

    return mapped;
  }, [data]);

  // Reset blog list when page resets to 1
  useEffect(() => {
    if (page === 1) {
      setBlogList([]);
      setHasMore(true);
    }
  }, [page]);

  // Add new blogs to the list with deduplication
  useEffect(() => {
    if (!data || !Array.isArray(data)) return;

    if (blogs.length > 0) {
      setBlogList((prev) => {
        const existingIds = new Set(prev.map((blog) => blog.id));
        const newBlogs = blogs.filter((blog) => !existingIds.has(blog.id));

        return [...prev, ...newBlogs];
      });
    }

    setHasMore(data.length >= 9);
  }, [blogs, data]);

  const loadMore = () => {
    if (hasMore && !isFetching) {
      setPage((prev) => prev + 1);
    }
  };

  return {
    blogs: blogList,
    isLoading: isLoading && page === 1,
    isFetchingMore: isFetching && page > 1,
    total: data?.length,
    page,
    setPage,
    hasMore,
    loadMore,
  };
};

export default useHook;