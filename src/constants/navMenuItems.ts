export interface NavItem {
  id: number;
  href: string;
  label: string;
}

export type NavMenuItems = NavItem[];

export const navMenuItems: NavMenuItems = [
  { id: 1, href: '/', label: 'Home' },
  { id: 2, href: '/shop', label: 'Shop' },
  { id: 3, href: '/product', label: 'Product' },
  { id: 4, href: '/contactUs', label: 'Contact Us' },
];
