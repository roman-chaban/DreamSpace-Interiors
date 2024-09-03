'use client';

import { FC, Suspense, useEffect, useState } from 'react';
import { Products } from '@/types/products';
import styles from '@/styles/pagesStyles/Shop/Shop.module.scss';
import { ShopProduct } from '../ShopProduct/ShopProduct';
import { Button } from '@/components/ui/Button/Button';
import { ShopNav } from '@/components/common/ShopNav/ShopNav';
import { ShopNavItems } from '@/constants/shopNav';
import { Loader } from '@/components/ui/Loader/Loader';

export interface ShopProductsProps {
  items: ShopNavItems;
  onSelectContent: (id: number) => void;
  selectedItemId: number;
}

const fetchProducts = async (): Promise<Products> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require('@/services/products/products.json'));
    }, 1000);
  });
};

export const ShopProducts: FC<ShopProductsProps> = ({
  items,
  onSelectContent,
  selectedItemId,
}) => {
  const [products, setProducts] = useState<Products>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, []);

  return (
    <div className={styles.shopProducts}>
      <ShopNav
        items={items}
        onSelectContent={onSelectContent}
        selectedItemId={selectedItemId}
      />
      <Suspense fallback={<>Products Loading...</>}>
        <div className={styles.productsGrid}>
          {loading ? (
            <Loader />
          ) : (
            products.map((product) => (
              <ShopProduct product={product} key={product.productId} />
            ))
          )}
        </div>
        <Button className={styles.showMoreButton} type="button">
          Show more
        </Button>
      </Suspense>
    </div>
  );
};
