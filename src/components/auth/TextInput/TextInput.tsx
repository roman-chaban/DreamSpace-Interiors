import type { FC } from 'react';
import styles from './TextInput.module.scss';
import { Input } from '@/components/ui/Input/Input';
import { UseFormRegisterReturn } from 'react-hook-form';
import Image from 'next/image';

interface TextInputProps {
  id: string;
  type: string;
  placeholder?: string;
  className?: string;
  register: UseFormRegisterReturn;
  labelText?: string;
  labelClassName?: string;
}

export const TextInput: FC<TextInputProps> = ({
  id,
  type,
  placeholder,
  className,
  register,
  labelText,
  labelClassName,
}) => {
  let iconSrc: string | null = null;
  let iconAlt: string | null = null;

  if (type === 'password') {
    iconSrc = '/icons/eye.svg';
    iconAlt = 'Eye Icon';
  } else if (type !== 'password') {
    iconSrc = '/icons/coupon-icon.svg';
    iconAlt = 'Coupon Icon';
  }

  return (
    <label htmlFor={id} className={`${styles.formLabel} ${labelClassName}`}>
      {labelText}
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className={className || styles.formInput}
        {...register}
      />
      {iconSrc && iconAlt && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={24}
          height={24}
          className={styles.icon}
        />
      )}
    </label>
  );
};
