import type { Metadata } from 'next';
import styles from '@/styles/pagesStyles/Auth/Auth.module.scss';

export const metadata: Metadata = {
  title: 'DreamSpace Interiors | Auth Layout',
  description:
    'A special layout for authentication pages without header and footer.',
  icons: '/favicon/favicon.svg',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={styles.authLayout}>{children}</main>;
}
