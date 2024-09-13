'use client';

import { Products } from '@/types/products';
import { useEffect, useState, type FC } from 'react';
import styles from './ShopCategoriesPrices.module.scss';
import { ShopCategoryProductCard } from '../ShopCategoryProductCard/ShopCategoryProductCard';
import { Spinner } from '@/components/ui/Spinner/Spinner';

interface ShopCategoriesPricesProps {
  products: Products;
}

export const ShopCategoriesPrices: FC<ShopCategoriesPricesProps> = ({
  products,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.categoriesProducts}>
      {loading ? (
        <Spinner />
      ) : (
        products.map((product) => (
          <ShopCategoryProductCard key={product.productId} product={product} />
        ))
      )}
    </div>
  );
};
