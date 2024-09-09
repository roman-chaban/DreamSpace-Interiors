'use client';

import { FC } from 'react';
import styles from './Loader.module.scss';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

export const Loader: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const isDarkTheme = theme === 'dark';

  return (
    <div
      className={styles.loader}
      style={{ borderColor: isDarkTheme ? colors.success : colors.white }}
    >
      <div
        className={`${styles.loaderContainer} ${
          isDarkTheme ? styles.darkTheme : styles.lightTheme
        }`}
        style={{
          borderColor: isDarkTheme ? colors.success : colors.white,
        }}
      ></div>
    </div>
  );
};
