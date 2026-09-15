"use client";

import React from "react";
import Link from "next/link";
import { FiLayers, FiGlobe, FiSmartphone } from "react-icons/fi";
import { Button, SectionHeader } from "@/app/shared";
import { IProject, projects as defaultProjects } from "@/app/utils/data/works";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import useHook from "./useHook";
import { ProjectCategory, WorksProps } from "./types";

const filterTabs: { id: ProjectCategory; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All Projects", icon: <FiLayers className="text-sm" /> },
  { id: "web", label: "Web Apps", icon: <FiGlobe className="text-sm" /> },
  { id: "mobile", label: "Mobile Apps", icon: <FiSmartphone className="text-sm" /> },
];

const Works: React.FC<WorksProps> = ({ initialProjects = defaultProjects }) => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedProject,
    setSelectedProject,
    filteredProjects,
    counts,
  } = useHook(initialProjects);

  return (
    <div className="space-y-12">
      {/* Header */}
      <SectionHeader
        title="Our Work"
        subtitle="Explore our portfolio of high-impact web apps, mobile solutions, and cutting-edge digital experiences built for ambitious brands."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
        {filterTabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          const count = counts[tab.id];

          return (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#84a7b1] text-white shadow-lg shadow-[#84a7b1]/30 scale-105"
                  : "bg-[#1a1a1a]/80 text-white/70 hover:text-white hover:bg-[#252525] border border-white/10"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-white/10 text-white/50"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="h-64 flex flex-col justify-center items-center space-y-3 bg-[#1a1a1a]/50 rounded-2xl border border-white/10">
          <h3 className="font-bold text-lg text-white">No projects found</h3>
          <p className="text-white/60 text-sm">
            Try selecting a different category filter.
          </p>
        </div>
      )}

      {/* Bottom CTA Card */}
      <div className="mt-16 bg-gradient-to-br from-[#1a1a1a] via-[#151515] to-black rounded-2xl border-2 border-[#2a2a2a] p-8 md:p-12 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Build Your Next Big Idea?
          </h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            From MVPs to complex cloud architectures, we design and engineer scalable products with unmatched velocity and precision.
          </p>
        </div>
        <div className="flex justify-center pt-2">
          <Link href="/#contact">
            <Button variant="primary" size="lg" rounded="full">
              Start a Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Works;
