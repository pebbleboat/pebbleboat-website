import type { Metadata } from "next";
import About from "./features/about";
import Contact from "./features/contact";
import Footer from "./components/Footer";
import Hero from "./features/herosection";
import Navbar from "./components/Navbar";
import Services from "./features/services/Services";
import TechStack from "./features/techStack";
import Wheel from "./features/wheel";
import HashScrollHandler from "./components/HashScrollHandler";

export const metadata: Metadata = {
  title:
    "Web & Mobile App Development Agency – We thrive to grow | Pebbleboat",
  description:
    "Web and mobile app development agency building MVPs, web and mobile apps, and full-stack products with fast delivery and transparent process.",
  openGraph: {
    title:
      "Web & Mobile App Development Agency – We thrive to grow | Pebbleboat",
    description:
      "Web and mobile app development agency building MVPs, web and mobile apps, and full-stack products with fast delivery and transparent process.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HashScrollHandler />
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Wheel />
      <Contact />
      <Footer />
    </>
  );
}
