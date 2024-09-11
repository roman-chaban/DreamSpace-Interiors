import { Product, Products } from '@/types/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  goods: Product[];
  goodCounter: number;
}

const initialState: CartState = {
  goods: [],
  goodCounter: 0,
};

export const CartSlice = createSlice({
  name: 'Goods/Cart',
  initialState,
  reducers: {
    addGoodToCart: (state, action: PayloadAction<Product>) => {
      const isProductInCart = state.goods.find(
        (product) => +product.productId === +action.payload
      );
      if (!isProductInCart) {
        state.goods.push(action.payload);
        state.goodCounter += 1;
      }
    },
    deleteProductFromCart: (state, action: PayloadAction<number>) => {
      const updatedGoods = state.goods.filter(
        (product) => product.productId !== action.payload
      );
      state.goods = updatedGoods;
      state.goodCounter = updatedGoods.length;
    },
  },
});

export const { addGoodToCart, deleteProductFromCart } = CartSlice.actions;

export default CartSlice.reducer;
