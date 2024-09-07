import { AddButton } from '@/components/ui/AddButton/AddButton';
import { WishlistButton } from '@/components/ui/WishlistButton/WishlistButton';
import { Products } from '@/types/products';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import Image from 'next/image';
import styles from '@/components/product/ShopCategoriesPrices/ShopCategoriesPrices.module.scss';
import { productVariants } from '@/animations/productCard/productCard';
import { Favorite } from 'grommet-icons';
import { Button } from '@/components/ui/Button/Button';

export interface ShopCategoryProductCardProps {
  products: Products;
}

export const ShopCategoryProductCard: FC<ShopCategoryProductCardProps> = ({
  products,
}) => {
  return (
    <div className={styles.categoriesProducts}>
      {products.map((product) => (
        <motion.div
          custom={product.productId}
          initial="hidden"
          animate="visible"
          variants={productVariants}
          key={product.productId}
          className={styles.card}
        >
          <div
            style={{ backgroundImage: `url(${product.imageUrl})` }}
            className={styles.cardImage}
          >
            <div className={styles.productDiscount}>
              <span className={styles.newTitle}>{product.discountedTitle}</span>
              <span className={styles.discountTitle}>
                {product.discountPercentage}
              </span>
              {/* <Button type="button" className={styles.favoriteIcon}>
                <Favorite style={{ width: 18, height: 18 }} />
              </Button> */}
            </div>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardRating}>
              {product.rating.map((icon, index) => (
                <Image
                  src={icon}
                  key={`${icon}-${index}`}
                  width={16}
                  height={16}
                  alt={'Star fill icon'}
                  className={styles.starIcon}
                />
              ))}
            </div>
            <div className={styles.cardTitles}>
              <h4 className={styles.cardTitle}>{product.title}</h4>
              <div className={styles.cardPrices}>
                <span className={styles.originalPrice}>
                  {product.originalPrice}
                </span>
                <span className={styles.discountedPrice}>
                  {product.discountedPrice}
                </span>
              </div>
            </div>
            <p className={styles.cardSubTitle}>{product.subTitle}</p>
            <div className={styles.cardButtons}>
              <AddButton type="button" className={styles.cardAddButton}>
                Add to cart
              </AddButton>
              <WishlistButton
                className={styles.cardWishListButton}
                type="button"
              >
                <Favorite color="plain" className={styles.favoriteIcon} />{' '}
                Wishlist
              </WishlistButton>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
