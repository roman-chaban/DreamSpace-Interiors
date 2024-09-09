import { NavPaths } from '@/enums/navPaths';
import Link from 'next/link';
import styles from '@/components/product/ProductNav/ProductNav.module.scss';
import { FormNext } from 'grommet-icons';

export const navItemImage = <FormNext style={{ width: 14, height: 14 }} />;

export interface NavItem {
  item: JSX.Element;
  itemId: number;
}

export type ProductNavigationItemsType = NavItem[];

export const getProductNavigationItems = (): ProductNavigationItemsType => {
  return [
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
      item: <span className={styles.productItem}>Product</span>,
    },
  ];
};
