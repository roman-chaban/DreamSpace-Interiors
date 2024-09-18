import type { FC } from 'react';
import styles from './OrderProduct.module.scss';
import Image from 'next/image';
import { Product } from '@/types/products';
import { counterButtonIcons } from '@/components/ui/CounterButtonsIcons/CounterButtonsIcons';
import { useProductItemCounter } from '@/hooks/useProductItemCounter';
import {
  getFormContainerStyle,
  getFormTitleStyle,
} from '@/components/themeStyles/contactInformationStyles/contactInformationStyles';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

interface OrderProductProps {
  good: Product;
}

export const OrderProduct: FC<OrderProductProps> = ({ good }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { onAddProduct, onDeleteProduct, productItemNumber } =
    useProductItemCounter({
      productItem: 1,
    });
  return (
    <div className={styles.orderProduct}>
      <Image src={good.imageUrl} alt={good.title} width={80} height={96} />
      <div className={styles.orderProductInfo}>
        <div className={styles.orderProductInfoTitles}>
          <h4 className={styles.title} style={getFormTitleStyle(theme)}>
            {good.title}
          </h4>
          <span
            className={styles.originalPrice}
            style={getFormTitleStyle(theme)}
          >
            ${good.originalPrice}
          </span>
        </div>
        <span className={styles.category} style={getFormTitleStyle(theme)}>
          Category: {good.category}
        </span>
        <div
          className={styles.counterBlock}
          style={getFormContainerStyle(theme)}
        >
          <button onClick={onDeleteProduct} className={styles.counterButton}>
            {counterButtonIcons.minusIcon}
          </button>
          <span className={styles.productItemNumber}>{productItemNumber}</span>
          <button onClick={onAddProduct} className={styles.counterButton}>
            {counterButtonIcons.plusIcon}
          </button>
        </div>
      </div>
    </div>
  );
};
