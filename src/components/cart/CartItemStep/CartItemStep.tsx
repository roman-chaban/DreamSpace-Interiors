'use client';

import { useEffect, type FC } from 'react';
import styles from '@/components/cart/CartProcess/CartProcess.module.scss';
import { CartItemStepProps } from '@/types/cart-step';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  darkBorderStep,
  darkColorStep,
  darkThemeStep,
} from '@/components/themeStyles/cartItemStepStyles/cartItemStepStyles';

export const CartItemStep: FC<CartItemStepProps> = ({
  isActive,
  onClick,
  stepNumber,
  title,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);

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
