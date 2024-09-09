import { colors } from '@/theme/theme-variables';

export const getTitleItemStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.darkestGray : colors.white,
});

export const getSecondTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});
