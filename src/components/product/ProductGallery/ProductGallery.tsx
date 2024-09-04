import type { FC } from 'react';
import styles from './ProductGallery.module.scss';
import { Product } from '@/types/products';
import Image from 'next/image';

export type ProductGalleryType = {
  product: Product;
};

export const ProductGallery: FC<ProductGalleryType> = ({ product }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryMainImage}>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={400}
          height={400}
          className={styles.mainImage}
        />
        <div className={styles.discountTitles}>
          <span className={styles.discountedTitle}>
            {product.discountedTitle}
          </span>
          <span className={styles.discountPercentage}>
            {product.discountPercentage}
          </span>
        </div>
      </div>
    </div>
  );
};
