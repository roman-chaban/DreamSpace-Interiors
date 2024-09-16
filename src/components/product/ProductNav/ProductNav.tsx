'use client';

import type { FC } from 'react';
import styles from './ProductNav.module.scss';
import { Product } from '@/types/products';
import Link from 'next/link';
import { NavPaths } from '@/enums/navPaths';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import React from 'react';
import { NavItems } from '@/fixtures/navItems/NavItems';

export type ProductNavType = {
  product: Product;
};

export const ProductNav: FC<ProductNavType> = ({ product }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const linkColor = theme === 'dark' ? '' : colors.white;

  return (
    <div className={styles.productNav}>
      <div className={styles.navItems}>
        <NavItems />
        <Link
          href={NavPaths.PRODUCT}
          className={styles.link}
          style={{ color: linkColor }}
        >
          {product.title}
        </Link>
      </div>
    </div>
  );
};
