import type { CSSProperties, FC, ReactNode } from 'react';

interface ButtonProps {
  type: 'reset' | 'button' | 'submit';
  id?: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
  title?: string;
  style?: CSSProperties;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  type,
  id,
  className,
  children,
  onClick,
  title,
  style,
  disabled,
}) => {
  return (
    <button
      style={style}
      title={title}
      type={type}
      id={id}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
