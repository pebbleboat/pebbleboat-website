import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Blogs from "@/app/features/blog";
import { GradientBackground } from "@/app/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs, Updates & More",
  description:
    "Insights on software development, MVPs, delivery velocity, and building products with Pebbleboat.",
  alternates: {
    canonical: "/blogs",
  },
};

const BlogsList = () => {
  return (
    <>
      <Navbar />
      <section className="py-24 bg-black relative overflow-hidden min-h-screen">
        <GradientBackground variant="services" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Blogs />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogsList;
