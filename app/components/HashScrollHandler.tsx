"use client";

import { useEffect } from "react";
import { useScrollToSection } from "../shared";

export default function HashScrollHandler() {
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.slice(1);

      if (hash) {
        const timer = setTimeout(() => {
          scrollToSection(hash, "smooth");
        }, 300);

        return () => clearTimeout(timer);
      }
    };

    handleHashScroll();

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash, "smooth");
        }, 100);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [scrollToSection]);

  return null;
}
