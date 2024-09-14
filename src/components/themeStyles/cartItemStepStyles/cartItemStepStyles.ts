import { colors } from '@/theme/theme-variables';

export const darkThemeStep = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? '' : colors.white,
  color: theme === 'dark' ? '' : colors.black,
});

export const darkColorStep = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});

export const darkBorderStep = (theme: 'dark' | 'light') => ({
  borderBottom: theme === 'dark' ? '' : `1.5px solid ${colors.white}`,
});
