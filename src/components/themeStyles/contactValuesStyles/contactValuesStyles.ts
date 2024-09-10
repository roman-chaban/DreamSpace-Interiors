import { colors } from '@/theme/theme-variables';

export const getValueStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});

export const getValueBackgroundStyle = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? '' : colors.blackTransparent,
  padding: theme === 'dark' ? '' : 20,
});
