import React, { FC, ChangeEvent, forwardRef } from 'react';

interface CustomRadioButtonProps {
  className?: string;
  labelClassName?: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomRadioButton = forwardRef<
  HTMLInputElement,
  CustomRadioButtonProps
>(({ className, labelClassName, label, value, checked, onChange }, ref) => {
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
      <span>{label}</span>
    </label>
  );
});

CustomRadioButton.displayName = 'CustomRadioButton';
