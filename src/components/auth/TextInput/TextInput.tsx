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
  const iconSrc = type === 'password' ? '/icons/eye.svg' : null;
  const iconAlt = type === 'password' ? 'Eye Icon' : null;

  return (
    <>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className={className || styles.formInput}
        {...register}
        labelText={labelText}
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
    </>
  );
};
