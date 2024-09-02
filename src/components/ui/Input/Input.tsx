import React, { CSSProperties, ChangeEvent, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  type: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  ariaLabel?: string;
  name: string;
  checked?: boolean;
  labelText?: string;
  labelClassName?: string;
  register?: UseFormRegisterReturn;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      id,
      className = '',
      style = {},
      value,
      name,
      onChange,
      placeholder = '',
      disabled = false,
      ariaLabel = '',
      checked,
      labelText,
      labelClassName,
      register,
    },
    ref
  ) => {
    return (
      <label className={labelClassName}>
        {labelText}
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          value={value}
          className={className}
          style={style}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel}
          checked={checked}
          {...register}
        />
      </label>
    );
  }
);

Input.displayName = 'Input';
