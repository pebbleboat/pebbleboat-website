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
  title: "Pebbleboat – We thrive to grow",
  description:
    "Service-based startup building scalable products: MVPs, web and mobile apps, full-stack development with fast delivery and a transparent process.",
  openGraph: {
    title: "Pebbleboat – We thrive to grow",
    description:
      "Service-based startup building scalable products: MVPs, web and mobile apps, full-stack development with fast delivery and a transparent process.",
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
