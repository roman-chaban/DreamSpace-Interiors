'use client';

import { AddButton } from '@/components/ui/AddButton/AddButton';
import { WishlistButton } from '@/components/ui/WishlistButton/WishlistButton';
import { Product } from '@/types/products';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import styles from '@/components/product/ShopCategoriesPrices/ShopCategoriesPrices.module.scss';
import { productVariants } from '@/animations/productCard/productCard';
import { Favorite } from 'grommet-icons';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getButtonStyle,
  getProductTitleDiscountStyle,
  getProductTitleStyle,
} from '@/components/themeStyles/productCard/productCard';
import { Stars } from '@/fixtures/productRating/productRating';
import { useProductActions } from '@/hooks/useProductActions';

export interface ShopCategoryProductCardProps {
  product: Product;
}

export const ShopCategoryProductCard: FC<ShopCategoryProductCardProps> = ({
  product,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const { handleAddProduct, handleAddFavorite, isAddedCart, isAddedFavorite } =
    useProductActions(product);

  return (
    <div className={styles.product}>
      <motion.div
        custom={product.productId}
        initial="hidden"
        animate="visible"
        variants={productVariants}
        key={product.productId}
        className={styles.card}
      >
        <div
          style={{ backgroundImage: `url(${product.imageUrl})` }}
          className={styles.cardImage}
        >
          <div className={styles.productDiscount}>
            <span className={styles.newTitle}>{product.discountedTitle}</span>
            <span className={styles.discountTitle}>
              {product.discountPercentage}
            </span>
          </div>
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardRating}>
            <Stars />
          </div>
          <div className={styles.cardTitles}>
            <h4
              className={styles.cardTitle}
              style={getProductTitleStyle(theme)}
            >
              {product.title}
            </h4>
            <div className={styles.cardPrices}>
              <span
                className={styles.originalPrice}
                style={getProductTitleStyle(theme)}
              >
                ${product.originalPrice}
              </span>
              <span
                className={styles.discountedPrice}
                style={getProductTitleDiscountStyle(theme)}
              >
                {product.discountedPrice}
              </span>
            </div>
          </div>
          <p
            className={styles.cardSubTitle}
            style={getProductTitleStyle(theme)}
          >
            {product.subTitle}
          </p>
          <div className={styles.cardButtons}>
            <AddButton
              type="button"
              className={`${styles.cardAddButton} ${
                isAddedCart ? styles.active : ''
              }`}
              style={getButtonStyle(theme)}
              onClick={handleAddProduct}
            >
              {isAddedCart ? 'Added to cart' : 'Add to cart'}
            </AddButton>
            <WishlistButton
              className={`${styles.cardWishListButton} ${
                isAddedFavorite ? styles.activeFavorite : ''
              }`}
              type="button"
              style={getProductTitleStyle(theme)}
              onClick={handleAddFavorite}
            >
              <Favorite color={isAddedFavorite ? 'white' : 'plain'} />
              Wishlist
            </WishlistButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
