import { Product } from '@/types/products';
import { FC, useState } from 'react';
import styles from './FavoriteProduct.module.scss';
import { useAppDispatch } from '@/hooks/redux-hooks/useAppDispatch';
import { deleteGoodFromFavorite } from '@/store/slices/FavoriteSlice';
import { Close } from 'grommet-icons';
import Image from 'next/image';
import { WishlistButton } from '@/components/ui/WishlistButton/WishlistButton';
import { addGoodToCart } from '@/store/slices/CartSlice';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import {
  getProductButtonStyle,
  getProductTitleStyle,
} from '@/components/themeStyles/productFavoriteStyles/productFavoriteStyles';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { motion, AnimatePresence } from 'framer-motion';

interface FavoriteProductProps {
  good: Product;
}

export const FavoriteProduct: FC<FavoriteProductProps> = ({ good }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const [isAddedCart, setIsAddedCart] = useLocalStorage<boolean>(
    `cart-${good.productId}`,
    true
  );
  const [isAddedFavorite, setIsAddedFavorite] = useLocalStorage<boolean>(
    `favorite-${good.productId}`,
    false
  );
  const [isVisible, setIsVisible] = useState(true);

  const handleDeleteGood = () => {
    setIsVisible(false);
    setTimeout(() => {
      dispatch(deleteGoodFromFavorite(good.productId));
      setIsAddedFavorite(false);
    }, 300);
  };

  const handleAddToCart = () => {
    if (!isAddedCart) {
      dispatch(addGoodToCart(good));
      setIsAddedCart(true);
    }
  };

  const slideDirection = good.productId % 2 === 0 ? '100vw' : '-100vw';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.favoriteProduct}
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: slideDirection,
            transition: {
              duration: 0.3,
              ease: 'easeInOut',
            },
          }}
        >
          <div className={styles.productContainer}>
            <Image
              priority
              src={good.imageUrl}
              alt={good.title}
              width={200}
              height={200}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h2
                className={styles.productTitle}
                style={getProductTitleStyle(theme)}
              >
                {good.title}
              </h2>
              <p
                className={styles.productSubTitle}
                style={getProductTitleStyle(theme)}
              >
                {good.subTitle}
              </p>
              <div
                className={styles.productPrices}
                style={getProductTitleStyle(theme)}
              >
                <span className={styles.productOriginalPrice}>
                  ${good.originalPrice}
                </span>
                <span className={styles.productDiscountedPrice}>
                  {good.discountedPrice}
                </span>
              </div>
              <h4
                className={styles.productMeasurements}
                style={getProductTitleStyle(theme)}
              >
                <strong
                  className={styles.productMeasurementsMark}
                  style={getProductTitleStyle(theme)}
                >
                  Measurements:
                </strong>
                {good.measurements}
              </h4>
              <WishlistButton
                onClick={handleAddToCart}
                type="button"
                className={`${styles.wishlistButton} ${
                  isAddedCart ? styles.active : ''
                }`}
                style={getProductButtonStyle(theme)}
              >
                {isAddedCart ? 'Added to wishlist' : 'Add to wishlist'}
              </WishlistButton>
            </div>
            <button onClick={handleDeleteGood} className={styles.closeButton}>
              <Close
                style={{ width: 18, height: 18 }}
                color={theme === 'dark' ? '' : colors.white}
              />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
