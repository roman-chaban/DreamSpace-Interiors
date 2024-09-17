import { FC } from 'react';
import styles from './CartProducts.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getListItemThemeStyle } from '@/components/themeStyles/cartProductsStyles/cartProductsStyles';
import { Product } from '../Product/Product';
import { productTitle } from '@/components/themeStyles/productStyles/productStyles';

export const CartProducts: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const goods = useAppSelector((state) => state.cart.goods);

  return (
    <div className={styles.cartProducts}>
      <div className={styles.productsContainer}>
        <h4
          className={styles.cartProductsTitle}
          style={getListItemThemeStyle(theme)}
        >
          Product
        </h4>
        <ul className={styles.productsMenu}>
          <li
            className={styles.menuListItem}
            style={getListItemThemeStyle(theme)}
          >
            Quantity
          </li>
          <li
            className={styles.menuListItem}
            style={getListItemThemeStyle(theme)}
          >
            Price
          </li>
          <li
            className={styles.menuListItem}
            style={getListItemThemeStyle(theme)}
          >
            Subtotal
          </li>
        </ul>
      </div>
      <div className={styles.productGrid}>
        {goods.length === 0 ? (
          <h3 className={styles.emptyTitle} style={productTitle(theme)}>
            No Goods yet
          </h3>
        ) : (
          goods.map((good) => <Product good={good} key={good.productId} />)
        )}
      </div>
    </div>
  );
};
