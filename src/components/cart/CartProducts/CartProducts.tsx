'use client';

import type { FC } from 'react';
import styles from './CartProducts.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getContainerThemeBorderBottom, getListItemThemeStyle } from '@/components/themeStyles/cartProductsStyles/cartProductsStyles';

export const CartProducts: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={styles.cartProducts}>
      <ul
        className={styles.productsMenu}
        style={getContainerThemeBorderBottom(theme)}
      >
        <li className={styles.menuListItem} style={getListItemThemeStyle(theme)}>
          Product
        </li>
        <li className={styles.menuListItem} style={getListItemThemeStyle(theme)}>
          Quantity
        </li>
        <li className={styles.menuListItem} style={getListItemThemeStyle(theme)}>
          Price
        </li>
        <li className={styles.menuListItem} style={getListItemThemeStyle(theme)}>
          Subtotal
        </li>
      </ul>
      <div style={{ minHeight: '500px' }}></div>
    </div>
  );
};
