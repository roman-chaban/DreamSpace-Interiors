'use client';

import { Products } from '@/types/products';
import { useEffect, useState, type FC } from 'react';
import styles from './ShopCategoriesPrices.module.scss';
import { Loader } from '@/components/ui/Loader/Loader';
import { ShopCategoryProductCard } from '../ShopCategoryProductCard/ShopCategoryProductCard';

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
    <div className={styles.products}>
      {loading ? <Loader /> : <ShopCategoryProductCard products={products} />}
    </div>
  );
};
