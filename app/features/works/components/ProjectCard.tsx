"use client";

import React from "react";
import { FiArrowUpRight, FiSmartphone, FiGlobe } from "react-icons/fi";
import Img from "@/app/shared/Img";
import { ProjectCardProps } from "../types";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className="group relative cursor-pointer rounded-2xl border-2 border-[#2a2a2a] bg-[#121212] overflow-hidden aspect-[3/4] w-full transition-all duration-500 hover:border-[#84a7b1] hover:shadow-2xl hover:shadow-[#84a7b1]/20 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-[#84a7b1]"
      style={{
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full bg-[#0a0a0a]">
        <Img
          src={project.image}
          alt={project.title}
          width={896}
          height={1200}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Resting Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10 transition-opacity duration-400 group-hover:opacity-0" />
      </div>

      {/* Floating Top Category Badge (Resting State) */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white shadow-lg text-[11px] font-semibold tracking-wider uppercase transition-opacity duration-300 group-hover:opacity-0">
        {project.category === "mobile" ? (
          <>
            <FiSmartphone className="text-[#84a7b1] text-xs shrink-0" />
            <span>Mobile</span>
          </>
        ) : (
          <>
            <FiGlobe className="text-[#84a7b1] text-xs shrink-0" />
            <span>Web</span>
          </>
        )}
      </div>

      {/* Resting Bottom Title Bar */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex items-end justify-between gap-3 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-3">
        <div className="space-y-1">
          <span className="text-[11px] font-semibold text-[#84a7b1] uppercase tracking-wider block">
            {project.categoryLabel}
          </span>
          <h3 className="font-bold text-white text-xl sm:text-2xl leading-tight drop-shadow-md">
            {project.title}
          </h3>
        </div>
        <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 shrink-0">
          <FiArrowUpRight className="text-base" />
        </div>
      </div>

      {/* Hover Slide-in Content Panel */}
      <div className="absolute inset-0 z-20 bg-black/90 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-400 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border-t border-[#84a7b1]/30">
        {/* Top Header & Overview */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-[#84a7b1] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#84a7b1]/15 border border-[#84a7b1]/25">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-white/50">{project.date}</span>
          </div>

          <h3 className="font-bold text-white text-2xl leading-snug flex items-center justify-between pt-1">
            <span className="text-white group-hover:text-[#84a7b1] transition-colors">
              {project.title}
            </span>
            <span className="w-9 h-9 rounded-full bg-[#84a7b1]/20 border border-[#84a7b1]/40 flex items-center justify-center text-[#84a7b1] shrink-0 ml-2">
              <FiArrowUpRight className="text-lg" />
            </span>
          </h3>

          <p className="text-white/80 text-sm leading-relaxed line-clamp-4 pt-1">
            {project.description}
          </p>
        </div>

        {/* Bottom Details & Tech Stack */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-white/40 font-medium mb-2">
              Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.languages.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#84a7b1] font-semibold pt-1">
            <span>Client: {project.client}</span>
            <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              View Case Study →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
