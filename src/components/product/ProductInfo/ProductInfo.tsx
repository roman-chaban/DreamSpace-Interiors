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

export type ProductInfoType = {
  product: Product;
};

const ProductInfo: FC<ProductInfoType> = ({ product }) => {
  const endDate = new Date('2024-09-18T00:00:00Z');
  const timeRemaining = useCountdown(endDate);
  const { productItemNumber, onAddProduct, onDeleteProduct } =
    useProductItemCounter({ productItem: 1 });
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
        <span className={styles.reviewsCount}>
          {product.reviewsCount} Reviews
        </span>
      </div>
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.subTitle}>{product.subTitle}</p>
      <div className={styles.prices}>
        <h3 className={styles.originalPrice}>{product.originalPrice}</h3>
        <span className={styles.discountedPrice}>
          {product.discountedPrice}
        </span>
      </div>
      <div className={styles.offerBlock}>
        <h5 className={styles.offerTitle}>Offer expires in:</h5>
        <div className={styles.discountTimeBlock}>
          <p className={styles.timeCapture}>
            <span className={styles.timeBlock}>{timeRemaining.days}</span>
            <span className={styles.timeLabel}>Days</span>
          </p>
          <p className={styles.timeCapture}>
            <span className={styles.timeBlock}>{timeRemaining.hours} </span>
            <span className={styles.timeLabel}>Hours</span>
          </p>
          <p className={styles.timeCapture}>
            <span className={styles.timeBlock}>{timeRemaining.minutes} </span>
            <span className={styles.timeLabel}>Minutes</span>
          </p>
          <p className={styles.timeCapture}>
            <span className={styles.timeBlock}>{timeRemaining.seconds} </span>
            <span className={styles.timeLabel}>Seconds</span>
          </p>
        </div>
      </div>
      <div className={styles.measurementsBlock}>
        <h5 className={styles.measurementsTitle}>Measurements</h5>
        <p className={styles.measurementsParams}>
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
          <WishlistButton type="button">
            <Favorite color="plain" /> Wishlist
          </WishlistButton>
        </div>
        <AddButton type="button">Add to Cart</AddButton>
      </div>
      <div className={styles.categoryBlock}>
        <h6 className={styles.skuTitle}>
          <span className={styles.titleMark}>SKU:</span>
          {product.sku}
        </h6>
        <h6 className={styles.categoryTitle}>
          <span className={styles.titleMark}>Category:</span>
          {product.category}
        </h6>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProductInfo), { ssr: false });
