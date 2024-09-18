'use client';

import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import { Star } from 'grommet-icons';
import { FC } from 'react';

interface ProductRating {
  icon: JSX.Element;
  id: number;
}

export type ProductRatingStars = ProductRating[];

export const Stars: FC = () => {
  const starColor = 'gold';
  const theme = useAppSelector((state) => state.theme.theme);
  const rating: ProductRatingStars = [
    {
      icon: <Star style={{ width: 18, height: 18 }} color={starColor} />,
      id: 1,
    },
    {
      icon: <Star style={{ width: 18, height: 18 }} color={starColor} />,
      id: 2,
    },
    {
      icon: <Star style={{ width: 18, height: 18 }} color={starColor} />,
      id: 3,
    },
    {
      icon: <Star style={{ width: 18, height: 18 }} color={starColor} />,
      id: 4,
    },
    {
      icon: <Star style={{ width: 18, height: 18 }} color={starColor} />,
      id: 5,
    },
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
      {rating.map((star) => (
        <div key={star.id}>{star.icon}</div>
      ))}
    </div>
  );
};
