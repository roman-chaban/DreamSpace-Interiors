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
  boxShadow:
    theme === 'dark'
      ? ''
      : 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
  borderRadius: theme === 'dark' ? '' : '12px',
});

export const getProductInfoStyles = (theme: 'dark' | 'light') => ({
  padding: theme === 'dark' ? '' : '13px',
});

export const getDiscountedTitleStyle = (theme: 'dark' | 'light') => ({
  color: theme === 'dark' ? '' : colors.error,
});
