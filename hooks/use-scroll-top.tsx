import { useEffect, useState } from "react";

/**
 * Hook to detect if the user has scrolled past a certain threshold
 *
 * @param threshold The threshold to trigger the scroll
 * @returns boolean
 */
export const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
};
