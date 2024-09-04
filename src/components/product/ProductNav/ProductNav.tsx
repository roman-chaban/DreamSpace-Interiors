import { Fragment, type FC } from 'react';
import styles from './ProductNav.module.scss';
import { Product } from '@/types/products';
import { navItemImage, productNavigationItems } from '@/constants/productNav';
import Link from 'next/link';
import { NavPaths } from '@/enums/navPaths';

export type ProductNavType = {
  product: Product;
};

export const ProductNav: FC<ProductNavType> = ({ product }) => {
  return (
    <div className={styles.productNav}>
      <div className={styles.navItems}>
        {productNavigationItems.map((item) => (
          <Fragment key={item.itemId}>{item.item}</Fragment>
        ))}
        <Link href={NavPaths.PRODUCT} className={styles.link}>
          {product.title}
          {navItemImage}
        </Link>
      </div>
    </div>
  );
};
