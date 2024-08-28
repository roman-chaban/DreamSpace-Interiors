import type { FC } from 'react';
import styles from './TextInput.module.scss';
import { Input } from '@/components/ui/Input/Input';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextInputProps {
  id: string;
  type: string;
  placeholder: string;
  className?: string;
  register: UseFormRegisterReturn;
}

export const TextInput: FC<TextInputProps> = ({
  id,
  type,
  placeholder,
  className,
  register,
}) => (
  <label htmlFor={id} className={styles.formLabel}>
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      className={className || styles.formInput}
      {...register}
    />
  </label>
);
