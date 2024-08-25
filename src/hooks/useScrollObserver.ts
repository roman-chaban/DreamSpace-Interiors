import { useEffect, useState } from 'react';

export const useScrollObserver = () => {
  const [isScrolledNav, setIsScrolledNav] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('isScrolledNav') || 'false');
  });

  useEffect(() => {
    const handleScrolledNav = () => {
      if (window.scrollY > 0) {
        setIsScrolledNav(true);
      } else {
        setIsScrolledNav(false);
      }
    };

    window.addEventListener('scroll', handleScrolledNav);

    return () => {
      window.removeEventListener('scroll', handleScrolledNav);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('isScrolledNav', JSON.stringify(isScrolledNav));
  }, [isScrolledNav]);

  return { isScrolledNav };
};
