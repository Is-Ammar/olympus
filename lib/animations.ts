export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const heroText = {
  hidden: { opacity: 0, y: 80, skewY: 3 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

export const underlineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, originX: 0, transition: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] } }
};
