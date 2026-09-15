"use client";

import { useMemo, useState } from "react";
import { IProject, projects as allProjects } from "@/app/utils/data/works";
import { ProjectCategory } from "./types";

export default function useHook(initialProjects: IProject[] = allProjects) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return initialProjects;
    return initialProjects.filter((p) => p.category === selectedCategory);
  }, [initialProjects, selectedCategory]);

  const counts = useMemo(() => {
    return {
      all: initialProjects.length,
      web: initialProjects.filter((p) => p.category === "web").length,
      mobile: initialProjects.filter((p) => p.category === "mobile").length,
    };
  }, [initialProjects]);

  return {
    selectedCategory,
    setSelectedCategory,
    selectedProject,
    setSelectedProject,
    filteredProjects,
    counts,
  };
}
