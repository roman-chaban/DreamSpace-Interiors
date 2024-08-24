import type { Metadata } from 'next';
import '@/styles/main/main.scss';
import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { inter } from '@/fonts/basic-fonts';

export const metadata: Metadata = {
  title: 'DreamSpace Interiors | Home',
  description:
    'Welcome to DreamSpace-Interiors, where we turn your interior design dreams into reality. Our website is a comprehensive resource for homeowners and businesses looking to revitalize their spaces with stylish, functional, and innovative design solutions.',
  icons: '/favicon/favicon.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">{children}</div>
      </body>
    </html>
  );
}
