"use client";

import { useState, useEffect, useRef } from "react";
import { SvgLinkedIn, SvgTwitter } from "../utils/svgs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(footerRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  };

  const renderIcon = (iconType: "linkedin" | "twitter" | "github") => {
    switch (iconType) {
      case "linkedin":
        return <SvgLinkedIn />;
      case "twitter":
        return <SvgTwitter />;
      case "github":
        return null; // GitHub icon not used in socialLinks
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/pebbleboat",
      iconType: "linkedin" as const,
    },
    {
      name: "Twitter",
      href: "https://x.com/pebbleboat",
      iconType: "twitter" as const,
    },
  ];

  return (
    <footer ref={footerRef} className="bg-black text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div
            className={`col-span-1 md:col-span-2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#84a7b1] via-white to-[#84a7b1] bg-clip-text text-transparent mb-4">
              Pebbleboat
            </h3>
            <p className="text-white/70 mb-4 max-w-md">
              Transforming ideas into digital reality. We build scalable
              products that drive business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-white/70 hover:text-[#84a7b1] transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  aria-label={social.name}
                  style={{
                    transitionDelay: isVisible
                      ? `${index * 100 + 200}ms`
                      : "0ms",
                  }}
                >
                  {renderIcon(social.iconType)}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li
                  key={link.name}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${index * 100 + 400}ms`
                      : "0ms",
                  }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    className="text-white/70 hover:text-[#84a7b1] transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li
                  key={link.name}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${index * 100 + 500}ms`
                      : "0ms",
                  }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#84a7b1] transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
        >
          <p className="text-white/70 text-sm">
            © {currentYear} Pebbleboat. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-white/70 hover:text-[#84a7b1] text-sm transition-colors hover:scale-105 inline-block"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-[#84a7b1] text-sm transition-colors hover:scale-105 inline-block"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
