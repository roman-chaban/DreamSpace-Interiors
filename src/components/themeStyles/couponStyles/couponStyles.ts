import { colors } from '@/theme/theme-variables';

export const getThemeTitlesStyles = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});

export const getThemeInputTransparentBackground = (
  theme: 'dark' | 'light'
) => ({
  backgroundColor: theme === 'dark' ? '' : 'transparent',
  color: theme === 'dark' ? '' : colors.white,
  caretColor: theme === 'dark' ? '' : colors.white,
});

export const getThemeInputBox = (theme: 'dark' | 'light') => ({
  border: theme === 'dark' ? '' : `1.8px solid ${colors.white}`,
});

export const getTicketIcon = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.darkGray : colors.white,
});
