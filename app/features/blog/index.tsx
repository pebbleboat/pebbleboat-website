// app/features/blog/index.tsx
"use client";

import Img from "@/app/shared/Img";
import { Button, SectionHeader } from "@/app/shared";
import { IBlogCard } from "@/app/shared/cards/BlogCard";
import Link from "next/link";
import useHook from "./useHook";

const cardBase =
  "group cursor-pointer rounded-2xl border-2 border-[#2a2a2a] bg-[#1a1a1a]/80 backdrop-blur-md transition-all duration-300 hover:border-[#84a7b1] hover:shadow-lg hover:shadow-[#84a7b1]/10";

const FeaturedCard = ({ data }: { data: IBlogCard }) => (
  <Link
    href={`/blogs/${data.slug}`}
    className={`${cardBase} grid md:grid-cols-2 gap-8 items-center p-6`}
  >
    <div className="overflow-hidden rounded-xl aspect-video bg-[#0a0a0a]">
      <Img
        src={data.image}
        width={700}
        height={400}
        alt={data.title}
        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
      />
    </div>
    <div className="space-y-4">
      <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-[#84a7b1]/10 text-[#84a7b1] border border-[#84a7b1]/20">
        Featured
      </span>
      <h2 className="font-bold text-white text-2xl leading-snug group-hover:text-[#84a7b1] transition-colors">
        {data.title}
      </h2>
      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
        {data.subtitle}
      </p>
      <div className="flex items-center gap-3 pt-1">
        <div className="w-7 h-7 rounded-full bg-[#84a7b1] flex items-center justify-center text-white text-[10px] font-bold">
          {data.author?.[0]?.toUpperCase()}
        </div>
        <span className="text-[13px] text-white/60">
          {data.author} · {data.createdAt}
        </span>
      </div>
    </div>
  </Link>
);

const PostCard = ({ data }: { data: IBlogCard }) => (
  <Link
    href={`/blogs/${data.slug}`}
    className={`${cardBase} flex flex-col overflow-hidden`}
  >
    <div className="overflow-hidden aspect-video bg-[#0a0a0a]">
      <Img
        src={data.image}
        width={500}
        height={280}
        alt={data.title}
        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
      />
    </div>
    <div className="p-5 flex flex-col flex-1 space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#84a7b1] flex items-center justify-center text-white text-[9px] font-bold">
          {data.author?.[0]?.toUpperCase()}
        </div>
        <span className="text-[12px] text-white/50">
          {data.author} · {data.createdAt}
        </span>
      </div>
      <h3 className="font-semibold text-white text-[15px] leading-snug group-hover:text-[#84a7b1] transition-colors line-clamp-2">
        {data.title}
      </h3>
      <p className="text-white/60 text-[13px] leading-relaxed line-clamp-2 flex-1">
        {data.subtitle}
      </p>
      <div className="flex items-center gap-1 text-[#84a7b1] font-medium text-[13px] pt-1">
        Read more
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="group-hover:translate-x-0.5 transition-transform"
          aria-hidden
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </Link>
);

type BlogsProps = {
  initialBlogs: IBlogCard[];
  initialHasMore: boolean;
};

const Blogs = ({ initialBlogs, initialHasMore }: BlogsProps) => {
  const { blogs, isFetchingMore, hasMore, loadMore } = useHook(
    initialBlogs,
    initialHasMore,
  );

  if (!blogs.length) {
    return (
      <div className="h-[400px] flex flex-col justify-center items-center space-y-3">
        <h2 className="font-bold text-xl text-white">No Posts Found</h2>
        <p className="text-white/60 text-sm">Check back soon for new content</p>
      </div>
    );
  }

  const [featured, ...rest] = blogs;

  return (
    <div className="space-y-14">
      <SectionHeader
        title="Insights & Updates"
        subtitle="Software development, delivery velocity, and building products the right way."
      />

      {featured && <FeaturedCard data={featured} />}

      {rest.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((item) => (
            <PostCard key={item.id} data={item} />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            onClick={loadMore}
            isLoading={isFetchingMore}
            disabled={isFetchingMore}
          >
            {isFetchingMore ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
