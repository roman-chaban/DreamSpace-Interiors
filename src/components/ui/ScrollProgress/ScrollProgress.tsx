'use client';

import React, { useState, useEffect } from 'react';
import styles from './ScrollProgress.module.scss';

const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);

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
        style={{ width: `${scrollPercent}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
