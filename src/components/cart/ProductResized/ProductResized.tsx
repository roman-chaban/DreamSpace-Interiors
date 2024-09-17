'use client';

import { Product } from '@/types/products';
import type { FC } from 'react';
import styles from './ProductResized.module.scss';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { Close } from 'grommet-icons';
import { useAppDispatch } from '@/hooks/redux-hooks/useAppDispatch';
import { deleteProductFromCart } from '@/store/slices/CartSlice';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useProductItemCounter } from '@/hooks/useProductItemCounter';
import { counterButtonIcons } from '@/components/ui/CounterButtonsIcons/CounterButtonsIcons';

interface ProductResizedProps {
  good: Product;
}

export const ProductResized: FC<ProductResizedProps> = ({ good }) => {
  const dispatch = useAppDispatch();

  const { onAddProduct, onDeleteProduct, productItemNumber } =
    useProductItemCounter({ productItem: 1 });

  const [isAddedCart, setIsAddedCart] = useLocalStorage(
    `product-${good.productId}`,
    true
  );

  const handleDeleteGood = () => {
    if (!isAddedCart) {
      dispatch(dispatch(deleteProductFromCart(good.productId)));
      setIsAddedCart(false);
    }
  };

  return (
    <div className={styles.good}>
      <div className={styles.goodContainer}>
        <Image
          src={good.imageUrl}
          alt={good.title}
          width={100}
          height={100}
          className={styles.goodImage}
        />
        <div className={styles.informationContainer}>
          <div className={styles.goodHeaderInformation}>
            <h4 className={styles.goodTitle}>{good.title}</h4>
            <strong className={styles.goodOriginalPrice}>
              ${good.originalPrice}
            </strong>
          </div>
          <div className={styles.goodMainInformation}>
            <p className={styles.goodSubCategory}>Category: {good.category}</p>
            <Button
              type="button"
              className={styles.closeButton}
              onClick={handleDeleteGood}
            >
              <Close />
            </Button>
          </div>
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
        </div>
      </div>
    </div>
  );
};
