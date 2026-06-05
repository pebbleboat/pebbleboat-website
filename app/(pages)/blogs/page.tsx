import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Blogs from "@/app/features/blog";
import { GradientBackground } from "@/app/shared";
import {
  blogPageHasMore,
  getBlogCardsPage,
} from "@/app/utils/data/blogs";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pebbleboat.com";

export const metadata: Metadata = {
  title: "Blogs, Updates & More",
  description:
    "Insights on software development, MVPs, delivery velocity, and building products with Pebbleboat.",
  openGraph: {
    title: "Blogs, Updates & More | Pebbleboat",
    description:
      "Insights on software development, MVPs, delivery velocity, and building products with Pebbleboat.",
    url: `${baseUrl}/blogs`,
  },
  alternates: {
    canonical: "/blogs",
  },
};

const BlogsList = async () => {
  const initialBlogs = getBlogCardsPage(1);
  const initialHasMore = blogPageHasMore(1);

  return (
    <>
      <Navbar />
      <section className="py-24 bg-black relative overflow-hidden min-h-screen">
        <GradientBackground variant="services" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Blogs initialBlogs={initialBlogs} initialHasMore={initialHasMore} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogsList;
