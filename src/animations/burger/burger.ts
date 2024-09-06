export const menuVariants = {
  hidden: {
    x: '100%',
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 25,
      opacity: { duration: 0.3 },
      scale: { duration: 0.4 },
      delay: 0.1,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    scale: 0.8,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 22,
    },
  },
};
