import type { FC } from 'react';
import styles from './Sales.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { inter } from '@/fonts/basic-fonts';

export const Sales: FC = () => {
  return (
    <section className={`${styles.sales} ${inter.className}`}>
      <div className={styles.salesContainer}>
        <picture className={styles.salesImage}>
          <Image
            src="/images/sales/sales-banner.svg"
            alt="Sales Banner Image"
            width={720}
            height={532}
            className={styles.image}
          />
        </picture>
        <div className={styles.salesInfoBlock}>
          <div className={styles.salesUpItems}>
            <span className={styles.saleUpTitle}>SALE UP TO 35% OFF</span>
            <h3 className={styles.saleTitle}>HUNDREDS of New lower prices!</h3>
            <p className={styles.saleSubTitle}>
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <Link className={styles.saleLink} href="">
              Shop Now{' '}
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
