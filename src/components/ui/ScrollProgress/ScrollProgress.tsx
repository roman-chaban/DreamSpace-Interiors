'use client';

import React, { useState, useEffect } from 'react';
import styles from './ScrollProgress.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';

const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollHeight = docHeight - winHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.scrollProgressContainer}>
      <div
        className={styles.scrollProgressBar}
        style={{
          width: `${scrollPercent}%`,
          background: theme === 'dark' ? '' : colors.white,
        }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
