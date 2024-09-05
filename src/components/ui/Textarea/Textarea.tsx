import type { FC } from 'react';

export type TextareaType = {
  className: string;
  name: string;
  id: string;
};

export const Textarea: FC<TextareaType> = ({ className, name, id }) => {
  return <textarea className={className} name={name} id={id}></textarea>;
};
