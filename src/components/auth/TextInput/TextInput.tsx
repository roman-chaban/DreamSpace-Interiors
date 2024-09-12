'use client';

import type { FC } from 'react';
import styles from './TextInput.module.scss';
import { Input } from '@/components/ui/Input/Input';
import Image from 'next/image';
import { TextInputProps } from '@/types/text-input';

export const TextInput: FC<TextInputProps> = ({
  id,
  type,
  placeholder,
  className,
  register,
  labelText,
  labelClassName,
  style,
}) => {
  const iconSrc = type === 'password' ? '/icons/eye.svg' : null;
  const iconAlt = type === 'password' ? 'Eye Icon' : null;

  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        className={className || styles.formInput}
        {...register}
        labelText={labelText}
        style={style}
        labelClassName={labelClassName}
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
    </div>
  );
};
