'use client';

import React from 'react';
import styles from '@/components/layout/Sidebar/Sidebar.module.scss';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

export interface PriceItem {
  id: number;
  checkbox: React.ReactNode;
  title: string;
}

export type PriceItems = PriceItem[];

export const priceItems: PriceItems = [
  {
    id: 1,
    checkbox: (
      <input
        type="checkbox"
        name="price"
        id="price1"
        className={styles.checkboxPrice}
      />
    ),
    title: 'All Prices',
  },
  {
    id: 2,
    checkbox: (
      <input
        type="checkbox"
        name="price"
        id="price2"
        className={styles.checkboxPrice}
      />
    ),
    title: '$0.00 - 99.99',
  },
  {
    id: 3,
    checkbox: (
      <input
        type="checkbox"
        name="price"
        id="price3"
        className={styles.checkboxPrice}
      />
    ),
    title: '$100.00 - 199.99',
  },
  {
    id: 4,
    checkbox: (
      <input
        type="checkbox"
        name="price"
        id="price4"
        className={styles.checkboxPrice}
      />
    ),
    title: '$200.00 - 299.99',
  },
  {
    id: 5,
    checkbox: (
      <input
        type="checkbox"
        name="price"
        id="price5"
        className={styles.checkboxPrice}
      />
    ),
    title: '$300.00 - 399.99',
  },
  {
    id: 6,
    checkbox: (
      <input
        type="checkbox"
        name="price"
        id="price6"
        className={styles.checkboxPrice}
      />
    ),
    title: '$400.00+',
  },
];

const PriceList = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={styles.priceTitles}>
      {priceItems.map((item) => (
        <div className={styles.priceTitle} key={item.id}>
          <span
            className={styles.title}
            style={{
              color: theme === 'dark' ? colors.darkGray : colors.white,
            }}
          >
            {item.title}
          </span>
          <label htmlFor={`price${item.id}`} className={styles.checkboxLabel}>
            {item.checkbox}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PriceList;
