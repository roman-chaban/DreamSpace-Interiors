'use client';

export interface PriceItem {
  id: number;
  title: string;
}

export type PriceItems = PriceItem[];
export const priceItems: PriceItems = [
  {
    id: 1,
    title: 'All Prices',
  },
  {
    id: 2,
    title: '$0.00 - 99.99',
  },
  {
    id: 3,
    title: '$100.00 - 199.99',
  },
  {
    id: 4,
    title: '$200.00 - 299.99',
  },
  {
    id: 5,
    title: '$300.00 - 399.99',
  },
  {
    id: 6,
    title: '$400.00+',
  },
];
