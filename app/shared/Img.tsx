"use client";

import Image from "next/image";
import React from "react";
import { cn } from "../utils/cn";

export interface ImgProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof Image>,
    "src" | "alt"
  > {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

const Img = React.forwardRef<HTMLImageElement, ImgProps>(
  (
    {
      src,
      alt,
      width,
      height,
      fill = false,
      priority = false,
      className,
      ...props
    },
    ref
  ) => {
    // If fill is true, use fill layout
    if (fill) {
      return (
        <Image
          ref={ref}
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", className)}
          {...props}
        />
      );
    }

    // If width/height are provided, use them
    if (width && height) {
      return (
        <Image
          ref={ref}
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={cn("w-full h-full object-cover", className)}
          {...props}
        />
      );
    }

    // Default: use responsive sizing
    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        priority={priority}
        className={cn("w-full h-auto object-contain", className)}
        {...props}
      />
    );
  }
);

Img.displayName = "Img";

export default Img;
