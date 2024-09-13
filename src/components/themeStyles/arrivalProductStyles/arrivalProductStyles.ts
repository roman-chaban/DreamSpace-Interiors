import { colors } from '@/theme/theme-variables';

export const getArrivalTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});

export const getArrivalTitleDiscountTitle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.darkGray : colors.success,
});
