'use client';

import { poppins } from '@/fonts/basic-fonts';
import { Metadata } from 'next';
import styles from '@/styles/pagesStyles/Home/Home.module.scss';
import { Hero } from '@/components/layout/Hero/Hero';
import { ProductBanners } from '@/components/product/ProductsBanners/ProductsBanners';
import Header from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Values } from '@/components/layout/Values/Values';
import { Sales } from '@/components/layout/Sales/Sales';
import { Articles } from '@/components/layout/Articles/Articles';
import { ArrivalProducts } from '@/components/product/ArrivalProducts/ArrivalProducts';
import { valuesItems } from '@/constants/valuesItems';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
import { animationSettings } from '@/animations/home/home';

const classNames = {
  item: styles.item,
  itemContainer: styles.itemContainer,
  itemIcon: styles.itemIcon,
  itemTitles: styles.itemTitles,
  itemSubTitle: styles.itemSubTitle,
  itemTitle: styles.itemTitle,
};

export default function Home() {
  const { ref: heroRef, isVisible: isHeroVisible } = useIntersectionObserver({
    threshold: 0.1,
  });
  const { ref: productBannersRef, isVisible: isProductBannersVisible } =
    useIntersectionObserver({ threshold: 0.1 });
  const { ref: arrivalProductsRef, isVisible: isArrivalProductsVisible } =
    useIntersectionObserver({ threshold: 0.1 });
  const { ref: valuesRef, isVisible: isValuesVisible } =
    useIntersectionObserver({ threshold: 0.1 });
  const { ref: salesRef, isVisible: isSalesVisible } = useIntersectionObserver({
    threshold: 0.1,
  });
  const { ref: articlesRef, isVisible: isArticlesVisible } =
    useIntersectionObserver({ threshold: 0.1 });

  return (
    <main className={`${poppins.className} ${styles.main}`}>
      <Header />
      <motion.div
        ref={heroRef}
        className={styles.hero}
        initial={animationSettings.initial}
        animate={
          isHeroVisible
            ? animationSettings.animateVisible
            : animationSettings.animateHidden
        }
        transition={animationSettings.transition}
      >
        <Hero />
      </motion.div>
      <motion.div
        ref={productBannersRef}
        className={styles.productBanners}
        initial={animationSettings.initial}
        animate={
          isProductBannersVisible
            ? animationSettings.animateVisible
            : animationSettings.animateHidden
        }
        transition={animationSettings.transition}
      >
        <ProductBanners />
      </motion.div>
      <motion.div
        ref={arrivalProductsRef}
        className={styles.arrivalProducts}
        initial={animationSettings.initial}
        animate={
          isArrivalProductsVisible
            ? animationSettings.animateVisible
            : animationSettings.animateHidden
        }
        transition={animationSettings.transition}
      >
        <ArrivalProducts />
      </motion.div>
      <motion.div
        ref={valuesRef}
        className={styles.values}
        initial={animationSettings.initial}
        animate={
          isValuesVisible
            ? animationSettings.animateVisible
            : animationSettings.animateHidden
        }
        transition={animationSettings.transition}
      >
        <Values
          container={styles.valuesContainer}
          values={valuesItems}
          classNames={classNames}
        />
      </motion.div>
      <motion.div
        ref={salesRef}
        className={styles.sales}
        initial={animationSettings.initial}
        animate={
          isSalesVisible
            ? animationSettings.animateVisible
            : animationSettings.animateHidden
        }
        transition={animationSettings.transition}
      >
        <Sales
          image="/images/sales/sales-banner.svg"
          title="SALE UP TO 35% OFF"
          secondTitle="HUNDREDS of New lower prices!"
          subTitle="It’s more affordable than ever to give every room in your home a stylish makeover"
          linkPath="Shop Now"
          className={{ blockInfo: '' }}
        />
      </motion.div>
      <motion.div
        ref={articlesRef}
        className={styles.articles}
        initial={animationSettings.initial}
        animate={
          isArticlesVisible
            ? animationSettings.animateVisible
            : animationSettings.animateHidden
        }
        transition={animationSettings.transition}
      >
        <Articles />
      </motion.div>
      <Footer isVisible />
    </main>
  );
}
