import { Product, Products } from '@/types/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
  goods: Products;
  favoriteCounter: number;
}

const initialState: FavoriteState = {
  goods: [],
  favoriteCounter: 0,
};

export const FavoriteSlice = createSlice({
  name: 'Goods/Favorite',
  initialState,
  reducers: {
    addGoodToFavorite: (state, action: PayloadAction<Product>) => {
      const isProductInFavorite = state.goods.find(
        (product) => +product.productId === +action.payload
      );
      if (!isProductInFavorite) {
        state.goods.push(action.payload);
        state.favoriteCounter += 1;
      }
    },
    deleteGoodFromFavorite: (state, action: PayloadAction<number>) => {
      const updatedGoods = state.goods.filter(
        (product) => product.productId !== action.payload
      );
      state.goods = updatedGoods;
      state.favoriteCounter = updatedGoods.length;
    },
  },
});

export const { addGoodToFavorite, deleteGoodFromFavorite } =
  FavoriteSlice.actions;

export default FavoriteSlice.reducer;
