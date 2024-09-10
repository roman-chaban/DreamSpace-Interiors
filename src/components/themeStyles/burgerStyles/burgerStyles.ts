import { colors } from '@/theme/theme-variables';

export const getBurgerBackgroundStyle = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
});

export const getBurgerLinkStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});

export const burgerButtonStyle = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? '' : colors.white,
  color: theme === 'dark' ? '' : colors.black,
});
