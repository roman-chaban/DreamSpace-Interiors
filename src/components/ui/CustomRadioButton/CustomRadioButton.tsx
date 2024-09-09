import React, { FC, ChangeEvent, forwardRef, CSSProperties } from 'react';

interface CustomRadioButtonProps {
  className?: string;
  labelClassName?: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
}

export const CustomRadioButton = forwardRef<
  HTMLInputElement,
  CustomRadioButtonProps
>(
  (
    { className, labelClassName, label, value, checked, onChange, style },
    ref
  ) => {
    return (
      <label className={labelClassName}>
        <input
          type="radio"
          className={className}
          value={value}
          checked={checked}
          onChange={onChange}
          ref={ref}
        />
        <span style={style}>{label}</span>
      </label>
    );
  }
);

CustomRadioButton.displayName = 'CustomRadioButton';
