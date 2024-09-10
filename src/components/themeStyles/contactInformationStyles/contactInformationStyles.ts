import { colors } from '@/theme/theme-variables';

export const getFormTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});

export const getFormContainerStyle = (theme: 'dark' | 'light') => ({
  border: theme === 'dark' ? '' : `2px solid ${colors.white}`,
});

export const getFormButtonStyles = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? '' : colors.white,
  color: theme === 'dark' ? '' : colors.black,
});
