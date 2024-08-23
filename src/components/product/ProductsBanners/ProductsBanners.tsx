import type { FC } from 'react';
import { ProductBannerItem } from '../ProductBannerItem/ProductBannerItem';
import styles from './ProductsBanners.module.scss';

export const ProductBanners: FC = () => {
  return (
    <section className={styles.banners}>
      <div className={styles.bannersContainer}>
        <ProductBannerItem
          href="/shop"
          backgroundPath="images/banner/primaryBanner.svg"
          title="Living Room"
          link="Shop now"
        />
        <div className={styles.otherBannersItems}>
          <ProductBannerItem
            href="/shop"
            backgroundPath="images/banner/secondaryBanner.svg"
            title="Bedroom"
            link="Shop now"
          />
          <ProductBannerItem
            href="/shop"
            backgroundPath="images/banner/tertiaryBanner.svg"
            title="Kitchen"
            link="Shop now"
          />
        </div>
      </div>
    </section>
  );
};
