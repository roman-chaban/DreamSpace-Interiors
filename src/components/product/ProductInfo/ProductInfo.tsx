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

export type ProductInfoType = {
  product: Product;
};

const ProductInfo: FC<ProductInfoType> = ({ product }) => {
  const endDate = new Date('2024-09-18T00:00:00Z');
  const timeRemaining = useCountdown(endDate);
  const { productItemNumber, onAddProduct, onDeleteProduct } =
    useProductItemCounter({ productItem: 1 });
  const theme = useAppSelector((state) => state.theme.theme);

  const infoThemeStyle = { color: theme === 'dark' ? '' : colors.white };
  const infoThemeBackground = {
    backgroundColor: theme === 'dark' ? '' : colors.black,
    color: theme === 'dark' ? '' : colors.white,
  };

  const counterThemeStyles = {
    color: theme === 'dark' ? '' : colors.white,
  };

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
        <span className={styles.reviewsCount} style={infoThemeStyle}>
          {product.reviewsCount} Reviews
        </span>
      </div>
      <h1 className={styles.title} style={infoThemeStyle}>
        {product.title}
      </h1>
      <p className={styles.subTitle} style={infoThemeStyle}>
        {product.subTitle}
      </p>
      <div className={styles.prices} style={infoThemeStyle}>
        <h3 className={styles.originalPrice} style={infoThemeStyle}>
          {product.originalPrice}
        </h3>
        <span className={styles.discountedPrice} style={infoThemeStyle}>
          {product.discountedPrice}
        </span>
      </div>
      <div className={styles.offerBlock}>
        <h5 className={styles.offerTitle} style={infoThemeStyle}>
          Offer expires in:
        </h5>
        <div className={styles.discountTimeBlock}>
          <p className={styles.timeCapture}>
            <span className={styles.timeBlock} style={infoThemeBackground}>
              {timeRemaining.days}
            </span>
            <span className={styles.timeLabel} style={counterThemeStyles}>
              Days
            </span>
          </p>
          <p className={styles.timeCapture}>
            <span className={styles.timeBlock} style={infoThemeBackground}>
              {timeRemaining.hours}{' '}
            </span>
            <span className={styles.timeLabel} style={counterThemeStyles}>
              Hours
            </span>
          </p>
          <p className={styles.timeCapture}>
            <span className={styles.timeBlock} style={infoThemeBackground}>
              {timeRemaining.minutes}{' '}
            </span>
            <span className={styles.timeLabel} style={counterThemeStyles}>
              Minutes
            </span>
          </p>
          <p className={styles.timeCapture}>
            <span className={styles.timeBlock} style={infoThemeBackground}>
              {timeRemaining.seconds}{' '}
            </span>
            <span className={styles.timeLabel} style={counterThemeStyles}>
              Seconds
            </span>
          </p>
        </div>
      </div>
      <div className={styles.measurementsBlock}>
        <h5 className={styles.measurementsTitle} style={infoThemeStyle}>
          Measurements
        </h5>
        <p className={styles.measurementsParams} style={infoThemeStyle}>
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
            className={styles.wishlistButton}
            style={infoThemeBackground}
          >
            <Favorite
              color={theme === 'dark' ? 'plain' : colors.white}
              style={{ width: 25 }}
              className={styles.heartIcon}
            />{' '}
            Wishlist
          </WishlistButton>
        </div>
        <AddButton type="button" className={styles.addButton}>
          Add to Cart
        </AddButton>
      </div>
      <div className={styles.categoryBlock}>
        <h6 className={styles.skuTitle} style={counterThemeStyles}>
          <span className={styles.titleMark} style={counterThemeStyles}>
            SKU:
          </span>
          {product.sku}
        </h6>
        <h6 className={styles.categoryTitle} style={counterThemeStyles}>
          <span className={styles.titleMark} style={counterThemeStyles}>
            Category:
          </span>
          {product.category}
        </h6>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProductInfo), { ssr: false });
