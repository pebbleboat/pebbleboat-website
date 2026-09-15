"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Button, SectionHeader, GradientBackground } from "@/app/shared";
import { projects, IProject } from "@/app/utils/data/works";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";

interface HomeWorksSectionProps {
  featuredCount?: number;
}

const HomeWorksSection: React.FC<HomeWorksSectionProps> = ({ featuredCount = 3 }) => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  // Take the first 3 highlight projects
  const featuredProjects = projects.slice(0, featuredCount);

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      <GradientBackground variant="services" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-12">
        <SectionHeader
          title="Featured Projects"
          subtitle="Explore selected applications and scalable solutions engineered with cutting-edge velocity."
        />

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              index={index}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center pt-6">
          <Link href="/our-work">
            <Button
              variant="outline"
              size="lg"
              rounded="full"
              className="flex items-center gap-2 group hover:border-[#84a7b1] hover:text-[#84a7b1]"
            >
              <span>View More Projects</span>
              <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal Integration */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default HomeWorksSection;
