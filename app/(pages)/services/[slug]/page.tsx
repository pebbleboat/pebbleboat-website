import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { GradientBackground, Button } from "../../../shared";
import Link from "next/link";
import { getServiceBySlug, getAllServiceSlugs } from "../../../utils/data/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Pebbleboat",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pebbleboat.com";

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.desc,
      url: `${baseUrl}/services/${slug}`,
    },
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <section className="py-24 bg-black relative overflow-hidden min-h-screen">
        <GradientBackground variant="services" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#84a7b1] to-white bg-clip-text text-transparent">
              {service.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {service.desc}
            </p>
          </div>

          <div className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border-2 border-[#2a2a2a] mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">What We Offer</h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#84a7b1] text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link href="/#contact">
              <Button variant="primary" size="lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

