import { FC, ChangeEvent } from 'react';

interface CustomRadioButtonProps {
  className?: string;
  labelClassName?: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomRadioButton: FC<CustomRadioButtonProps> = ({
  className,
  labelClassName,
  label,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className={labelClassName}>
      <input
        type="radio"
        className={className}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};
