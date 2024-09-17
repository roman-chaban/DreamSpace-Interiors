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
import { motion } from 'framer-motion';
import { useScreenResize } from '@/hooks/useScreenResize';
import { ProductResized } from '../ProductResized/ProductResized';

interface ProductProps {
  good: CurrentProduct;
}

export const Product: FC<ProductProps> = ({ good }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const { isResize } = useScreenResize(520);

  const [isAddedCart, setIsAddedCart] = useLocalStorage<boolean>(
    `cart-${good.productId}`,
    true
  );

  const handleRemoveGood = () => {
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
    <>
      {isResize ? (
        <ProductResized good={good} />
      ) : (
        <motion.div
          className={styles.product}
          style={{ width: '100%' }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: isAddedCart ? 1 : 0,
            scale: isAddedCart ? 1 : 0.9,
          }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={() => {
            if (!isAddedCart) {
              dispatch(deleteProductFromCart(good.productId));
            }
          }}
        >
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
              <span
                className={styles.product__color}
                style={productTitle(theme)}
              >
                Category: {good.category}{' '}
              </span>
              <button
                className={styles.product__removeButton}
                onClick={handleRemoveGood}
                style={productTitle(theme)}
              >
                <Close
                  color={theme === 'dark' ? '' : colors.white}
                  style={{ width: 14, height: 14 }}
                />{' '}
                Remove
              </button>
            </div>
          </div>
          <div className={styles.counterBlock}>
            <button onClick={onDeleteProduct} className={styles.counterButton}>
              {counterButtonIcons.minusIcon}
            </button>
            <span className={styles.productItemNumber}>
              {productItemNumber}
            </span>
            <button onClick={onAddProduct} className={styles.counterButton}>
              {counterButtonIcons.plusIcon}
            </button>
          </div>
          <h5 className={styles.originalPrice} style={productTitle(theme)}>
            ${good.originalPrice}
          </h5>
          <h5 className={styles.subTotal} style={productTitle(theme)}>
            ${subTotal}
          </h5>
        </motion.div>
      )}
    </>
  );
};
