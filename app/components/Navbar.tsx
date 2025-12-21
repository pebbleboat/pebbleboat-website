"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-black/95 backdrop-blur-md shadow-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      } ${
        isMounted
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20 min-h-[4rem]">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/logo.png"
              alt="Pebbleboat"
              className="h-10 lg:h-12 w-auto"
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
                onClick={() => scrollToSection(item.id)}
                className={`text-white/90 hover:text-[#84a7b1] transition-all duration-300 font-medium hover:scale-105 ${
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
            <button
              onClick={() => scrollToSection("contact")}
              className={`bg-[#84a7b1] text-white px-6 py-2 rounded-full hover:bg-[#6d8a94] hover:shadow-lg hover:shadow-[#84a7b1]/30 hover:scale-105 transition-all duration-300 font-medium ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
              style={{
                transitionDelay: isMounted ? "500ms" : "0ms",
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-white/90 hover:text-[#84a7b1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#84a7b1] focus:ring-offset-2 focus:ring-offset-black rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6 flex-shrink-0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              preserveAspectRatio="xMidYMid meet"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
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
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-white/90 hover:text-[#84a7b1] transition-all duration-300 py-2.5 px-2 rounded-lg hover:bg-[#1a1a1a] font-medium hover:translate-x-2 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className={`block w-full bg-[#84a7b1] text-white px-6 py-3 rounded-full text-center font-medium hover:bg-[#6d8a94] hover:shadow-lg hover:shadow-[#84a7b1]/30 transition-all duration-300 mt-2 hover:scale-105 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? "300ms" : "0ms",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
