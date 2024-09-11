'use client';

import { useEffect, type FC } from 'react';
import styles from '@/components/cart/CartProcess/CartProcess.module.scss';
import { CartItemStepProps } from '@/types/cart-step';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';

export const CartItemStep: FC<CartItemStepProps> = ({
  isActive,
  onClick,
  stepNumber,
  title,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const darkThemeStep = (theme: 'dark' | 'light') => ({
    backgroundColor: theme === 'dark' ? '' : colors.white,
    color: theme === 'dark' ? '' : colors.black,
  });

  const darkColorStep = (theme: 'dark' | 'light') => ({
    color: theme === 'dark' ? '' : colors.white,
  });

  const darkBorderStep = (theme: 'dark' | 'light') => ({
    borderBottom: theme === 'dark' ? '' : `1.5px solid ${colors.white}`,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <div
      className={`${styles.processItem} ${isActive ? styles.activeBorder : ''}`}
      onClick={onClick}
      style={darkBorderStep(theme)}
    >
      <div
        className={`${styles.processCircle} ${isActive ? styles.active : ''}`}
        style={darkThemeStep(theme)}
      >
        {stepNumber}
      </div>
      <h4
        className={`${styles.processTitle} ${
          isActive ? styles.activeTitle : ''
        }`}
        style={darkColorStep(theme)}
      >
        {title}
      </h4>
    </div>
  );
};
