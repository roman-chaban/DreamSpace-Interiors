import { colors } from '@/theme/theme-variables';

export const getFeedbackPanelStyles = (theme: 'dark' | 'light') => ({
  border: theme === 'dark' ? '' : `3px solid ${colors.white}`,
  borderRadius: '50%',
});
