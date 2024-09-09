import type { FC } from 'react';
import { motion } from 'framer-motion';
import { CartProducts } from '../CartProducts/CartProducts';
import { CartSummary } from '../CartSummary/CartSummary';
import { Coupon } from '@/components/common/Coupon/Coupon';
import { ContactInformation } from '@/components/layout/ContactInformation/ContactInformation';
import { ShippingAddress } from '@/components/layout/ShippingAddress/ShippingAddress';
import { Payment } from '@/components/layout/Payment/Payment';
import { OrderSummary } from '../OrderSummary/OrderSummary';
import { OrderComplete } from '../OrderComplete/OrderComplete';
import styles from '@/components/cart/CartProcess/CartProcess.module.scss';

interface CartContent {
  activeTab: number;
}

const tabVariants = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
};

export const CartContent: FC<CartContent> = ({ activeTab }) => {
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
