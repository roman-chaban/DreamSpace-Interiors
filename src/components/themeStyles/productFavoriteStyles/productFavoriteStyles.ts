import { colors } from '@/theme/theme-variables';

export const getProductTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});

export const getProductButtonStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.black,
  backgroundColor: theme === 'dark' ? '' : colors.white,
  fontWeight: theme === 'dark' ? '' : 600,
});
