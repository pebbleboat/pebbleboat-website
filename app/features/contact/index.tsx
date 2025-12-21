"use client";

import { useEffect, useRef, useState } from "react";
import useHook from "./useHook";

export default function Contact() {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    status,
  } = useHook();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Gradient Patches */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#84a7b1]/8 rounded-full blur-[110px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#84a7b1]/6 rounded-full blur-[90px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#84a7b1]/6 rounded-full blur-[90px]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#84a7b1] to-white bg-clip-text text-transparent leading-14">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to transform your idea into reality? Get in touch and let's
            discuss your project.
          </p>
        </div>

        <div
          className={`bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border-2 border-[#2a2a2a] hover:border-[#84a7b1]/50 transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{
            transitionDelay: isVisible ? "200ms" : "0ms",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-white/90"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full outline-none px-4 py-3 rounded-lg bg-[#2a2a2a]/70 border-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#84a7b1] transition-all hover:border-[#84a7b1]/50 ${
                    touched.name && errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-[#404040] focus:border-[#84a7b1]"
                  }`}
                  placeholder="John Doe"
                />
                {touched.name && errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-white/90"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full outline-none px-4 py-3 rounded-lg bg-[#2a2a2a]/70 border-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#84a7b1] transition-all hover:border-[#84a7b1]/50 ${
                    touched.email && errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-[#404040] focus:border-[#84a7b1]"
                  }`}
                  placeholder="john@example.com"
                />
                {touched.email && errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-2 text-white/90"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full outline-none px-4 py-3 rounded-lg bg-[#2a2a2a]/70 border-2 border-[#404040] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#84a7b1] focus:border-[#84a7b1] transition-all hover:border-[#84a7b1]/50"
                placeholder="Your Company"
              />
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-white/90"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full outline-none px-4 py-3 rounded-lg bg-[#2a2a2a]/70 border-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#84a7b1] transition-all resize-none hover:border-[#84a7b1]/50 ${
                  touched.message && errors.message
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-[#404040] focus:border-[#84a7b1]"
                }`}
                placeholder="Tell us about your project, timeline, and goals..."
              />
              {touched.message && errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {status === "success" && (
              <div className="bg-green-500/20 border border-green-400 text-green-100 px-4 py-3 rounded-lg">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-500/20 border border-red-400 text-red-100 px-4 py-3 rounded-lg">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#84a7b1] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6d8a94] hover:shadow-lg hover:shadow-[#84a7b1]/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          <div
            className={`mt-8 pt-8 border-t border-[#2a2a2a] text-center transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
          >
            <p className="text-white/80 mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@pebbleboat.com"
                className="text-white/90 hover:text-[#84a7b1] transition-colors font-medium hover:scale-105 inline-block"
              >
                📧 contact@pebbleboat.com
              </a>
              <span className="hidden sm:inline text-white/40">•</span>
              <a
                href="tel:+917376190196"
                className="text-white/90 hover:text-[#84a7b1] transition-colors font-medium hover:scale-105 inline-block"
              >
                📞 +91 7376190196
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
