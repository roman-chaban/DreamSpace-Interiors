import { TopBanner } from '@/components/common/TopBanner/TopBanner';
import { Footer } from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { ShopProducts } from '@/components/product/ShopProducts/ShopProducts';
import styles from '@/styles/pagesStyles/Shop/Shop.module.scss';
import { params } from '@/types/params';

export default function Shop() {
  return (
    <>
      <Header />
      <main className={styles.shopMain}>
        <section className={styles.shop}>
          <div className={styles.shopContainer}>
            <TopBanner params={params} />
            <div className={styles.shopContent}>
              <Sidebar />
              <ShopProducts />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
