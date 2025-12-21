"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-black/95 backdrop-blur-md shadow-md border-b border-[#1a1a1a]"
          : "bg-transparent"
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
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/90 hover:text-[#84a7b1] transition-colors font-medium hover:scale-105"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/90 hover:text-[#84a7b1] transition-colors font-medium hover:scale-105"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("tech")}
              className="text-white/90 hover:text-[#84a7b1] transition-colors font-medium hover:scale-105"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#84a7b1] text-white px-6 py-2 rounded-full hover:bg-[#6d8a94] hover:shadow-lg hover:shadow-[#84a7b1]/30 hover:scale-105 transition-all font-medium"
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
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-2 space-y-2 bg-black/98 backdrop-blur-sm border-t border-[#1a1a1a] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-white/90 hover:text-[#84a7b1] transition-colors py-2.5 px-2 rounded-lg hover:bg-[#1a1a1a] font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-white/90 hover:text-[#84a7b1] transition-colors py-2.5 px-2 rounded-lg hover:bg-[#1a1a1a] font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("tech")}
              className="block w-full text-left text-white/90 hover:text-[#84a7b1] transition-colors py-2.5 px-2 rounded-lg hover:bg-[#1a1a1a] font-medium"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full bg-[#84a7b1] text-white px-6 py-3 rounded-full text-center font-medium hover:bg-[#6d8a94] hover:shadow-lg hover:shadow-[#84a7b1]/30 transition-all mt-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
