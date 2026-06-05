"use client";

import BlogCard from "@/app/shared/cards/BlogCard";
import Img from "@/app/shared/Img";
import {
  convertDate,
  extractSectionHeadings,
  getBlogShareUrls,
  headingsToSlug,
} from "@/app/utils/functions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Fragment, useEffect, useMemo, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useScrollToSection } from "@/app/shared";
import useBlogs from "../useHook";
import useHook from "./useHook";

const sidebarPanel =
  "rounded-2xl p-5 space-y-3 bg-[#1a1a1a]/80 backdrop-blur-md border-2 border-[#2a2a2a]";

const getTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children))
    return children.map(getTextFromChildren).join("");
  if (children && typeof children === "object" && "props" in children) {
    return getTextFromChildren(
      (children as { props: { children: React.ReactNode } }).props.children,
    );
  }
  return "";
};

const BlogDetails = ({ data, id }: { data: any; id: string }) => {
  const { blogDetails, activeSlug } = useHook(data);
  const scrollToSection = useScrollToSection();
  const headings = extractSectionHeadings(blogDetails?.description);
  const [shareOrigin, setShareOrigin] = useState<string | undefined>();

  useEffect(() => {
    setShareOrigin(window.location.origin);
  }, []);

  const shareUrls = useMemo(
    () =>
      getBlogShareUrls({
        slug: id,
        title: blogDetails?.title ?? "",
        subtitle: blogDetails?.subtitle,
        postUrl: shareOrigin ? `${shareOrigin}/blogs/${id}` : undefined,
      }),
    [id, blogDetails?.title, blogDetails?.subtitle, shareOrigin],
  );
  const social = [
    {
      name: "LinkedIn",
      icon: <PiLinkedinLogo size={20} className="text-[#84a7b1]" />,
      path: shareUrls.linkedIn,
    },
    {
      name: "X",
      icon: <FaXTwitter size={18} className="text-[#84a7b1]" />,
      path: shareUrls.twitter,
    },
  ];
  const { blogs } = useBlogs();
  const recentBlogs = blogs.filter((r) => r.slug !== id).slice(0, 4);
  const router = useRouter();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white via-[#84a7b1] to-white bg-clip-text text-transparent">
        {blogDetails?.title}
      </h1>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#84a7b1]/10 border border-[#84a7b1]/20">
          <div className="w-5 h-5 rounded-full bg-[#84a7b1] flex items-center justify-center text-white text-[9px] font-bold">
            {blogDetails?.author?.[0]?.toUpperCase()}
          </div>
          <span className="text-[13px] font-medium text-white">
            {blogDetails?.author}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-[#2a2a2a]">
          <FaRegCalendar size={11} className="text-[#84a7b1]" />
          <span className="text-[13px] text-white/70">
            {convertDate(blogDetails?.date)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 lg:gap-16 gap-x-8">
        <div className="lg:col-span-3 sm:col-span-4 sm:block hidden">
          <div className="sticky top-24 lg:top-28 h-fit space-y-6">
            {headings.length > 0 && (
              <div className={sidebarPanel}>
                <p className="font-semibold text-white text-sm">
                  Table of Contents
                </p>
                <div className="space-y-1">
                  {headings.map((item) => {
                    const slug = headingsToSlug(item.text);
                    const isActive = activeSlug === slug;

                    return (
                      <button
                        key={`${item.level}-${item.text}`}
                        onClick={() =>
                          scrollToSection(slug, { replaceHash: true })
                        }
                        className={clsx(
                          "cursor-pointer block w-full text-left text-[13px] py-1.5 px-2 rounded-lg transition-colors border-l-2",
                          isActive
                            ? "text-[#84a7b1] font-medium bg-[#84a7b1]/10 border-[#84a7b1]"
                            : "font-light text-white/60 border-transparent hover:text-[#84a7b1] hover:bg-[#84a7b1]/5",
                        )}
                        style={{
                          paddingLeft: `${(item.level - 2) * 12 + 8}px`,
                        }}
                        aria-current={isActive ? "location" : undefined}
                      >
                        {item.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className={sidebarPanel}>
              <p className="font-semibold text-white text-sm">Share</p>
              <div className="flex gap-2">
                {social.map((item) => (
                  <Link
                    href={item.path}
                    key={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${item.name}`}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 bg-[#84a7b1]/10 border border-[#84a7b1]/20 hover:border-[#84a7b1]/40"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>

            {recentBlogs.length > 0 && (
              <div className={sidebarPanel}>
                <p className="font-semibold text-white text-sm">Recent Posts</p>
                <div className="space-y-3">
                  {recentBlogs.map((item, idx) => (
                    <Fragment key={idx}>
                      <div
                        onClick={() => router.push(`/blogs/${item.slug}`)}
                        className="flex gap-3 cursor-pointer group"
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                          <BlogCard variant="tile" data={item} />
                        </div>
                        <p className="text-[13px] font-medium text-white/80 group-hover:text-[#84a7b1] transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </p>
                      </div>
                      {idx < recentBlogs.length - 1 && (
                        <div className="h-px bg-[#2a2a2a]" />
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-9 sm:col-span-8 col-span-12">
          <div className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl border-2 border-[#2a2a2a] p-6 md:p-8 space-y-8">
            <Img
              src={blogDetails.image}
              height={800}
              width={1000}
              alt={blogDetails.title || "Blog cover"}
              className="rounded-lg w-full max-h-[480px] object-cover"
              priority
            />
            <div className="rce-text wrap-break-word">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => {
                    const text = getTextFromChildren(children);
                    return <h1 id={headingsToSlug(text)}>{children}</h1>;
                  },
                  h2: ({ children }) => {
                    const text = getTextFromChildren(children);
                    return <h2 id={headingsToSlug(text)}>{children}</h2>;
                  },
                  h3: ({ children }) => {
                    const text = getTextFromChildren(children);
                    return <h3 id={headingsToSlug(text)}>{children}</h3>;
                  },
                  h4: ({ children }) => {
                    const text = getTextFromChildren(children);
                    return <h4 id={headingsToSlug(text)}>{children}</h4>;
                  },
                }}
              >
                {blogDetails.description}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
