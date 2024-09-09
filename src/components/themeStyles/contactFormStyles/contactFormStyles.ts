import { colors } from '@/theme/theme-variables';

export const getButtonThemeStyles = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.globalBackground,
  backgroundColor: theme === 'dark' ? '' : colors.white,
});
