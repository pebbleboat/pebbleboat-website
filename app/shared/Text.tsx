import clsx from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: string;
  type?: "light" | "medium" | "normal";
}

const Text = ({
  children,
  className,
  size = "md",
  type = "normal",
}: TextProps) => {
  return (
    <p
      className={clsx(
        {
          "text-sm": size === "sm",
          "text-base": size === "md",
          "text-lg": size === "lg",
          "font-light": type === "light",
          "font-medium": type === "medium",
        },
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
