import { colors } from '@/theme/theme-variables';

export const getArticlesTitle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});
