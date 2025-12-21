import About from "./features/about";
import Contact from "./features/contact";
import Footer from "./components/Footer";
import Hero from "./features/herosection";
import Navbar from "./components/Navbar";
import Services from "./features/services/Services";
import TechStack from "./features/techStack";
import Wheel from "./features/wheel";
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
