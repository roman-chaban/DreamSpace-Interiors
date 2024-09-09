import type { CSSProperties, FC } from 'react';

export type TextareaType = {
  className: string;
  name: string;
  id: string;
  style?: CSSProperties;
};

export const Textarea: FC<TextareaType> = ({ className, name, id, style }) => {
  return (
    <textarea
      className={className}
      name={name}
      id={id}
      style={style}
    ></textarea>
  );
};
