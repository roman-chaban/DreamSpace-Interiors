import type { CSSProperties, FC, ReactNode } from 'react';

export type AddButtonType = {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export const AddButton: FC<AddButtonType> = ({
  children,
  type,
  className,
  style,
  onClick,
}) => {
  return (
    <button onClick={onClick} type={type} className={className} style={style}>
      {children}
    </button>
  );
};
