import type { FC, ReactNode } from 'react';
import styles from './AddButton.module.scss';

export type AddButtonType = {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  className?: string;
};

export const AddButton: FC<AddButtonType> = ({ children, type, className }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
