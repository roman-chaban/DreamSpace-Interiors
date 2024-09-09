'use client';

import { FC } from 'react';
import styles from './Loader.module.scss';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

export const Loader: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const loaderStyles = {
    borderColor: theme === 'dark' ? colors.white : colors.success,
    backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
  };

  return (
    <div className={styles.loader} style={loaderStyles}>
      <div
        className={`${styles.loaderContainer} ${
          theme === 'dark' ? styles.lightTheme : styles.darkTheme
        }`}
      ></div>
    </div>
  );
};
