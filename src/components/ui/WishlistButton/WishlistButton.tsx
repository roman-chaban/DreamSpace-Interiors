import type { FC, ReactNode } from 'react';
import styles from './WishlistButton.module.scss';

export type WishlistButtonType = {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
};

export const WishlistButton: FC<WishlistButtonType> = ({ children, type }) => {
  return (
    <button className={styles.wishlistButton} type={type}>
      {children}
    </button>
  );
};
