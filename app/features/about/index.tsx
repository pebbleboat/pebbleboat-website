"use client";

import { useState, useEffect, useRef } from "react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and requirements. Together, we define the project scope and create a detailed roadmap.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our design team creates wireframes and prototypes that align with your brand. We iterate based on your feedback until we get it perfect.",
    icon: "🎨",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Using agile methodologies, we build your product in sprints. You'll see regular updates and can provide feedback throughout the process.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We thoroughly test your product across devices and platforms. Once everything is perfect, we help you launch and go live.",
    icon: "🚀",
  },
  {
    number: "05",
    title: "Support & Growth",
    description:
      "Our relationship doesn't end at launch. We provide ongoing support, maintenance, and help you scale as your business grows.",
    icon: "📈",
  },
];

export default function About() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Small delay to ensure refs are set
    const timeoutId = setTimeout(() => {
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setVisibleSteps((prev) => new Set([...prev, index]));
                }
              });
            },
            {
              threshold: 0.1,
              rootMargin: "0px 0px -100px 0px",
            }
          );
          observer.observe(ref);
          observers.push(observer);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="about" className="bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-white via-[#84a7b1] to-white bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 lg:mb-12">
            We're not just developers—we're your partners in building products
            that make a difference. With a focus on quality, speed, and
            collaboration, we help startups and businesses succeed.
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="p-5 lg:p-6 bg-gradient-to-br from-[#84a7b1]/15 to-[#1a1a1a] rounded-2xl border-2 border-[#84a7b1]/30 hover:border-[#84a7b1] hover:shadow-lg hover:shadow-[#84a7b1]/20 transition-all duration-300">
              <div className="text-4xl mb-3 lg:mb-4">⚡</div>
              <h3 className="text-lg lg:text-xl font-bold mb-2 text-white">
                Fast Delivery
              </h3>
              <p className="text-white/80 text-sm lg:text-base">
                We move quickly without compromising quality. Get your MVP in
                4-6 weeks.
              </p>
            </div>
            <div className="p-5 lg:p-6 bg-gradient-to-br from-[#84a7b1]/15 to-[#1a1a1a] rounded-2xl border-2 border-[#84a7b1]/30 hover:border-[#84a7b1] hover:shadow-lg hover:shadow-[#84a7b1]/20 transition-all duration-300">
              <div className="text-4xl mb-3 lg:mb-4">🎯</div>
              <h3 className="text-lg lg:text-xl font-bold mb-2 text-white">
                Results-Driven
              </h3>
              <p className="text-white/80 text-sm lg:text-base">
                Every project is built with your business goals in mind. We
                measure success by your success.
              </p>
            </div>
            <div className="p-5 lg:p-6 bg-gradient-to-br from-[#84a7b1]/15 to-[#1a1a1a] rounded-2xl border-2 border-[#84a7b1]/30 hover:border-[#84a7b1] hover:shadow-lg hover:shadow-[#84a7b1]/20 transition-all duration-300">
              <div className="text-4xl mb-3 lg:mb-4">🤝</div>
              <h3 className="text-lg lg:text-xl font-bold mb-2 text-white">
                Transparent Process
              </h3>
              <p className="text-white/80 text-sm lg:text-base">
                Regular updates, clear communication, and no surprises. You're
                always in the loop.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block mb-4">
              <span className="bg-[#84a7b1] text-white px-4 py-2 rounded-full text-sm font-semibold">
                How We Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#84a7b1] via-white to-[#84a7b1] bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#84a7b1]/10 via-transparent to-[#84a7b1]/10 rounded-3xl -z-10" />

            {/* Animated Timeline line - centered for desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#84a7b1]/30 via-[#84a7b1]/30 to-[#84a7b1]/30 rounded-full" />
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#84a7b1] via-black to-[#84a7b1] rounded-full animate-pulse opacity-20" />

            <div className="space-y-8 lg:space-y-12">
              {processSteps.map((step, index) => {
                const isVisible = visibleSteps.has(index);
                return (
                  <div
                    key={step.number}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className={`relative group flex flex-col lg:flex-row items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-100 translate-y-0 scale-100"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                    }}
                  >
                    {/* Left/Right Content Card */}
                    <div
                      className={`lg:w-[45%] mb-6 lg:mb-0 ${
                        index % 2 === 0 ? "lg:pr-6" : "lg:pl-6"
                      }`}
                    >
                      <div className="relative h-full">
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#84a7b1] to-black rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300" />

                        <div
                          className={`relative bg-[#1a1a1a] p-6 lg:p-7 rounded-3xl border-2 border-[#2a2a2a] hover:border-[#84a7b1]/50 shadow-lg hover:shadow-lg hover:shadow-[#84a7b1]/20 transition-all duration-500 hover:-translate-y-2 ${
                            isVisible
                              ? index % 2 === 0
                                ? "animate-slide-in-left"
                                : "animate-slide-in-right"
                              : index % 2 === 0
                              ? "translate-x-0"
                              : "translate-x-0"
                          }`}
                        >
                          {/* Step Header */}
                          <div className="flex items-center gap-4 mb-5">
                            <div
                              className={`w-14 h-14 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br from-[#84a7b1] to-black flex items-center justify-center text-2xl md:text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0 ${
                                isVisible
                                  ? "animate-bounce-in"
                                  : "opacity-100 scale-100"
                              }`}
                              style={{
                                animationDelay: isVisible
                                  ? `${index * 150 + 200}ms`
                                  : "0ms",
                              }}
                            >
                              {step.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                                  Step
                                </span>
                                <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#84a7b1] to-white bg-clip-text text-transparent">
                                  {step.number}
                                </span>
                              </div>
                              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-1.5 text-white group-hover:text-[#84a7b1] transition-colors">
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-white/80 leading-relaxed text-sm md:text-base mb-4">
                            {step.description}
                          </p>

                          {/* Decorative CTA */}
                          <div className="flex items-center gap-2 text-[#84a7b1] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span>Learn more</span>
                            <svg
                              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Timeline Node - Desktop */}
                    <div className="hidden lg:flex lg:w-[10%] items-center justify-center relative z-10">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#84a7b1] to-black flex items-center justify-center shadow-lg border-4 border-white transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#84a7b1]/30 transition-all duration-300 ${
                          isVisible
                            ? "animate-scale-in"
                            : "opacity-100 scale-100"
                        }`}
                        style={{
                          animationDelay: isVisible
                            ? `${index * 150 + 300}ms`
                            : "0ms",
                        }}
                      >
                        <span className="text-xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                      {/* Simple connecting line to next step */}
                      {index < processSteps.length - 1 && (
                        <div
                          className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-[#84a7b1] to-black rounded-full ${
                            isVisible ? "animate-line-grow" : "h-12 opacity-100"
                          }`}
                          style={{
                            animationDelay: isVisible
                              ? `${index * 150 + 500}ms`
                              : "0ms",
                            transition: "height 0.6s ease-out",
                          }}
                        />
                      )}
                    </div>

                    {/* Right/Left Visual Element - Desktop */}
                    <div
                      className={`hidden lg:block lg:w-[45%] ${
                        index % 2 === 0 ? "" : ""
                      }`}
                    >
                      <div className="h-full flex items-center justify-center p-4">
                        <div
                          className={`w-full h-32 rounded-2xl bg-gradient-to-br ${
                            index % 2 === 0
                              ? "from-[#84a7b1]/20 to-black"
                              : "from-black to-[#84a7b1]/20"
                          } border border-[#84a7b1]/30 opacity-60 group-hover:opacity-80 transition-opacity duration-300 relative overflow-hidden ${
                            isVisible
                              ? index % 2 === 0
                                ? "animate-slide-in-right"
                                : "animate-slide-in-left"
                              : "translate-x-0 opacity-60"
                          }`}
                          style={{
                            animationDelay: isVisible
                              ? `${index * 150 + 100}ms`
                              : "0ms",
                          }}
                        >
                          {/* Decorative pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div
                              className={`absolute ${
                                index % 2 === 0
                                  ? "right-4 top-4"
                                  : "left-4 top-4"
                              } w-16 h-16 rounded-full bg-[#84a7b1] blur-2xl`}
                            />
                            <div
                              className={`absolute ${
                                index % 2 === 0
                                  ? "right-8 bottom-4"
                                  : "left-8 bottom-4"
                              } w-12 h-12 rounded-full bg-[#84a7b1]/50 blur-xl`}
                            />
                          </div>
                          {/* Step number in background */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-bold text-[#84a7b1]/20">
                              {step.number}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Timeline Node */}
                    <div className="lg:hidden flex items-center gap-3 w-full mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#84a7b1] to-black flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0 text-sm">
                        {step.number}
                      </div>
                      {/* {index < processSteps.length - 1 && ( */}
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#84a7b1] to-black rounded-full" />
                      {/* )} */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 lg:mt-16 text-center">
            <div className="inline-block bg-[#84a7b1] p-6 lg:p-8 rounded-3xl shadow-xl max-w-2xl animate-fade-in-up">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/90 mb-5 lg:mb-6 text-base lg:text-lg">
                Let's discuss how our process can help bring your vision to life
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-[#84a7b1] px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-semibold hover:bg-[#84a7b1] hover:text-white hover:shadow-md hover:shadow-[#84a7b1]/20 transform hover:scale-105 transition-all duration-300 text-sm lg:text-base"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
