"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface GradientBackgroundProps {
  variant?: "default" | "contact" | "services" | "hero";
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  variant = "default",
  className,
}) => {
  const variants = {
    default: (
      <>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#84a7b1]/8 rounded-full blur-[110px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#84a7b1]/6 rounded-full blur-[90px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#84a7b1]/6 rounded-full blur-[90px]" />
      </>
    ),
    contact: (
      <>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#84a7b1]/8 rounded-full blur-[110px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#84a7b1]/6 rounded-full blur-[90px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#84a7b1]/6 rounded-full blur-[90px]" />
      </>
    ),
    services: (
      <>
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#84a7b1]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[550px] h-[550px] bg-[#84a7b1]/6 rounded-full blur-[90px]" />
      </>
    ),
    hero: (
      <>
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#84a7b1]/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-[#84a7b1]/5 rounded-full blur-[140px]" />
      </>
    ),
  };

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {variants[variant]}
    </div>
  );
};

export default GradientBackground;

