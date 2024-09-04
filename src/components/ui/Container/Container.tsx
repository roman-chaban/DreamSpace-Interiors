'use client';

import { FC, ReactNode } from 'react';
import { styled } from 'styled-components';

export type ContainerType = {
  children: ReactNode;
  className: string;
};

export const DefaultContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container: FC<ContainerType> = ({ children, className }) => {
  return <DefaultContainer className={className}>{children}</DefaultContainer>;
};
