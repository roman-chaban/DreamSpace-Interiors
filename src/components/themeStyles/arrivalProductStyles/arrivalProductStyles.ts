import { colors } from '@/theme/theme-variables';

export const getArrivalTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});
