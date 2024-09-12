'use client';

import { FC, useEffect, useState } from 'react';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const spinnerTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(spinnerTimer);
    };
  }, []);

  return (
    <div className={styles.container}>
      {isLoading && <div className={styles.circle}></div>}
    </div>
  );
};
