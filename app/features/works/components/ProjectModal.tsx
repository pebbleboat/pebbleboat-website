"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FiX,
  FiExternalLink,
  FiCalendar,
  FiUser,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import Img from "@/app/shared/Img";
import Button from "@/app/shared/Button";
import { ProjectModalProps } from "../types";

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!mounted || !project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/55 backdrop-blur-2xl transition-all duration-300"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#1a1a1a]/95 backdrop-blur-md border-2 border-[#2a2a2a] rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white/80 hover:text-white hover:bg-[#84a7b1] hover:border-[#84a7b1] flex items-center justify-center transition-all duration-200 z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <FiX className="text-xl" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84a7b1]/15 text-[#84a7b1] border border-[#84a7b1]/25 text-xs font-semibold uppercase tracking-wider mb-3">
            <FiLayers className="text-xs" />
            {project.categoryLabel}
          </div>
          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            {project.title}
          </h2>
        </div>

        {/* Preview Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-white/10 bg-black/50 flex items-center justify-center">
          <Img
            src={project.originalImage || project.image}
            alt={project.title}
            width={1200}
            height={675}
            priority
            className="w-full h-full object-contain bg-black/40"
          />
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-black/40 p-4 sm:p-5 rounded-xl border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#84a7b1]/10 border border-[#84a7b1]/20 flex items-center justify-center text-[#84a7b1] shrink-0">
              <FiUser className="text-base" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-white/40 font-medium">
                Client
              </span>
              <span className="text-sm font-semibold text-white">
                {project.client}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#84a7b1]/10 border border-[#84a7b1]/20 flex items-center justify-center text-[#84a7b1] shrink-0">
              <FiCalendar className="text-base" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-white/40 font-medium">
                Timeline
              </span>
              <span className="text-sm font-semibold text-white">
                {project.date}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:col-span-2 pt-2 border-t border-white/5">
            <div className="w-9 h-9 rounded-lg bg-[#84a7b1]/10 border border-[#84a7b1]/20 flex items-center justify-center text-[#84a7b1] shrink-0 mt-0.5">
              <FiCode className="text-base" />
            </div>
            <div className="flex-1">
              <span className="block text-[11px] uppercase tracking-wider text-white/40 font-medium mb-1.5">
                Technologies & Tools
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.languages.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#84a7b1]/15 text-[#a2c2cc] border border-[#84a7b1]/25 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-3 mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            About the Project
          </h3>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <span className="text-xs text-white/50">
            Interested in building something similar?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="md"
                  rounded="full"
                  className="w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <span>Visit Live Project</span>
                  <FiExternalLink className="text-base" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
