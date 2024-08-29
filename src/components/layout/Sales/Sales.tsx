import type { FC } from 'react';
import styles from './Sales.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { inter } from '@/fonts/basic-fonts';

interface SalesProps {
  image: string;
  title?: string;
  secondTitle?: string;
  subTitle: string;
  linkPath: string;
  className: {
    blockInfo?: string;
  };
}

export const Sales: FC<SalesProps> = ({
  image,
  title,
  secondTitle,
  subTitle,
  linkPath,
  className,
}) => {
  return (
    <section className={`${styles.sales} ${inter.className}`}>
      <div className={styles.salesContainer}>
        <picture className={styles.salesImage}>
          <Image
            src={image}
            alt="Sales Banner Image"
            width={720}
            height={532}
            className={styles.image}
          />
        </picture>
        <div className={`${styles.salesInfoBlock} ${className.blockInfo}`}>
          <div className={styles.salesUpItems}>
            <span className={styles.saleUpTitle}>{title}</span>
            <h3 className={styles.saleTitle}>{secondTitle}</h3>
            <p className={styles.saleSubTitle}>{subTitle}</p>
            <Link className={styles.saleLink} href="">
              {linkPath}{' '}
              <Image
                src="/images/banner/arrow-right.svg"
                alt="Arrow right icon"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
