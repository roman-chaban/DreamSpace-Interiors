export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export type FooterNav = NavItem[];

export const footerNav: FooterNav = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'Shop', href: '/shop' },
  { id: 3, label: 'Product', href: '/product' },
  { id: 4, label: 'Blog', href: '/blog' },
  { id: 5, label: 'Contact Us', href: '/contactUs' },
];
