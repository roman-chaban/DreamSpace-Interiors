import { CSSProperties } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface PasswordInputProps {
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  style?: CSSProperties;
}
