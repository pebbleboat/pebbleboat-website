"use client";

import { useState, useEffect } from "react";
import { SvgWhatsApp } from "../utils/svgs";

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+917376190196"; // WhatsApp number without + for URL
  const message = encodeURIComponent(
    "Hello! I'm interested in learning more about your services."
  );

  useEffect(() => {
    // Show widget after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Chat with us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <SvgWhatsApp />

        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>

        {/* Tooltip on hover */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[#1a1a1a] text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap border border-[#84a7b1]/30">
            <p className="text-sm font-medium">Chat with us!</p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-[#1a1a1a] border-r border-b border-[#84a7b1]/30 transform rotate-45"></div>
          </div>
        </div>
      </button>
    </div>
  );
}

