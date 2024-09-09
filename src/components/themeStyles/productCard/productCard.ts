import { colors } from '@/theme/theme-variables';

export const getProductTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});

export const getButtonStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.black,
  backgroundColor: theme === 'dark' ? '' : colors.white,
});
