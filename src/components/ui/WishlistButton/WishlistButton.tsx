import type { CSSProperties, FC, ReactNode } from 'react';
import styles from './WishlistButton.module.scss';

export type WishlistButtonType = {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  className?: string;
  style?: CSSProperties;
};

export const WishlistButton: FC<WishlistButtonType> = ({
  children,
  type,
  className,
  style,
}) => {
  return (
    <button className={className} type={type} style={style}>
      {children}
    </button>
  );
};
