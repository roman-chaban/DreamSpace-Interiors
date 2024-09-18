import { Product } from '@/types/products';
import Image from 'next/image';
import type { FC } from 'react';
import styles from './CompleteProduct.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getOrderCounter } from '@/components/themeStyles/orderComplete/orderComplete';

interface CompleteProductProps {
  good: Product;
  goodCounter: number;
}

export const CompleteProduct: FC<CompleteProductProps> = ({
  good,
  goodCounter = 0,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={styles.complete}>
      <Image
        src={good.imageUrl}
        alt={good.title}
        width={90}
        height={100}
        className={styles.completeImage}
      />
      <span className={styles.completeCounter} style={getOrderCounter(theme)}>
        {goodCounter}
      </span>
    </div>
  );
};
