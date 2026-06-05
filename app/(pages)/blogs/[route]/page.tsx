import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogDetails from "@/app/features/blog/blogDetails";
import { GradientBackground } from "@/app/shared";
import { getBlogBySlug } from "@/app/utils/data/blogs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ route: string }>;
};

export async function generateStaticParams() {
  const { getAllBlogSlugs } = await import("@/app/utils/data/blogs");
  return getAllBlogSlugs().map((route) => ({ route }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { route } = await params;
  const post = getBlogBySlug(route);

  if (!post) {
    return { title: "Blog Not Found" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pebbleboat.com";
  const postUrl = `${baseUrl}/blogs/${post.slug}`;
  const coverUrl = post.coverImage?.url?.trim();
  const ogImage = coverUrl
    ? coverUrl.startsWith("http")
      ? coverUrl
      : `${baseUrl}${coverUrl.startsWith("/") ? "" : "/"}${coverUrl}`
    : `${baseUrl}/images/logo.webp`;

  return {
    title: post.title,
    description: post.subtitle,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.subtitle,
      url: postUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      images: [ogImage],
    },
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
  };
}

const BlogDetailPage = async ({ params }: PageProps) => {
  const { route } = await params;
  const data = getBlogBySlug(route);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <section className="py-24 bg-black relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <GradientBackground variant="services" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <BlogDetails id={route} data={data} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
