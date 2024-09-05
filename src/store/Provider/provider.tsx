'use client';

import { Provider } from 'react-redux';
import React, { ReactNode } from 'react';
import { store } from '../store';

type ProviderType = {
  children: ReactNode;
};

export function Providers({ children }: ProviderType) {
  return <Provider store={store}>{children}</Provider>;
}
