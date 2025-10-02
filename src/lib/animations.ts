// Centralized animation configuration for consistent timing and easing across the app

// Standard timing values (in seconds)
export const ANIMATION_DURATION = {
  fast: 0.2,
  medium: 0.4,
  slow: 0.6,
  verySlow: 1.0,
} as const;

// Standard easing functions
export const ANIMATION_EASING = {
  easeOut: "easeOut",
  easeIn: "easeIn",
  easeInOut: "easeInOut",
  linear: "linear",
} as const;

// Spring animation presets
export const SPRING_PRESETS = {
  gentle: {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 260,
    damping: 20,
  },
  stiff: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
  },
} as const;

// Common animation variants for Framer Motion
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.medium,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.medium,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

export const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: SPRING_PRESETS.gentle,
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: SPRING_PRESETS.bouncy,
  },
};

// Container variants for staggered children animations
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Hover/interaction animations
export const hoverScaleVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const hoverGlowVariants = {
  rest: { boxShadow: "0 0 0 rgba(59, 130, 246, 0)" },
  hover: { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
};

// Page transition variants
export const pageTransitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    duration: ANIMATION_DURATION.medium,
  },
};
