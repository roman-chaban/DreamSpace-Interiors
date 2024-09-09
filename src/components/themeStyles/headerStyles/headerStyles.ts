import { colors } from '@/theme/theme-variables';

export const getContainerStyle = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? colors.white : colors.globalBackground,
});

export const getHeaderLinkStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});

export const getHeaderLinkActiveStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.darkGray : colors.white,
});
