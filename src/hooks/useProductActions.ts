import { useLocalStorage } from './useLocalStorage';
import { useAppDispatch } from './redux-hooks/useAppDispatch';
import { Product } from '@/types/products';
import { addGoodToCart, deleteProductFromCart } from '@/store/slices/CartSlice';
import {
  addGoodToFavorite,
  deleteGoodFromFavorite,
} from '@/store/slices/FavoriteSlice';
import { useState } from 'react';

export const useProductActions = (product: Product) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isAddedFavorite, setIsAddedFavorite] = useLocalStorage(
    `favorite-${product.productId}`,
    false
  );
  const [isAddedCart, setIsAddedCart] = useLocalStorage(
    `cart-${product.productId}`,
    false
  );

  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    if (!isAddedCart) {
      dispatch(addGoodToCart(product));
      setIsAddedCart(true);
      setToastMessage('Product added to cart!');
    } else {
      dispatch(deleteProductFromCart(product.productId));
      setIsAddedCart(false);
      setToastMessage('Product removed from cart.');
    }
  };

  setTimeout(() => {
    setToastMessage(null);
  }, 3000);

  const handleAddFavorite = () => {
    if (!isAddedFavorite) {
      dispatch(addGoodToFavorite(product));
      setIsAddedFavorite(true);
    } else {
      dispatch(deleteGoodFromFavorite(product.productId));
      setIsAddedFavorite(false);
    }
  };

  return {
    isAddedCart,
    isAddedFavorite,
    handleAddFavorite,
    handleAddProduct,
    toastMessage,
  };
};
