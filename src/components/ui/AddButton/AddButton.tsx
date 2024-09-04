import type { FC, ReactNode } from 'react';
import styles from './AddButton.module.scss';

export type AddButtonType = {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
};

export const AddButton: FC<AddButtonType> = ({ children, type }) => {
  return (
    <button type={type} className={styles.addButton}>
      {children}
    </button>
  );
};
