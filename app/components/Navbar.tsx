"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button, cn, useScrollToSection, Img } from "../shared";
import { SvgMenuToggle } from "../utils/svgs";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-black/95 backdrop-blur-md shadow-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      } ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20 min-h-[4rem]">
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Img
              src="/images/logo.webp"
              alt="Pebbleboat"
              width={120}
              height={48}
              className="h-10 lg:h-12 w-auto"
              priority
            />
            <span className="text-xl lg:text-2xl font-bold text-white">
              Pebbleboat
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: "services", label: "Services" },
              { id: "about", label: "About" },
              { id: "tech", label: "Tech Stack" },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-white/90 hover:text-[#84a7b1] transition-all duration-300 font-medium hover:scale-105 cursor-pointer ${
                  isMounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
                style={{
                  transitionDelay: isMounted ? `${index * 100 + 200}ms` : "0ms",
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contact")}
              variant="primary"
              rounded="full"
              className={cn(
                "py-2 px-4",
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              )}
              style={{
                transitionDelay: isMounted ? "500ms" : "0ms",
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-white/90 hover:text-[#84a7b1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#84a7b1] focus:ring-offset-2 focus:ring-offset-black rounded-lg cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <SvgMenuToggle isOpen={isMobileMenuOpen} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-2 space-y-2 bg-black/98 backdrop-blur-sm border-t border-[#1a1a1a] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            {[
              { id: "services", label: "Services" },
              { id: "about", label: "About" },
              { id: "tech", label: "Tech Stack" },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left text-white/90 hover:text-[#84a7b1] transition-all duration-300 py-2.5 px-2 rounded-lg hover:bg-[#1a1a1a] font-medium hover:translate-x-2 cursor-pointer ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 100}ms`
                    : "0ms",
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contact")}
              variant="primary"
              size="md"
              rounded="full"
              className={`block w-full mt-2 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? "300ms" : "0ms",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
