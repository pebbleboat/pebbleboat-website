import { useCallback } from "react";

export const useScrollToSection = () => {
  const scrollToSection = useCallback((id: string, behavior: ScrollBehavior = "smooth") => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior });
    }
  }, []);

  return scrollToSection;
};

