import React, { CSSProperties, FC, ChangeEvent } from 'react';

interface InputProps {
  type: 'text' | 'email';
  className?: string;
  id: string;
  style?: CSSProperties;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  ariaLabel?: string;
  name: string;
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
    />
  );
};
