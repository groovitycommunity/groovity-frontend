import { useState, useEffect } from 'react';

export function useScrollProgress(threshold: number = 500) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const updateProgress = (scrollPos: number) => {
      const newProgress = Math.min(scrollPos / threshold, 1);
      setProgress(newProgress);
      ticking = false;
    };

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          updateProgress(lastKnownScrollPosition);
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    updateProgress(window.scrollY);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [threshold]);

  return progress;
}
