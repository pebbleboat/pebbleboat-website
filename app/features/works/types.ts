import { IProject } from "@/app/utils/data/works";

export type ProjectCategory = "all" | "web" | "mobile";

export interface WorksProps {
  initialProjects?: IProject[];
}

export interface ProjectCardProps {
  project: IProject;
  onSelect: (project: IProject) => void;
  index: number;
}

export interface ProjectModalProps {
  project: IProject | null;
  onClose: () => void;
}
