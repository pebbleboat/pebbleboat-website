"use client";

import { useState, useEffect, useRef } from "react";
import { SectionHeader } from "../../shared";

const technologies = [
  { name: "Next.js", category: "Frontend", color: "bg-black" },
  { name: "React", category: "Frontend", color: "bg-blue-500" },
  { name: "TypeScript", category: "Language", color: "bg-blue-600" },
  { name: "React Native", category: "Mobile", color: "bg-cyan-500" },
  { name: "Node.js", category: "Backend", color: "bg-green-600" },
  { name: "Express", category: "Backend", color: "bg-[#1a1a1a]" },
  { name: "PostgreSQL", category: "Database", color: "bg-blue-700" },
  { name: "MongoDB", category: "Database", color: "bg-green-500" },
  { name: "AWS", category: "Cloud", color: "bg-orange-500" },
  { name: "Docker", category: "DevOps", color: "bg-blue-400" },
  { name: "Tailwind CSS", category: "Frontend", color: "bg-cyan-400" },
  { name: "GraphQL", category: "API", color: "bg-pink-600" },
];

export default function TechStack() {
  const [visibleTechs, setVisibleTechs] = useState<Set<number>>(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Categories animation
    if (categoriesRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsCategoriesVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(categoriesRef.current);
    }

    // Tech items animation
    const observers: IntersectionObserver[] = [];
    techRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleTechs((prev) => new Set([...prev, index]));
            }
          },
          { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
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
    <section id="tech" className="py-24 bg-gradient-to-br from-black to-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef}>
          <SectionHeader
            title="Our Tech Stack"
            subtitle="Modern technologies we use to build exceptional products"
            className={`mb-16 transition-all duration-1000 ${
              isHeaderVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          />
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {technologies.map((tech, index) => {
            const isVisible = visibleTechs.has(index);
            return (
              <div
                key={tech.name}
                ref={(el) => {
                  techRefs.current[index] = el;
                }}
                className={`group bg-[#1a1a1a] p-6 rounded-xl border-2 border-[#2a2a2a] hover:border-[#84a7b1] hover:shadow-lg hover:shadow-[#84a7b1]/20 transition-all duration-500 text-center hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                }}
              >
                <div
                  className={`w-12 h-12 ${tech.color} rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  {tech.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-[#84a7b1] transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-xs text-white/70">{tech.category}</p>
              </div>
            );
          })}
        </div>

        {/* Categories */}
        <div 
          ref={categoriesRef}
          className={`bg-[#1a1a1a] rounded-2xl p-8 border-2 border-[#2a2a2a] transition-all duration-1000 ${
            isCategoriesVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">
            What We Specialize In
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎨", title: "Frontend Excellence", desc: "Modern React-based applications with beautiful UIs" },
              { icon: "⚙️", title: "Robust Backends", desc: "Scalable server architectures and APIs" },
              { icon: "☁️", title: "Cloud Infrastructure", desc: "Deploy and scale with confidence" },
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`text-center transition-all duration-700 ${
                  isCategoriesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: isCategoriesVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                <div className="text-4xl mb-3 transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  