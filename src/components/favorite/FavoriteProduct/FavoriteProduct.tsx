import { Product } from '@/types/products';
import type { FC } from 'react';
import styles from './FavoriteProduct.module.scss';
import { useAppDispatch } from '@/hooks/redux-hooks/useAppDispatch';
import { deleteGoodFromFavorite } from '@/store/slices/FavoriteSlice';
import { Close } from 'grommet-icons';

interface FavoriteProductProps {
  good: Product;
}

export const FavoriteProduct: FC<FavoriteProductProps> = ({ good }) => {
  const dispatch = useAppDispatch();
  const handleDeleteGood = () => {
    dispatch(deleteGoodFromFavorite(good.productId));
  };
  return (
    <div className={styles.favoriteProduct}>
      <h1>{good.title}</h1>
      <button onClick={handleDeleteGood}>
        <Close />
      </button>
    </div>
  );
};
