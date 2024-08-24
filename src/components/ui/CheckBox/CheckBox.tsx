import type { FC, ChangeEvent } from 'react';
import styles from '@/components/layout/AuthForm/AuthForm.module.scss';

interface CheckBoxProps {
  name: string;
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export const CheckBox: FC<CheckBoxProps> = ({
  name,
  checked,
  onChange,
  disabled = false,
  className = '',
}) => {
  return (
    <label className={`${styles.customCheckbox} ${className}`}>
      <input
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
};
