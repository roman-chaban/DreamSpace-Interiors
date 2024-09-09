import { colors } from '@/theme/theme-variables';

export const getSalesTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});

export const getSalesInfoBlockStyle = (theme: 'dark' | 'light') => ({
  backgroundColor:
    theme === 'dark' ? colors.lightGray : colors.globalBackground,
});
