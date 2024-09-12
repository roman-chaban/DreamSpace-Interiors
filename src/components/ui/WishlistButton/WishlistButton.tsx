import type { CSSProperties, FC, ReactNode } from 'react';

export type WishlistButtonType = {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export const WishlistButton: FC<WishlistButtonType> = ({
  children,
  type,
  className,
  style,
  onClick,
}) => {
  return (
    <button className={className} type={type} style={style} onClick={onClick}>
      {children}
    </button>
  );
};
