'use client';

import { Product } from '@/types/products';
import type { FC } from 'react';
import styles from './ShopProduct.module.scss';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { Favorite } from 'grommet-icons';
import Link from 'next/link';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

interface ShopProductProps {
  product: Product;
}

export const ShopProduct: FC<ShopProductProps> = ({ product }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={styles.productItem}>
      <Link href={`/product/${product.title.replaceAll(' ', '-')}`}>
        <div
          className={styles.productItemImage}
          style={{ backgroundImage: `url(${product.imageUrl})` }}
        >
          <Button type="button" className={styles.addButton}>
            Add to cart
          </Button>
          <div className={styles.productDiscount}>
            <span className={styles.newTitle}>{product.discountedTitle}</span>
            <span className={styles.discountTitle}>
              {product.discountPercentage}
            </span>
            <Button type="button" className={styles.favoriteIcon}>
              <Favorite style={{ width: 18, height: 18 }} />
            </Button>
          </div>
        </div>
      </Link>
      <div className={styles.productInfo}>
        <div className={styles.starsFill}>
          {product.rating.map((star, index) => (
            <Image
              key={index}
              src={star}
              alt={`Star ${index + 1}`}
              width={16}
              height={16}
              className={styles.starIcon}
            />
          ))}
        </div>
        <h4
          className={styles.productTitle}
          style={{ color: theme === 'dark' ? colors.black : colors.white }}
        >
          {product.title}
        </h4>
        <div className={styles.productPrices}>
          <span
            className={styles.price}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            {product.originalPrice}
          </span>
          <span
            className={styles.discount}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            {product.discountedPrice}
          </span>
        </div>
      </div>
    </div>
  );
};
