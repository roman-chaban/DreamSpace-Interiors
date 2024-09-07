import type { FC, ReactNode } from 'react';
import styles from './WishlistButton.module.scss';

export type WishlistButtonType = {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  className?: string;
};

export const WishlistButton: FC<WishlistButtonType> = ({
  children,
  type,
  className,
}) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
