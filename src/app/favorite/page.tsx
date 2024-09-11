'use client';

import { FavoriteProducts } from '@/components/favorite/FavoriteProducts/FavoriteProducts';
import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import styles from '@/styles/pagesStyles/Favorite/Favorite.module.scss';
import { colors } from '@/theme/theme-variables';

export default function Favorite() {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <>
      <Header />
      <main
        className={styles.main}
        style={{
          backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
        }}
      >
        <FavoriteProducts />
      </main>
      <Footer isVisible={false} />
    </>
  );
}
