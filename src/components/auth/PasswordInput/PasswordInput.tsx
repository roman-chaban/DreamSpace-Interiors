import { FC } from 'react';
import { Input } from '@/components/ui/Input/Input';
import Image from 'next/image';
import styles from './PasswordInput.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface PasswordInputProps {
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

export const PasswordInput: FC<PasswordInputProps> = ({
  id,
  placeholder,
  register,
}) => (
  <label htmlFor={id} className={styles.formLabel}>
    <Input
      type="password"
      id={id}
      placeholder={placeholder}
      className={styles.formInput}
      {...register}
    />
    <Image
      src="/icons/eye.svg"
      alt="Eye Icon"
      width={24}
      height={24}
      className={styles.passwordIcon}
    />
  </label>
);
