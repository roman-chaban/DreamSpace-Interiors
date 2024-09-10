'use client';

import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
          borderBottom: theme === 'dark' ? '' : `2px solid ${colors.white}`,
        }}
      >
        {children}
      </main>
      <Footer isVisible={false} />
    </>
  );
}
