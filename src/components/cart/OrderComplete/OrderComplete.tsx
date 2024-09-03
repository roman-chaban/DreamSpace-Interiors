import type { FC } from 'react';
import styles from './OrderComplete.module.scss';
import { Button } from '@/components/ui/Button/Button';

export const OrderComplete: FC = () => {
  return (
    <div className={styles.orderComplete}>
      <div className={styles.completeContainer}>
        <div className={styles.orderBlock}>
          <h4 className={styles.thanksTitle}>Thank you! 🎉</h4>
          <h2 className={styles.orderTitle}>Your order has been received</h2>
          <ul className={styles.orderList}>
            <li className={styles.orderListItem}>Order code:</li>
            <li className={styles.orderListItem}>Date:</li>
            <li className={styles.orderListItem}>Total:</li>
            <li className={styles.orderListItem}>Payment method:</li>
          </ul>
          <Button type="button" className={styles.orderButton}>
            Purchase order
          </Button>
        </div>
      </div>
    </div>
  );
};
