import { Variants } from 'framer-motion';

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerOne: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity',
  },
};

export const defaultFadeInUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const homeCardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};
