import { useState, useEffect } from "react";

// Default Tailwind breakpoints
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Function to determine active breakpoints
const getActiveBreakpoints = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 0;
  return Object.keys(breakpoints).reduce((acc, key) => {
    acc[key] = width >= breakpoints[key as keyof typeof breakpoints];
    return acc;
  }, {} as Record<string, boolean>) as Record<keyof typeof breakpoints, boolean>;
};

// Custom hook
export const useBreakpoint = () => {
  const [activeBreakpoints, setActiveBreakpoints] = useState(getActiveBreakpoints());

  useEffect(() => {
    const handleResize = () => {
      setActiveBreakpoints(getActiveBreakpoints());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return activeBreakpoints;
};

export function useScrollOffset() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newOffset = Math.round(window.scrollY);
      setScrollOffset((prevOffset) => (prevOffset !== newOffset ? newOffset : prevOffset));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollOffset;
}

export function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowHeight;
}
