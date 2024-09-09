import { colors } from '@/theme/theme-variables';

export const getSummaryContainerStyles = (theme: 'light' | 'dark') => ({
  border: theme === 'dark' ? '' : `2px solid ${colors.white}`,
});

export const getSummaryButtonStyles = (theme: 'light' | 'dark') => ({
  color: theme === 'dark' ? '' : colors.black,
  backgroundColor: theme === 'dark' ? '' : colors.white,
});

export const getSummaryTitleThemeStyle = (theme: 'light' | 'dark') => ({
  color: theme === 'dark' ? '' : colors.white,
});
