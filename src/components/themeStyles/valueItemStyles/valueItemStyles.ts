import { colors } from '@/theme/theme-variables';

export const getValueItemTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});

export const getItemContainerStyles = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
});
