import { FC } from 'react';
import { CheckBox } from '@/components/ui/CheckBox/CheckBox';
import styles from './CheckboxWrapper.module.scss';
import { CheckBoxWrapperProps } from '@/types/checkbox-wrapper';

export const CheckBoxWrapper: FC<CheckBoxWrapperProps> = ({
  label,
  register,
  style,
}) => (
  <div className={styles.authCheckBox}>
    <CheckBox className={styles.formCheckBox} {...register} />
    <span className={styles.authCheckBoxSubTitle} style={style}>
      {label}
    </span>
  </div>
);
