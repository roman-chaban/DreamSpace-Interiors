'use client';

import { useState, type FC } from 'react';
import styles from './CartProcess.module.scss';
import { CartProducts } from '../CartProducts/CartProducts';
import { CartSummary } from '../CartSummary/CartSummary';
import { ContactInformation } from '@/components/layout/ContactInformation/ContactInformation';
import { ShippingAddress } from '@/components/layout/ShippingAddress/ShippingAddress';
import { Payment } from '@/components/layout/Payment/Payment';
import { CartItemStep } from '../CartItemStep/CartItemStep';
import { Coupon } from '@/components/common/Coupon/Coupon';

export const CartProcess: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(2);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className={styles.productsSummaryBlock}>
            <div className={styles.productsCartBlock}>
              <CartProducts />
              <CartSummary />
            </div>
            <Coupon />
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
        <CartItemStep
          stepNumber={1}
          title="Shopping cart"
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
        <CartItemStep
          stepNumber={2}
          title="Checkout details"
          isActive={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />
        <CartItemStep
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
