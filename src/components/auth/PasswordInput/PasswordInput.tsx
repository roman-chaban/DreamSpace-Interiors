'use client';

import { FC, useState } from 'react';
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
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <label htmlFor={id} className={styles.formLabel}>
      <Input
        type={showPassword ? 'text' : 'password'}
        id={id}
        placeholder={placeholder}
        className={styles.formInput}
        {...register}
      />
      <div className={styles.iconWrapper} onClick={togglePasswordVisibility}>
        <Image
          src="/icons/eye.svg"
          alt="Eye Icon"
          width={24}
          height={24}
          className={styles.passwordIcon}
        />
      </div>
    </label>
  );
};
