import { Products } from '@/types/products';
import type { FC } from 'react';
import styles from './ShopCategoriesPrices.module.scss';
import Image from 'next/image';
import { WishlistButton } from '@/components/ui/WishlistButton/WishlistButton';
import { AddButton } from '@/components/ui/AddButton/AddButton';
import { Favorite } from 'grommet-icons';

interface ShopCategoriesPricesProps {
  products: Products;
}

export const ShopCategoriesPrices: FC<ShopCategoriesPricesProps> = ({
  products,
}) => {
  return (
    <div className={styles.categoriesProducts}>
      {products.map((product) => (
        <div key={product.productId} className={styles.card}>
          <div
            style={{ backgroundImage: `url(${product.imageUrl})` }}
            className={styles.cardImage}
          />
          <div className={styles.cardInfo}>
            <div className={styles.cardRating}>
              {product.rating.map((icon, index) => (
                <Image
                  src={icon}
                  key={`${icon}-${index}`}
                  width={16}
                  height={16}
                  alt={'Star fill icon'}
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
                <Favorite color="plain" /> Wishlist
              </WishlistButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
