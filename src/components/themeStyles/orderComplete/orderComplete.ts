import { colors } from '@/theme/theme-variables';

export const getOrderBackground = (theme: 'dark' | 'light') => ({
  background: theme === 'dark' ? '' : colors.globalBackground,
});

export const getOrderTitle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});

export const getOrderCounter = (theme: 'dark' | 'light') => ({
  background: theme === 'dark' ? '' : colors.white,
  color: theme === 'dark' ? '' : colors.black,
});
