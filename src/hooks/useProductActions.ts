import { useLocalStorage } from './useLocalStorage';
import { useAppDispatch } from './redux-hooks/useAppDispatch';
import { Product } from '@/types/products';
import { addGoodToCart, deleteProductFromCart } from '@/store/slices/CartSlice';
import {
  addGoodToFavorite,
  deleteGoodFromFavorite,
} from '@/store/slices/FavoriteSlice';

export const useProductActions = (product: Product) => {
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
    } else {
      dispatch(deleteProductFromCart(product.productId));
      setIsAddedCart(false);
    }
  };

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
  };
};
