"use client";

import { replaceUrlHash } from "@/app/utils/functions";
import { useCallback } from "react";

const getScrollOffset = () => (window.innerWidth >= 1024 ? 112 : 96);

export type ScrollToSectionOptions = {
  behavior?: ScrollBehavior;
  /** Replaces the current history entry's hash (no extra back-stack entries). */
  replaceHash?: boolean;
};

export const useScrollToSection = () => {
  const scrollToSection = useCallback(
    (id: string, behaviorOrOptions: ScrollBehavior | ScrollToSectionOptions = "smooth") => {
      const options =
        typeof behaviorOrOptions === "string"
          ? { behavior: behaviorOrOptions }
          : behaviorOrOptions;
      const behavior = options.behavior ?? "smooth";

      const element = document.getElementById(id);
      if (!element) return;

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        getScrollOffset();

      window.scrollTo({ top, behavior });

      if (options.replaceHash) {
        replaceUrlHash(id);
      }
    },
    [],
  );

  return scrollToSection;
};

