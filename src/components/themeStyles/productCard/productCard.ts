import { colors } from '@/theme/theme-variables';

export const getProductTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.black : colors.white,
});

export const getProductTitleDiscountStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? colors.darkGray : colors.error,
});

export const getButtonStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.black,
  backgroundColor: theme === 'dark' ? '' : colors.white,
});

export const getProductBorderStyle = (theme: 'dark' | 'light') => ({
  border: theme === 'dark' ? '' : `3px solid ${colors.grayLight}`,
  borderRadius: theme === 'dark' ? '' : '12px',
});

export const getProductInfoStyles = (theme: 'dark' | 'light') => ({
  padding: theme === 'dark' ? '' : '10px',
});

export const getDiscountedTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.error,
});
