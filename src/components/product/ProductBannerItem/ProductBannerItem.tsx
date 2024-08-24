import type { FC } from 'react';
import styles from './ProductBannerItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface ProductBannerItemProps {
  title: string;
  link: string;
  href: string;
  backgroundPath: string;
  isFirst?: boolean;
}

export const ProductBannerItem: FC<ProductBannerItemProps> = ({
  title,
  backgroundPath,
  href,
  link = 'Shop now',
  isFirst,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          isFirst ? 'images/banner/primaryBanner.svg' : backgroundPath
        })`,
        width: '100%',
      }}
      className={`${styles.bannerItem} ${
        isFirst ? styles.firstBannerItem : ''
      }`}
    >
      <div
        className={`${styles.bannerTitles} ${
          isFirst ? styles.firstBannerTitle : ''
        }`}
      >
        <h3 className={styles.bannerTitle}>{title}</h3>
        <Link href={href} className={styles.bannerLink}>
          {link}
          <Image
            src="/images/banner/arrow-right.svg"
            alt="Arrow right icon"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};
