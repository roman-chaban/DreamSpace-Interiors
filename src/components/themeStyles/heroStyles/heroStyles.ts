import { colors } from '@/theme/theme-variables';

export const getHeroContainerStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.darkGray : colors.white,
});

export const getHeroTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});

export const getMarkStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.success,
});
