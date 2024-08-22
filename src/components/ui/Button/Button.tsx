import type { FC, ReactNode } from 'react';

interface ButtonProps {
  type: 'reset' | 'button' | 'submit';
  id?: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
  title?: string;
}

export const Button: FC<ButtonProps> = ({
  type,
  id,
  className,
  children,
  onClick,
  title,
}) => {
  return (
    <button
      title={title}
      type={type}
      id={id}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
