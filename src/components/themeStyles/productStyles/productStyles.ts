import { colors } from '@/theme/theme-variables';

export const productTitle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});
