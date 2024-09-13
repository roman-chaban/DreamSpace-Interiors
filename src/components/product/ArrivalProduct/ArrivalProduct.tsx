'use client';

import { Product } from '@/types/products';
import { type FC } from 'react';
import styles from './ArrivalProduct.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { Favorite } from 'grommet-icons';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getArrivalTitleStyle } from '@/components/themeStyles/arrivalProductStyles/arrivalProductStyles';
import { Stars } from '@/constants/productRating';
import { colors } from '@/theme/theme-variables';
import { useProductActions } from '@/hooks/useProductActions';

interface ArrivalProductProps {
  product: Product;
}

export const ArrivalProduct: FC<ArrivalProductProps> = ({ product }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { isAddedCart, isAddedFavorite, handleAddProduct, handleAddFavorite } =
    useProductActions(product);

  return (
    <div className={styles.productItem}>
      <div
        className={styles.productItemImage}
        style={{ backgroundImage: `url(${product.imageUrl})` }}
      >
        <Button
          type="button"
          className={`${styles.addButton} ${
            isAddedCart ? styles.addedCart : ''
          } `}
          onClick={handleAddProduct}
        >
          {isAddedCart ? 'Added to cart' : 'Add to cart'}
        </Button>
        <div className={styles.productDiscount}>
          <span className={styles.newTitle}>{product.discountedTitle}</span>
          <span className={styles.discountTitle}>
            {product.discountPercentage}
          </span>
          <Button
            type="button"
            className={`${styles.favoriteIcon} ${
              isAddedFavorite ? styles.addedFavorite : ''
            } `}
            onClick={handleAddFavorite}
          >
            <Favorite
              style={{ width: 18, height: 18 }}
              color={isAddedFavorite ? colors.white : ''}
            />
          </Button>
        </div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.starsFill}>
          <Stars />
        </div>
        <h4 className={styles.productTitle}>
          <Link
            href={`/product/${product.title.replaceAll(' ', '-')}`}
            className={styles.productTitleLink}
            style={getArrivalTitleStyle(theme)}
          >
            {product.title}
          </Link>
        </h4>

        <div className={styles.productPrices}>
          <span className={styles.price} style={getArrivalTitleStyle(theme)}>
            ${product.originalPrice}
          </span>
          <span className={styles.discount} style={getArrivalTitleStyle(theme)}>
            {product.discountedPrice}
          </span>
        </div>
      </div>
    </div>
  );
};
