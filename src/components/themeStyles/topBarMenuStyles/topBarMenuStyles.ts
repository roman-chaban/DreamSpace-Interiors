import { colors } from '@/theme/theme-variables';
import styles from '@/components/layout/TopBarMenu/TopBarMenu.module.scss';

export const getBackgroundContainer = (theme: 'dark' | 'light') => ({
  backgroundColor:
    theme === 'dark' ? colors.lightGray : colors.globalBackground,
  borderBottom: theme === 'dark' ? 'none' : `1.5px solid ${colors.white}`,
});

export const getThemeClass = (theme: 'dark' | 'light') =>
  theme === 'dark' ? styles.darkTheme : styles.lightTheme;

export const getTitle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.darkGray : colors.white,
});

export const getLink = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.primary : colors.white,
});
