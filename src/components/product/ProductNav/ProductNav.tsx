'use client';

import { Fragment, FC } from 'react';
import styles from './ProductNav.module.scss';
import { Product } from '@/types/products';
import {
  navItemImage,
  getProductNavigationItems,
} from '@/constants/productNav';
import Link from 'next/link';
import { NavPaths } from '@/enums/navPaths';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import React from 'react';

export type ProductNavType = {
  product: Product;
};

export const ProductNav: FC<ProductNavType> = ({ product }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const navigationItems = getProductNavigationItems();

  const linkColor = theme === 'dark' ? '' : colors.white;
  const itemColor = theme === 'dark' ? '' : colors.white;

  return (
    <div className={styles.productNav}>
      <div className={styles.navItems}>
        {navigationItems.map((item) => (
          <Fragment key={item.itemId}>
            {React.cloneElement(item.item, {
              style: item.item.props.style
                ? { ...item.item.props.style, color: itemColor }
                : { color: itemColor },
            })}
          </Fragment>
        ))}
        <Link
          href={NavPaths.PRODUCT}
          className={styles.link}
          style={{ color: linkColor }}
        >
          {product.title}
          {navItemImage}
        </Link>
      </div>
    </div>
  );
};
