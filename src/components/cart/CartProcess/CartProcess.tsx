'use client';

import { useState, type FC } from 'react';
import styles from './CartProcess.module.scss';
import { CartProducts } from '../CartProducts/CartProducts';
import { CartSummary } from '../CartSummary/CartSummary';
import { ContactInformation } from '@/components/layout/ContactInformation/ContactInformation';
import { ShippingAddress } from '@/components/layout/ShippingAddress/ShippingAddress';
import { Payment } from '@/components/layout/Payment/Payment';

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
  const [activeTab, setActiveTab] = useState<number>(2);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className={styles.productsSummaryBlock}>
            <CartProducts />
            <CartSummary />
          </div>
        );
      case 2:
        return (
          <div
            className={`${styles.productsSummaryBlock} ${styles.processForms}`}
          >
            <ContactInformation />
            <ShippingAddress />
            <Payment />
          </div>
        );
      case 3:
        return 3;
      default:
        return null;
    }
  };

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
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

const OrderComplete: FC = () => {
  return <div>Order Complete - Thank you for your purchase!</div>;
};
