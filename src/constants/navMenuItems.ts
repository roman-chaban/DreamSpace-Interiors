import { NavPaths } from "@/enums/navPaths";

export interface NavItem {
  id: number;
  href: string;
  label: string;
}

export type NavMenuItems = NavItem[];

export const navMenuItems: NavMenuItems = [
  { id: 1, href: NavPaths.HOME, label: 'Home' },
  { id: 2, href: NavPaths.SHOP, label: 'Shop' },
  { id: 3, href: NavPaths.PRODUCT, label: 'Product' },
  { id: 4, href: NavPaths.CONTACT, label: 'Contact Us' },
];
