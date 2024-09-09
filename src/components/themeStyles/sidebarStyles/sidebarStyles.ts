import { colors } from '@/theme/theme-variables';

export const getStrokeStyle = (theme: 'dark' | 'light') =>
  theme === 'dark' ? colors.black : colors.white;

export const getTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});

export const getButtonStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.darkGray : colors.white,
});
