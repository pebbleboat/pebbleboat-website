"use client";

import React from "react";
import { cn } from "../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  touched?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, touched, className, id, ...props }, ref) => {
    const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;
    const hasError = touched && error;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium mb-2 text-white/90"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full outline-none px-4 py-3 rounded-lg bg-[#2a2a2a]/70 border-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#84a7b1] transition-all hover:border-[#84a7b1]/50",
            hasError
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-[#404040] focus:border-[#84a7b1]",
            className
          )}
          {...props}
        />
        {hasError && (
          <p className="mt-1 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

