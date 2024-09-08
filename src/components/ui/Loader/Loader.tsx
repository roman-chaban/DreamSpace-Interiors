import { FC } from 'react';
import styles from './Loader.module.scss';
import { useTheme } from '@/hooks/useTheme';
import { colors } from '@/theme/theme-variables';

export const Loader: FC = () => {
  const { theme } = useTheme();
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
