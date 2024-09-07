import type { Metadata } from 'next';
import '@/styles/main/main.scss';
import { inter } from '@/fonts/basic-fonts';
import ScrollProgress from '@/components/ui/ScrollProgress/ScrollProgress';
import { UpButton } from '@/components/ui/UpButton/UpButton';

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
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_PROJECT_APP_API_KEY}`}
        defer
      ></script>

      <body className={inter.className}>
        <ScrollProgress />
        <div className="layout">{children}</div>
        <UpButton />
      </body>
    </html>
  );
}
