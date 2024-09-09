import { colors } from '@/theme/theme-variables';

export const getListItemThemeStyle = (theme: 'dark' | 'light') => {
  return {
    color: theme === 'dark' ? '' : colors.white,
  };
};

export const getContainerThemeBorderBottom = (theme: 'dark' | 'light') => {
  return {
    borderBottom: theme === 'dark' ? '' : `1.5px solid ${colors.white}`,
  };
};
