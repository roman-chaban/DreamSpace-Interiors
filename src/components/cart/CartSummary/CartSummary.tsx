import { FC } from 'react';
import styles from './CartSummary.module.scss';
import { Button } from '@/components/ui/Button/Button';

export const CartSummary: FC = () => {
  return (
    <div className={styles.cartSummary}>
      <div className={styles.summaryContainer}>
        <h4 className={styles.title}>Cart summary</h4>
        <div className={styles.summaryCheckoutButtons}>
          <Button type="button" className={styles.summaryButton}>
            Free shipping <span className={styles.price}>$0.00</span>
          </Button>
          <Button type="button" className={styles.summaryButton}>
            Express shipping <span className={styles.price}>+$15.00</span>
          </Button>
          <Button type="button" className={styles.summaryButton}>
            Pick Up <span className={styles.price}>%21.00</span>
          </Button>
        </div>
        <h5 className={styles.subTotalTitle}>Subtotal</h5>
        <h3 className={styles.totalTitle}>Total</h3>
        <Button type="button" className={styles.checkoutButton}>
          Checkout
        </Button>
      </div>
    </div>
  );
};
