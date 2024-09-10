import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import styles from '@/styles/pagesStyles/Favorite/Favorite.module.scss';

export default function Favorite() {
  return (
    <>
      <Header />
      <main className={styles.main}></main>
      <Footer isVisible={false} />
    </>
  );
}
