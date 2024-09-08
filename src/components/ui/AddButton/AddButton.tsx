import type { CSSProperties, FC, ReactNode } from 'react';
import styles from './AddButton.module.scss';

export type AddButtonType = {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  className?: string;
  style?: CSSProperties;
};

export const AddButton: FC<AddButtonType> = ({ children, type, className, style }) => {
  return (
    <button type={type} className={className} style={style}>
      {children}
    </button>
  );
};
