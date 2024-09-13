import { Product as CurrentProduct } from '@/types/products';
import { useMemo, type FC } from 'react';
import styles from './Product.module.scss';
import Image from 'next/image';
import { Close } from 'grommet-icons';
import { useAppDispatch } from '@/hooks/redux-hooks/useAppDispatch';
import { deleteProductFromCart } from '@/store/slices/CartSlice';
import { useProductItemCounter } from '@/hooks/useProductItemCounter';
import { counterButtonIcons } from '@/components/ui/CounterButtonsIcons/CounterButtonsIcons';
import { productTitle } from '@/components/themeStyles/productStyles/productStyles';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface ProductProps {
  good: CurrentProduct;
}

export const Product: FC<ProductProps> = ({ good }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const [isAddedCart, setIsAddedCart] = useLocalStorage<boolean>(
    `cart-${good.productId}`,
    true
  );

  const handleRemoveGood = () => {
    dispatch(deleteProductFromCart(good.productId));
    setIsAddedCart(false);
  };

  const { productItemNumber, onAddProduct, onDeleteProduct } =
    useProductItemCounter({ productItem: 1 });

  const subTotal = useMemo(() => {
    if (good && good.originalPrice) {
      const percentWithoutDollar = good.originalPrice;
      const total = (percentWithoutDollar * productItemNumber).toFixed(2);
      return total;
    }
  }, [good, productItemNumber]);

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <Image
          src={good.imageUrl}
          alt={good.title}
          width={100}
          height={100}
          className={styles.product__image}
        />
        <div className={styles.product__details}>
          <h4 className={styles.product__title} style={productTitle(theme)}>
            {good.title}
          </h4>
          <span className={styles.product__color} style={productTitle(theme)}>
            Category: {good.category}{' '}
          </span>
          <button
            className={styles.product__removeButton}
            onClick={handleRemoveGood}
            style={productTitle(theme)}
          >
            <Close
              color={theme === 'dark' ? '' : colors.white}
              style={{ width: 14, height: 14, cursor: 'pointer' }}
            />{' '}
            Remove
          </button>
        </div>
      </div>
      <div className={styles.counterBlock}>
        <button onClick={onDeleteProduct} className={styles.counterButton}>
          {counterButtonIcons.minusIcon}
        </button>
        <span className={styles.productItemNumber}>{productItemNumber}</span>
        <button onClick={onAddProduct} className={styles.counterButton}>
          {counterButtonIcons.plusIcon}
        </button>
      </div>
      <h5 className={styles.originalPrice} style={productTitle(theme)}>
        {good.originalPrice}
      </h5>
      <h5 className={styles.subTotal} style={productTitle(theme)}>
        ${subTotal}
      </h5>
    </div>
  );
};
