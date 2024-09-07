export const animation = {
  initial: {
    opacity: 0,
    y: -20,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.8,
    rotate: -15,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
  transition: {
    duration: 0.5,
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
};
