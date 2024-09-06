import { UseFormRegisterReturn } from 'react-hook-form';

export interface TextInputProps {
  id: string;
  type: string;
  placeholder?: string;
  className?: string;
  register: UseFormRegisterReturn;
  labelText?: string;
  labelClassName?: string;
}
