import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / windowHeight;

      // Ensure the progress is between 0 and 1
      const clampedProgress = Math.min(1, Math.max(0, progress));

      setScrollProgress(clampedProgress);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollProgress;
}
