"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    // Load Lottie animation data
    fetch("/hero.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        paddingTop: "calc(4rem + env(safe-area-inset-top, 0px))",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#84a7b1]/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-[#84a7b1]/5 rounded-full blur-[140px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 mt-6 lg:mt-0">
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-opacity duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left Side - Text Content */}
          <div className="space-y-4 lg:space-y-5 text-center lg:text-left pt-6 lg:pt-0">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84a7b1]/10 border border-[#84a7b1]/20 backdrop-blur-sm transition-all duration-1000 mx-auto lg:mx-0 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: mounted ? "200ms" : "0ms" }}
            >
              <div className="w-1.5 h-1.5 bg-[#84a7b1] rounded-full animate-pulse" />
              <span className="text-xs text-[#84a7b1] font-medium uppercase tracking-wide">
                Design-First Development
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] tracking-tight mx-auto lg:mx-0">
              <span
                className={`text-white block mb-1 transition-all duration-1000 ${
                  mounted
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: mounted ? "400ms" : "0ms" }}
              >
                Transform Your Ideas Into
              </span>
              <span
                className={`bg-gradient-to-r from-[#84a7b1] via-white to-[#84a7b1] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient block transition-all duration-1000 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: mounted ? "600ms" : "0ms" }}
              >
                Digital Reality
              </span>
            </h1>

            {/* Description */}
            <div
              className={`space-y-2 pt-1 transition-all duration-1000 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: mounted ? "1000ms" : "0ms" }}
            >
              <p className="text-sm md:text-base lg:text-lg text-white/90 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                We're a service-based startup helping businesses build scalable
                products that drive growth.
              </p>
              <p className="text-xs md:text-sm text-white/60 font-light max-w-xl mx-auto lg:mx-0">
                From MVP development to full-scale solutions, we deliver
                cutting-edge technology tailored to your needs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-row gap-3 pt-2 justify-center lg:justify-start transition-all duration-1000 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: mounted ? "1200ms" : "0ms" }}
            >
              <button
                onClick={scrollToContact}
                className="group relative px-6 py-3 bg-[#84a7b1] text-white rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#84a7b1]/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
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

          {/* Right Side - Lottie Animation */}
          <div className="relative h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Decorative SVG Lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-40"
                style={{ zIndex: 1 }}
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#84a7b1" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#84a7b1" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <line
                  x1="10%"
                  y1="20%"
                  x2="30%"
                  y2="40%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                />
                <line
                  x1="70%"
                  y1="30%"
                  x2="85%"
                  y2="50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="60%"
                  x2="70%"
                  y2="75%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                />
                <line
                  x1="25%"
                  y1="50%"
                  x2="45%"
                  y2="60%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1.5"
                />
                <line
                  x1="75%"
                  y1="70%"
                  x2="90%"
                  y2="80%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Floating dots with glow */}
              <div
                className="absolute top-1/5 left-1/4 w-3 h-3 bg-[#84a7b1] rounded-full shadow-[0_0_10px_rgba(132,167,177,0.6)] animate-pulse"
                style={{ zIndex: 2 }}
              />
              <div
                className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-[#84a7b1] rounded-full shadow-[0_0_8px_rgba(132,167,177,0.5)] animate-pulse"
                style={{
                  animationDelay: "0.5s",
                  animationDuration: "2s",
                  zIndex: 2,
                }}
              />
              <div
                className="absolute top-2/3 left-1/5 w-2 h-2 bg-white/60 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.4)] animate-pulse"
                style={{
                  animationDelay: "1s",
                  animationDuration: "2.5s",
                  zIndex: 2,
                }}
              />
              <div
                className="absolute top-1/6 right-1/6 w-2 h-2 bg-[#84a7b1]/80 rounded-full shadow-[0_0_8px_rgba(132,167,177,0.4)] animate-pulse"
                style={{ animationDelay: "1.5s", zIndex: 2 }}
              />

              {/* Floating particles */}
              <div
                className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-[#84a7b1]/50 rounded-full animate-pulse"
                style={{
                  animationDelay: "0.8s",
                  animationDuration: "3s",
                  zIndex: 2,
                }}
              />
              <div
                className="absolute bottom-1/5 left-2/3 w-1 h-1 bg-white/40 rounded-full animate-pulse"
                style={{
                  animationDelay: "1.2s",
                  animationDuration: "2s",
                  zIndex: 2,
                }}
              />
              <div
                className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#84a7b1]/40 rounded-full animate-pulse"
                style={{
                  animationDelay: "0.3s",
                  animationDuration: "2.5s",
                  zIndex: 2,
                }}
              />
              <div
                className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-white/30 rounded-full animate-pulse"
                style={{
                  animationDelay: "1.8s",
                  animationDuration: "3s",
                  zIndex: 2,
                }}
              />

              {/* Lottie Animation */}
              {animationData && (
                <div className="relative z-10 w-full h-full">
                  <Lottie
                    animationData={animationData}
                    className="w-full h-full"
                    loop={true}
                    autoplay={true}
                  />
                </div>
              )}
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
