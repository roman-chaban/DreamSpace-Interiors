import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer isVisible={false} />
    </>
  );
}
