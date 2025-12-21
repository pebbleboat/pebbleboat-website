"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  {
    icon: "🚀",
    title: "MVP Development",
    desc: "Launch your product faster with our end-to-end MVP development. We build scalable MVPs in 4–6 weeks, helping you validate your idea and get to market quickly.",
    features: [
      "Rapid prototyping",
      "User-focused design",
      "Scalable architecture",
      "Post-launch support",
    ],
  },
  {
    icon: "💻",
    title: "Full-Stack Web Applications",
    desc: "Custom web applications built with modern technologies. From dashboards to e-commerce platforms, we create solutions that grow with your business.",
    features: [
      "Responsive design",
      "Cloud deployment",
      "API integration",
      "Performance optimization",
    ],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native-feeling mobile apps for iOS and Android using React Native. One codebase, two platforms, seamless user experience.",
    features: [
      "Cross-platform",
      "Native performance",
      "App store deployment",
      "Push notifications",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces that users love. We combine design thinking with user research to create engaging experiences.",
    features: [
      "User research",
      "Wireframing",
      "Prototyping",
      "Design systems",
    ],
  },
  {
    icon: "⚡",
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure and deployment pipelines. We ensure your applications are fast, secure, and always available.",
    features: [
      "AWS/Azure/GCP",
      "CI/CD pipelines",
      "Monitoring & logging",
      "Auto-scaling",
    ],
  },
  {
    icon: "🔧",
    title: "Consulting & Strategy",
    desc: "Expert guidance on technology decisions, architecture, and product strategy. Let us help you make the right choices.",
    features: [
      "Technical audits",
      "Architecture reviews",
      "Product strategy",
      "Team mentoring",
    ],
  },
];

export default function Services() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(headerRef.current);
    }

    // Items animation
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          },
          { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Gradient Patches */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#84a7b1]/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-1/4 w-[550px] h-[550px] bg-[#84a7b1]/6 rounded-full blur-[90px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isHeaderVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#84a7b1] to-white bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive solutions to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isVisible = visibleItems.has(index);
            return (
              <div
                key={service.title}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`group bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-2xl border-2 border-[#2a2a2a] hover:border-[#84a7b1] hover:shadow-lg hover:shadow-[#84a7b1]/20 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#84a7b1] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300"
                      style={{
                        animationDelay: isVisible ? `${index * 100 + featureIndex * 50}ms` : "0ms",
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-[#84a7b1] mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
  