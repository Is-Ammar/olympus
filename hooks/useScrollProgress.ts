import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';

export function useScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 80);
    });
  }, [scrollY]);

  return { scrollYProgress, scrollY, isScrolled };
}
