'use client';

import type { FC } from 'react';
import styles from './Sales.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { inter } from '@/fonts/basic-fonts';
import { SalesProps } from '@/types/sales';
import { colors } from '@/theme/theme-variables';
import { FormNextLink } from 'grommet-icons';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getSalesInfoBlockStyle,
  getSalesTitleStyle,
  getSalesUpTitle,
} from '@/components/themeStyles/salesStyles/salesStyles';

export const Sales: FC<SalesProps> = ({
  image,
  title,
  secondTitle,
  subTitle,
  linkPath,
  className,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;

  return (
    <section className={`${styles.sales} ${inter.className}`}>
      <div className={styles.salesContainer}>
        <picture className={styles.salesImage}>
          <Image
            src={image}
            alt="Sales Banner Image"
            priority
            width={720}
            height={532}
            className={styles.image}
          />
        </picture>
        <div
          className={`${styles.salesInfoBlock} ${className.blockInfo}`}
          style={getSalesInfoBlockStyle(theme)}
        >
          <div className={styles.salesUpItems}>
            <span className={styles.saleUpTitle} style={getSalesUpTitle(theme)} >{title}</span>
            <h3 className={styles.saleTitle} style={getSalesTitleStyle(theme)}>
              {secondTitle}
            </h3>
            <p
              className={styles.saleSubTitle}
              style={getSalesTitleStyle(theme)}
            >
              {subTitle}
            </p>
            <Link
              className={`${styles.saleLink} ${themeClass}`}
              href=""
              style={getSalesTitleStyle(theme)}
            >
              {linkPath}{' '}
              <FormNextLink
                color={theme === 'dark' ? colors.black : colors.white}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
