import { NavPaths } from '@/enums/navPaths';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/product/ProductNav/ProductNav.module.scss';

export const navItemImage = (
  <Image
    src="/icons/right-icon.svg"
    width={12}
    height={12}
    alt="Link item arrow icon"
  />
);

export interface NavItem {
  item: JSX.Element;
  itemId: number;
}

export type ProductNavigationItemsType = NavItem[];

export const productNavigationItems: ProductNavigationItemsType = [
  {
    itemId: 1,
    item: (
      <Link href={NavPaths.HOME} className={styles.link}>
        Home
        {navItemImage}
      </Link>
    ),
  },
  {
    itemId: 2,
    item: (
      <Link href={NavPaths.SHOP} className={styles.link}>
        Shop
        {navItemImage}
      </Link>
    ),
  },
  {
    itemId: 3,
    item: <span className={styles.productItem} >Product</span>,
  },
];
