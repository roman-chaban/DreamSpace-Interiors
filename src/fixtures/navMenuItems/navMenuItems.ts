import { NavPaths } from '@/enums/navPaths';

export interface NavItem {
  id: number;
  href: string;
  label: string;
}

export type NavMenuItems = NavItem[];

export const navMenuItems: NavMenuItems = [
  { id: 1, href: NavPaths.HOME, label: 'Home' },
  { id: 2, href: NavPaths.SHOP, label: 'Shop' },
  { id: 3, href: NavPaths.BLOG, label: 'Blog' },
  { id: 4, href: NavPaths.CONTACT, label: 'Contact Us' },
];

export const burgerNavMenuItems: NavMenuItems = [
  { id: 1, href: NavPaths.HOME, label: 'Home' },
  { id: 2, href: NavPaths.SHOP, label: 'Shop' },
  { id: 3, href: NavPaths.BLOG, label: 'Blog' },
  { id: 4, href: NavPaths.CONTACT, label: 'Contact Us' },
  { id: 5, href: NavPaths.SIGNIN, label: 'Sign In' },
  { id: 6, href: NavPaths.SIGNUP, label: 'Sign Up' },
];
