"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  rounded?: "default" | "full";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      rounded = "default",
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
    
    const roundedStyles = {
      default: "rounded-lg",
      full: "rounded-full",
    };

    const variants = {
      primary:
        "bg-[#84a7b1] text-white hover:bg-[#6d8a94] hover:shadow-lg hover:shadow-[#84a7b1]/30 hover:scale-105",
      secondary:
        "bg-white text-[#84a7b1] hover:bg-[#84a7b1] hover:text-white hover:shadow-md hover:shadow-[#84a7b1]/20 hover:scale-105",
      outline:
        "border-2 border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:shadow-md hover:shadow-white/10",
    };

    const sizes = {
      sm: "px-3 py-[6px] text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          roundedStyles[rounded],
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

