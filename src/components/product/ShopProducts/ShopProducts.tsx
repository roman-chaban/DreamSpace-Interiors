'use client';

import { FC, Fragment, useEffect, useState } from 'react';
import currentProducts from '@/services/products/products.json';
import { Products } from '@/types/products';
import styles from '@/styles/pagesStyles/Shop/Shop.module.scss';
import { ShopProduct } from '../ShopProduct/ShopProduct';
import { ShopNavItem, shopNavItems } from '@/constants/shopNav';
import { Button } from '@/components/ui/Button/Button';

export const ShopProducts: FC = () => {
  const [products, setProducts] = useState<Products>([]);

  useEffect(() => {
    setProducts(currentProducts);
  }, []);
  return (
    <div className={styles.shopProducts}>
      <div className={styles.shopProductsNav}>
        <h4 className={styles.navTitle}>Living Room</h4>
        <div className={styles.selectedOptions}>
          {shopNavItems.map((item: ShopNavItem) => (
            <Button type="button" className={styles.shopNavItem} key={item.id}>
              {item.icon}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ShopProduct product={product} key={product.productId} />
        ))}
      </div>
      <Button className={styles.showMoreButton} type="button">
        Show more
      </Button>
    </div>
  );
};
