import type { FC } from 'react';
import styles from '@/components/cart/CartProcess/CartProcess.module.scss';

interface CartItemStepProps {
  stepNumber: number;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export const CartItemStep: FC<CartItemStepProps> = ({
  isActive,
  onClick,
  stepNumber,
  title,
}) => {
  return (
    <div
      className={`${styles.processItem} ${isActive ? styles.activeBorder : ''}`}
      onClick={onClick}
    >
      <div
        className={`${styles.processCircle} ${isActive ? styles.active : ''}`}
      >
        {stepNumber}
      </div>
      <h4
        className={`${styles.processTitle} ${
          isActive ? styles.activeTitle : ''
        }`}
      >
        {title}
      </h4>
    </div>
  );
};
