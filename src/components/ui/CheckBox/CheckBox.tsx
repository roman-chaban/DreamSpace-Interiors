import { type FC, type ChangeEvent, forwardRef } from 'react';
import styles from '@/components/layout/AuthForm/AuthForm.module.scss';

interface CheckBoxProps {
  name: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ name = '', checked, onChange, disabled = false, className = '' }, ref) => {
    return (
      <label className={`${styles.customCheckbox} ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={styles.checkboxInput}
        />
        <span className={styles.formCheckBox}></span>
      </label>
    );
  }
);

CheckBox.displayName = 'CheckBox';
