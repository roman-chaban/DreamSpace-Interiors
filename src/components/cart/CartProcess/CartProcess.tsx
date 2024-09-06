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
import { OrderSummary } from '../OrderSummary/OrderSummary';
import { OrderComplete } from '../OrderComplete/OrderComplete';
import { motion, AnimatePresence } from 'framer-motion';

export const CartProcess: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(2);

  const tabVariants = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
  };

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <motion.div
            key="tab1"
            variants={tabVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className={styles.productsSummary}
          >
            <div className={styles.productsCartBlock}>
              <CartProducts />
              <CartSummary />
            </div>
            <Coupon />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="tab2"
            variants={tabVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className={styles.productsSummaryBlock}
          >
            <div className={styles.processForms}>
              <ContactInformation />
              <ShippingAddress />
              <Payment />
            </div>
            <OrderSummary />
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="tab3"
            variants={tabVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <OrderComplete />
          </motion.div>
        );
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
      <div className={styles.content}>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </div>
  );
};
