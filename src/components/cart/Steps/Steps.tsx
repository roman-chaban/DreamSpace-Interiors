import type { FC } from 'react';
import { CartItemStep } from '../CartItemStep/CartItemStep';
import styles from '@/components/cart/CartProcess/CartProcess.module.scss';

interface StepsProps {
  activeTab: number;
  onTabClick: (tab: number) => void;
}

export const Steps: FC<StepsProps> = ({ activeTab, onTabClick }) => {
  return (
    <div className={styles.process}>
      <CartItemStep
        stepNumber={1}
        title="Shopping cart"
        isActive={activeTab === 1}
        onClick={() => onTabClick(1)}
      />
      <CartItemStep
        stepNumber={2}
        title="Checkout details"
        isActive={activeTab === 2}
        onClick={() => onTabClick(2)}
      />
      <CartItemStep
        stepNumber={3}
        title="Order complete"
        isActive={activeTab === 3}
        onClick={() => onTabClick(3)}
      />
    </div>
  );
};
