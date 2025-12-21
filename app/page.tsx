import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Wheel from "./components/Wheel";
export default function Home() {
  return (
    <>
      <Navbar />
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
