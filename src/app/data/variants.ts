import type { Variants } from "motion/react";

export const headerVariants: Variants = {
  initial: { y: -5, opacity: 0, rotateY: 45 },
  visible: {
    y: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  whileHover: {
    scaleX: 1.01,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

export const liVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.09 },
};

export const tooltipVariants: Variants = {
  rest: { opacity: 0, y: -5, display: "none" },
  hover: { opacity: 1, y: 0, display: "block" },
};

export const fadeInRight: Variants = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInUpLarge: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInUpRight: Variants = {
  hidden: { opacity: 0, y: 30, x: -30 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInUpLeft: Variants = {
  hidden: { opacity: 0, y: 30, x: 30 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInUpDelay: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const rotateYVariant: Variants = {
  hidden: { opacity: 0, rotateY: 45 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
