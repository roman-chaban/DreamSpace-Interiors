'use client';

import { useState, type FC } from 'react';
import styles from './CartProcess.module.scss';

interface StepItemProps {
  stepNumber: number;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const StepItem: FC<StepItemProps> = ({
  stepNumber,
  title,
  isActive,
  onClick,
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

export const CartProcess: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className={styles.cartProcess}>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.process}>
        <StepItem
          stepNumber={1}
          title="Shopping cart"
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
        <StepItem
          stepNumber={2}
          title="Checkout details"
          isActive={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />
        <StepItem
          stepNumber={3}
          title="Order complete"
          isActive={activeTab === 3}
          onClick={() => setActiveTab(3)}
        />
      </div>
    </div>
  );
};
