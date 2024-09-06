export const buttonHoverTap = {
    whileHover: { scale: 1.1, transition: { duration: 0.3 } },
    whileTap: { scale: 0.9 },
  };
  
  export const iconRotation = (isOpen: boolean) => ({
    rotate: isOpen ? 180 : 0,
    transition: { duration: 0.3 },
  });
  
  export const dropdownMenuAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };
  
  export const listItemHoverTap = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 },
  };
  