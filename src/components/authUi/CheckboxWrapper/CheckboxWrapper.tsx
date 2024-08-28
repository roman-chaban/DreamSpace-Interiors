import { FC } from 'react';
import { CheckBox } from '@/components/ui/CheckBox/CheckBox';
import styles from './CheckBoxWrapper.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CheckBoxWrapperProps {
  label: string;
  register: UseFormRegisterReturn;
}

export const CheckBoxWrapper: FC<CheckBoxWrapperProps> = ({
  label,
  register,
}) => (
  <div className={styles.authCheckBox}>
    <CheckBox className={styles.formCheckBox} {...register} />
    <span className={styles.authCheckBoxSubTitle}>{label}</span>
  </div>
);
