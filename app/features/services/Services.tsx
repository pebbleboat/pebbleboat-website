"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SectionHeader, GradientBackground } from "../../shared";
import { SvgCheckmark } from "../../utils/svgs";
import { services } from "../../utils/data/services";

export default function Services() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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
      <GradientBackground variant="services" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div ref={headerRef}>
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive solutions to bring your vision to life"
            className={`mb-16 transition-all duration-1000 ${
              isHeaderVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isVisible = visibleItems.has(index);
            return (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`group bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-2xl border-2 border-[#2a2a2a] hover:border-[#84a7b1] hover:shadow-lg hover:shadow-[#84a7b1]/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer block ${
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
                      key={featureIndex} 
                      className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300"
                      style={{
                        animationDelay: isVisible ? `${index * 100 + featureIndex * 50}ms` : "0ms",
                      }}
                    >
                      <SvgCheckmark />
                      {feature.title}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
  