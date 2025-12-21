"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#84a7b1]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-[#84a7b1]/8 rounded-full blur-[140px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Left Side - Text Content */}
          <div className="space-y-4 lg:space-y-5 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84a7b1]/10 border border-[#84a7b1]/20 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-[#84a7b1] rounded-full animate-pulse" />
              <span className="text-xs text-[#84a7b1] font-medium uppercase tracking-wide">
                Design-First Development
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] tracking-tight">
              <span className="text-white block mb-1">Transform Your</span>
              <span className="bg-gradient-to-r from-[#84a7b1] via-white to-[#84a7b1] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient block mb-1">
                Ideas Into
              </span>
              <span className="text-white block">Digital Reality</span>
            </h1>

            {/* Description */}
            <div className="space-y-2 pt-1">
              <p className="text-sm md:text-base lg:text-lg text-white/90 font-light leading-relaxed max-w-xl">
                We're a service-based startup helping businesses build scalable products that drive growth.
              </p>
              <p className="text-xs md:text-sm text-white/60 font-light max-w-xl">
                From MVP development to full-scale solutions, we deliver cutting-edge technology tailored to your needs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={scrollToContact}
                className="group relative px-6 py-3 bg-[#84a7b1] text-white rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#84a7b1]/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6d8a94] to-[#84a7b1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-6 py-3 border-2 border-white/20 text-white rounded-lg font-semibold text-sm bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:shadow-md hover:shadow-white/10 transition-all duration-300"
              >
                See Our Work
              </button>
            </div>
          </div>

          {/* Right Side - Abstract Visual */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            {/* Abstract Geometric Shapes */}
            <div className="relative w-full h-full">
              {/* Large main rectangle with glow */}
              <div className="absolute top-1/4 left-1/4 w-36 h-36 md:w-48 md:h-48 bg-gradient-to-br from-[#84a7b1]/25 to-[#84a7b1]/10 rounded-2xl rotate-12 backdrop-blur-md border border-[#84a7b1]/40 shadow-[0_0_30px_rgba(132,167,177,0.2)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(132,167,177,0.3)]" />
              
              {/* Medium rectangle with gradient */}
              <div className="absolute top-1/2 right-1/4 w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-[#84a7b1]/20 to-transparent rounded-xl -rotate-12 backdrop-blur-md border border-[#84a7b1]/30 shadow-lg" />
              
              {/* Floating diamond/square */}
              <div className="absolute top-1/3 right-1/3 w-20 h-20 md:w-24 md:h-24 bg-white/15 rounded-xl rotate-45 backdrop-blur-md border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)] animate-pulse" style={{ animationDuration: '3s' }} />
              
              {/* Code block with enhanced design */}
              <div className="absolute bottom-1/4 left-1/3 w-32 h-24 md:w-40 md:h-32 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl border border-[#84a7b1]/40 p-4 backdrop-blur-sm shadow-2xl">
                <div className="space-y-2">
                  <div className="h-1.5 bg-gradient-to-r from-[#84a7b1]/60 to-[#84a7b1]/40 rounded-full w-full" />
                  <div className="h-1.5 bg-gradient-to-r from-[#84a7b1]/50 to-[#84a7b1]/30 rounded-full w-4/5" />
                  <div className="h-1.5 bg-gradient-to-r from-[#84a7b1]/60 to-[#84a7b1]/40 rounded-full w-full" />
                  <div className="h-1.5 bg-gradient-to-r from-[#84a7b1]/50 to-[#84a7b1]/30 rounded-full w-3/5" />
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#84a7b1] rounded-full animate-pulse" />
              </div>

              {/* Large circle with ring */}
              <div className="absolute top-1/4 right-1/4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#84a7b1]/30 to-[#84a7b1]/10 rounded-full border-2 border-[#84a7b1]/50 backdrop-blur-md shadow-[0_0_25px_rgba(132,167,177,0.3)]">
                <div className="absolute inset-2 rounded-full border border-[#84a7b1]/30" />
              </div>
              
              {/* Small floating circle */}
              <div className="absolute bottom-1/3 right-1/5 w-10 h-10 md:w-14 md:h-14 bg-white/15 rounded-full border border-white/30 backdrop-blur-md shadow-lg animate-pulse" style={{ animationDuration: '2s' }} />
              
              {/* Hexagon-like shape */}
              <div className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#84a7b1]/20 rounded-lg rotate-45 backdrop-blur-sm border border-[#84a7b1]/40" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
              
              {/* Elegant connecting lines with gradient */}
              <svg className="absolute inset-0 w-full h-full opacity-40" style={{ zIndex: -1 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#84a7b1" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#84a7b1" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <line x1="25%" y1="30%" x2="40%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" />
                <line x1="60%" y1="40%" x2="70%" y2="60%" stroke="url(#lineGradient)" strokeWidth="2" />
                <line x1="50%" y1="60%" x2="65%" y2="70%" stroke="url(#lineGradient)" strokeWidth="2" />
                <line x1="35%" y1="45%" x2="55%" y2="55%" stroke="url(#lineGradient)" strokeWidth="1.5" />
              </svg>

              {/* Enhanced floating dots with glow */}
              <div className="absolute top-1/5 left-1/2 w-3 h-3 bg-[#84a7b1] rounded-full shadow-[0_0_10px_rgba(132,167,177,0.6)] animate-pulse" />
              <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-[#84a7b1] rounded-full shadow-[0_0_8px_rgba(132,167,177,0.5)] animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
              <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-white/60 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.4)] animate-pulse" style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
              <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-[#84a7b1]/80 rounded-full shadow-[0_0_8px_rgba(132,167,177,0.4)] animate-pulse" style={{ animationDelay: '1.5s' }} />
              
              {/* Floating particles */}
              <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-[#84a7b1]/50 rounded-full animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '3s' }} />
              <div className="absolute bottom-1/5 left-2/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-0.5 animate-bounce">
          <span className="text-[9px] text-white/30 uppercase tracking-wider font-medium">
            Scroll
          </span>
          <svg
            className="w-4 h-4 text-white/40"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
