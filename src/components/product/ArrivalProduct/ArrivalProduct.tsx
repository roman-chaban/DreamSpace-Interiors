import { Product } from '@/types/products';
import type { FC } from 'react';
import styles from './ArrivalProduct.module.scss';
import Image from 'next/image';

interface ArrivalProductProps {
  product: Product;
}

export const ArrivalProduct: FC<ArrivalProductProps> = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <div
        className={styles.productItemImage}
        style={{ backgroundImage: `url(${product.imageUrl})` }}
      >
        <div className={styles.productDiscount}>
          <span className={styles.newTitle}>{product.discountedTitle}</span>
          <span className={styles.discountTitle}>
            {product.discountPercentage}
          </span>
        </div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.starsFill}>
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
        <h4 className={styles.productTitle}>{product.title}</h4>
        <div className={styles.productPrices}>
          <span className={styles.price}>{product.originalPrice}</span>
          <span className={styles.discount}>{product.discountedPrice}</span>
        </div>
      </div>
    </div>
  );
};
