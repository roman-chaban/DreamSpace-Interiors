import { colors } from '@/theme/theme-variables';

export const getNavTitleLinkStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});
