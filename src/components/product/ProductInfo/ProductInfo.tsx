'use client';

import { Product } from '@/types/products';
import type { FC } from 'react';
import Image from 'next/image';
import styles from './ProductInfo.module.scss';
import { useCountdown } from '@/hooks/useCountdown';
import dynamic from 'next/dynamic';
import { AddButton } from '@/components/ui/AddButton/AddButton';
import { WishlistButton } from '@/components/ui/WishlistButton/WishlistButton';
import { Favorite } from 'grommet-icons';
import { useProductItemCounter } from '@/hooks/useProductItemCounter';
import { counterButtonIcons } from '@/components/ui/CounterButtonsIcons/CounterButtonsIcons';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import {
  getCounterThemeStyles,
  getInfoThemeBackground,
  getInfoThemeStyle,
} from '@/components/themeStyles/productInfoStyles/productInfoStyles';
import { getButtonStyle } from '@/components/themeStyles/customerReviewsStyles/customerReviewsStyles';
import { useProductActions } from '@/hooks/useProductActions';

export type ProductInfoType = {
  product: Product;
};

const ProductInfo: FC<ProductInfoType> = ({ product }) => {
  const endDate = new Date('2024-09-18T00:00:00Z');
  const timeRemaining = useCountdown(endDate);
  const { productItemNumber, onAddProduct, onDeleteProduct } =
    useProductItemCounter({ productItem: 1 });
  const theme = useAppSelector((state) => state.theme.theme);

  const { isAddedCart, isAddedFavorite, handleAddFavorite, handleAddProduct } =
    useProductActions(product);

  return (
    <div className={styles.productInfoContainer}>
      <div className={styles.ratingReviewsBlock}>
        <div className={styles.ratingStars}>
          {product.rating.map((star, index) => (
            <Image
              key={index}
              src={star}
              alt={`Star ${index + 1}`}
              width={16}
              height={16}
            />
          ))}
        </div>
        <span className={styles.reviewsCount} style={getInfoThemeStyle(theme)}>
          {product.reviewsCount} Reviews
        </span>
      </div>
      <h1 className={styles.title} style={getInfoThemeStyle(theme)}>
        {product.title}
      </h1>
      <p className={styles.subTitle} style={getInfoThemeStyle(theme)}>
        {product.subTitle}
      </p>
      <div className={styles.prices} style={getInfoThemeStyle(theme)}>
        <h3 className={styles.originalPrice} style={getInfoThemeStyle(theme)}>
          ${product.originalPrice}
        </h3>
        <span
          className={styles.discountedPrice}
          style={getInfoThemeStyle(theme)}
        >
          {product.discountedPrice}
        </span>
      </div>
      <div className={styles.offerBlock}>
        <h5 className={styles.offerTitle} style={getInfoThemeStyle(theme)}>
          Offer expires in:
        </h5>
        <div className={styles.discountTimeBlock}>
          <p className={styles.timeCapture}>
            <span
              className={styles.timeBlock}
              style={getInfoThemeBackground(theme)}
            >
              {timeRemaining.days}
            </span>
            <span
              className={styles.timeLabel}
              style={getCounterThemeStyles(theme)}
            >
              Days
            </span>
          </p>
          <p className={styles.timeCapture}>
            <span
              className={styles.timeBlock}
              style={getInfoThemeBackground(theme)}
            >
              {timeRemaining.hours}{' '}
            </span>
            <span
              className={styles.timeLabel}
              style={getCounterThemeStyles(theme)}
            >
              Hours
            </span>
          </p>
          <p className={styles.timeCapture}>
            <span
              className={styles.timeBlock}
              style={getInfoThemeBackground(theme)}
            >
              {timeRemaining.minutes}{' '}
            </span>
            <span
              className={styles.timeLabel}
              style={getCounterThemeStyles(theme)}
            >
              Minutes
            </span>
          </p>
          <p className={styles.timeCapture}>
            <span
              className={styles.timeBlock}
              style={getInfoThemeBackground(theme)}
            >
              {timeRemaining.seconds}{' '}
            </span>
            <span
              className={styles.timeLabel}
              style={getCounterThemeStyles(theme)}
            >
              Seconds
            </span>
          </p>
        </div>
      </div>
      <div className={styles.measurementsBlock}>
        <h5
          className={styles.measurementsTitle}
          style={getInfoThemeStyle(theme)}
        >
          Measurements
        </h5>
        <p
          className={styles.measurementsParams}
          style={getInfoThemeStyle(theme)}
        >
          {product.measurements}&quot;
        </p>
      </div>
      <div className={styles.addButtonsBlock}>
        <div className={styles.wishlistBlock}>
          <div className={styles.counterBlock}>
            <button onClick={onDeleteProduct} className={styles.counterButton}>
              {counterButtonIcons.minusIcon}
            </button>
            <span className={styles.productItemNumber}>
              {productItemNumber}
            </span>
            <button onClick={onAddProduct} className={styles.counterButton}>
              {counterButtonIcons.plusIcon}
            </button>
          </div>
          <WishlistButton
            type="button"
            className={`${styles.wishlistButton} ${
              isAddedFavorite ? styles.activeWishlist : ''
            }`}
            style={getButtonStyle(theme)}
            onClick={handleAddFavorite}
          >
            <Favorite
              color={isAddedFavorite ? colors.white : 'plain'}
              style={{ width: 25 }}
              className={styles.heartIcon}
            />{' '}
            Wishlist
          </WishlistButton>
        </div>
        <AddButton
          type="button"
          className={`${styles.addButton} ${isAddedCart ? styles.activeCartButton : ''}`}
          style={getButtonStyle(theme)}
          onClick={handleAddProduct}
        >
          {isAddedCart ? 'Added to cart' : 'Add to cart'}
        </AddButton>
      </div>
      <div className={styles.categoryBlock}>
        <h6 className={styles.skuTitle} style={getCounterThemeStyles(theme)}>
          <span
            className={styles.titleMark}
            style={getCounterThemeStyles(theme)}
          >
            SKU:
          </span>
          {product.sku}
        </h6>
        <h6
          className={styles.categoryTitle}
          style={getCounterThemeStyles(theme)}
        >
          <span
            className={styles.titleMark}
            style={getCounterThemeStyles(theme)}
          >
            Category:
          </span>
          {product.category}
        </h6>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProductInfo), { ssr: false });
