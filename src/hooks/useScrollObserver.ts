import { useEffect, useState } from 'react';

export const useScrollObserver = () => {
  const [isScrolledNav, setIsScrolledNav] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('isScrolledNav');
      return savedState ? JSON.parse(savedState) : window.scrollY > 50;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const scrolled = window.scrollY > 50;
        setIsScrolledNav(scrolled);
        try {
          localStorage.setItem('isScrolledNav', JSON.stringify(scrolled));
        } catch (error) {
          console.error('Error saving to localStorage', error);
        }
      };

      handleScroll();

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return { isScrolledNav };
};
