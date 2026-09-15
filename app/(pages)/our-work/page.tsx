import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Works from "@/app/features/works";
import { GradientBackground } from "@/app/shared";
import { getAllProjects } from "@/app/utils/data/works";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pebbleboat.com";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Pebbleboat",
  description:
    "Explore our portfolio of scalable web applications, mobile apps, 3D interactive experiences, and digital products engineered by Pebbleboat.",
  openGraph: {
    title: "Our Work & Case Studies | Pebbleboat",
    description:
      "Explore our portfolio of scalable web applications, mobile apps, 3D interactive experiences, and digital products engineered by Pebbleboat.",
    url: `${baseUrl}/our-work`,
  },
  alternates: {
    canonical: "/our-work",
  },
};

const OurWorkPage = () => {
  const projects = getAllProjects();

  return (
    <>
      <Navbar />
      <section className="py-24 bg-black relative overflow-hidden min-h-screen">
        <GradientBackground variant="services" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-8 sm:pt-12">
          <Works initialProjects={projects} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurWorkPage;
