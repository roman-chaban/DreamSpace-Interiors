import type { FC } from 'react';
import styles from './ProductGallery.module.scss';
import { Product } from '@/types/products';

export type ProductGalleryType = {
  product: Product;
};

export const ProductGallery: FC<ProductGalleryType> = ({ product }) => {
  return <div className={styles.gallery}>Product Gallery</div>;
};
