import { useMemo, type FC } from 'react';
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
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

interface CartContent {
  activeTab: number;
}

const tabVariants = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
};

export const CartContent: FC<CartContent> = ({ activeTab }) => {
  const cartProducts = useAppSelector((state) => state.cart.goods);
  const subTotal = useMemo(() => {
    return cartProducts.reduce((acc, good) => acc + good.originalPrice, 0);
  }, [cartProducts]);

  const discount = 0.25;
  const shipping = 0.0;
  const total = subTotal - discount + shipping;

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
            <CartSummary total={total} subTotal={subTotal} />
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
          <OrderSummary total={total} subTotal={subTotal} />
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
          <OrderComplete total={total} />
        </motion.div>
      );
    default:
      return null;
  }
};
