import type { FC } from 'react';
import styles from './FavoriteProducts.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { FavoriteProduct } from '../FavoriteProduct/FavoriteProduct';
import { BackgroundSVG } from '@/components/layout/BackgroundSVG/BackgroundSVG';

export const FavoriteProducts: FC = () => {
  const favoriteProducts = useAppSelector((state) => state.favorite.goods);

  const theme = useAppSelector((state) => state.theme.theme);
  const themeClass = theme === 'dark' ? 'darkTheme' : 'lightTheme';

  return (
    <section className={`${styles.favoriteProducts} ${themeClass}`}>
      {favoriteProducts.length === 0 ? (
        <div className={styles.emptyBanner}>
          <BackgroundSVG />
        </div>
      ) : (
        favoriteProducts.map((good) => (
          <FavoriteProduct good={good} key={good.productId} />
        ))
      )}
    </section>
  );
};
