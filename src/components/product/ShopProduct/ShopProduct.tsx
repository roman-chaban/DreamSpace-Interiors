'use client';

import { Product } from '@/types/products';
import type { FC } from 'react';
import styles from './ShopProduct.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { Favorite } from 'grommet-icons';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getDiscountedTitleStyle,
  getProductBorderStyle,
  getProductInfoStyles,
  getProductTitleStyle,
} from '@/components/themeStyles/productCard/productCard';
import { Stars } from '@/constants/productRating';
import { useProductActions } from '@/hooks/useProductActions';
import { colors } from '@/theme/theme-variables';

interface ShopProductProps {
  product: Product;
}

export const ShopProduct: FC<ShopProductProps> = ({ product }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const { isAddedCart, isAddedFavorite, handleAddProduct, handleAddFavorite } =
    useProductActions(product);

  return (
    <div className={styles.productItem} style={getProductBorderStyle(theme)}>
      <div
        className={styles.productItemImage}
        style={{
          backgroundImage: `url(${product.imageUrl})`,
        }}
      >
        <div className={styles.addBlock}>
          <Button
            type="button"
            className={styles.addButton}
            onClick={handleAddProduct}
          >
            {isAddedCart ? 'Added to cart' : 'Add to cart'}
          </Button>
        </div>
        <div className={styles.productDiscount}>
          <span className={styles.newTitle}>{product.discountedTitle}</span>
          <span className={styles.discountTitle}>
            {product.discountPercentage}
          </span>
          <Button
            type="button"
            className={`${styles.favoriteIcon} ${
              isAddedFavorite ? styles.addedFavorite : ''
            }`}
            onClick={handleAddFavorite}
          >
            <Favorite
              style={{ width: 18, height: 18 }}
              color={isAddedFavorite ? colors.white : ''}
            />
          </Button>
        </div>
      </div>
      <div className={styles.productInfo} style={getProductInfoStyles(theme)}>
        <div className={styles.starsFill}>
          <Stars />
        </div>
        <h4 className={styles.productTitle}>
          <Link
            href={`/product/${product.title.replaceAll(' ', '-')}`}
            style={getProductTitleStyle(theme)}
          >
            {product.title}
          </Link>
        </h4>
        <div className={styles.productPrices}>
          <span className={styles.price} style={getProductTitleStyle(theme)}>
            ${product.originalPrice}
          </span>
          <span
            className={styles.discount}
            style={getDiscountedTitleStyle(theme)}
          >
            {product.discountedPrice}
          </span>
        </div>
      </div>
    </div>
  );
};
