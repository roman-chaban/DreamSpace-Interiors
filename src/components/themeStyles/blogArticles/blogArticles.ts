import { colors } from '@/theme/theme-variables';

export const getButtonThemeStyles = (theme: 'dark' | 'light') => ({
  border: theme === 'dark' ? '' : `1.5px solid ${colors.white}`,
  color: theme === 'dark' ? '' : colors.white,
  backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
});
