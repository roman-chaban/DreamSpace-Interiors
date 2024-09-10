import { colors } from '@/theme/theme-variables';

export const getTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});

export const getSignButtonStyle = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? '' : colors.white,
  color: theme === 'dark' ? '' : colors.black,
});
