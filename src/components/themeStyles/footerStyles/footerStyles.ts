import { colors } from '@/theme/theme-variables';

export const getFooterStyles = (theme: 'dark' | 'light') => ({
  backgroundColor: theme === 'dark' ? colors.black : colors.globalBackground,
  borderTop: theme === 'dark' ? '' : `2px solid ${colors.white}`,
});
