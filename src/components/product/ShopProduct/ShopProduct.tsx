import { Product } from '@/types/products';
import type { FC } from 'react';
import styles from './ShopProduct.module.scss';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { Favorite } from 'grommet-icons';

interface ShopProductProps {
  product: Product;
}

export const ShopProduct: FC<ShopProductProps> = ({product}) => {
  return (
    <div className={styles.productItem}>
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
        <h4 className={styles.productTitle}>{product.title}</h4>
        <div className={styles.productPrices}>
          <span className={styles.price}>{product.originalPrice}</span>
          <span className={styles.discount}>{product.discountedPrice}</span>
        </div>
      </div>
    </div>
  );
};