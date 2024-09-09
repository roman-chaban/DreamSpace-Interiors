import { colors } from '@/theme/theme-variables';

export const getInfoThemeStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});
export const getInfoThemeBackground = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? '' : colors.black,
  color: theme === 'dark' ? '' : colors.white,
});

export const getCounterThemeStyles = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});
