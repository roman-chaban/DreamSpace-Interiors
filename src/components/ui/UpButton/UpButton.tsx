'use client';

import { useEffect, useState, FC } from 'react';
import styles from './UpButton.module.scss';
import useDebounce from '@/hooks/useDebounce';
import { UploadOption, Waypoint } from 'grommet-icons';

export const UpButton: FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const debouncedScrollY = useDebounce(scrollY, 100);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolledButton = debouncedScrollY > 300;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${styles.upButton} ${isScrolledButton ? styles.show : ''}`}
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
    >
      <UploadOption color='white' className={styles.iconUp} />
    </button>
  );
};
