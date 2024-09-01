import type { FC } from 'react';
import styles from './CartProducts.module.scss';

export const CartProducts: FC = () => {
  return (
    <div className={styles.cartProducts}>
        <ul className={styles.productsMenu}>
          <li className={styles.menuListItem}>Product</li>
          <li className={styles.menuListItem}>Quantity</li>
          <li className={styles.menuListItem}>Price</li>
          <li className={styles.menuListItem}>Subtotal</li>
        </ul>
    </div>
  );
};
