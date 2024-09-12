/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { FC, useEffect, useState, useRef } from 'react';
import { Products } from '@/types/products';
import styles from '@/styles/pagesStyles/Shop/Shop.module.scss';
import { ShopProduct } from '../ShopProduct/ShopProduct';
import { ShopNav } from '@/components/common/ShopNav/ShopNav';
import { ShopNavItems } from '@/constants/shopNav';
import { motion } from 'framer-motion';
import { productVariants } from '@/animations/productCard/productCard';
import { Spinner } from '@/components/ui/Spinner/Spinner';

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
  const [visibleProducts, setVisibleProducts] = useState<Products>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setVisibleProducts(data.slice(0, visibleCount));
      setLoading(false);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const handleLoadMore = () => {
      setVisibleCount((prevCount) => prevCount + 3);
    };

    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        handleLoadMore();
      }
    };

    observer.current = new IntersectionObserver(observerCallback, options);

    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => {
      if (observer.current && sentinelRef.current) {
        observer.current.unobserve(sentinelRef.current);
      }
    };
  }, [visibleCount]);

  useEffect(() => {
    if (products.length > 0) {
      setVisibleProducts(products.slice(0, visibleCount));
    }
  }, [products, visibleCount]);

  return (
    <div className={styles.shopProducts}>
      <ShopNav
        title="Living Room"
        items={items}
        onSelectContent={onSelectContent}
        selectedItemId={selectedItemId}
      />
      <div className={styles.productsGrid}>
        {loading ? (
          <Spinner />
        ) : (
          visibleProducts.map((product) => (
            <motion.div
              key={product.productId}
              custom={product.productId}
              initial="hidden"
              animate="visible"
              variants={productVariants}
              className={styles.cardContainer}
            >
              <ShopProduct product={product} />
            </motion.div>
          ))
        )}
      </div>
      <div ref={sentinelRef} />
    </div>
  );
};
