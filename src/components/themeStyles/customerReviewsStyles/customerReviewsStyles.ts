import { colors } from '@/theme/theme-variables';

export const getCustomerTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
});

export const getMoreButtonStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.white,
  border: theme === 'dark' ? '' : `1.5px solid ${colors.white}`,
});

export const getAreaStyle = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
});

export const getTabsNavContainerStyle = (theme: 'dark' | 'light') => ({
  borderBottom: theme === 'dark' ? '' : 'none',
});