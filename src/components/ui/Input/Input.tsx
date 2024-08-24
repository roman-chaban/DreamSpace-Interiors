import React, { CSSProperties, FC, ChangeEvent } from 'react';

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
}

export const Input: FC<InputProps> = ({
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
}) => {
  return (
    <input
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
    />
  );
};
