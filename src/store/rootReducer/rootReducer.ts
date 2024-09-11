import { combineReducers } from '@reduxjs/toolkit';
import ThemeSlice from '../slices/ThemeSlice';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import CartSlice from '../slices/CartSlice';
import FavoriteSlice from '../slices/FavoriteSlice';

const rootReducer = combineReducers({
  theme: ThemeSlice,
  cart: CartSlice,
  favorite: FavoriteSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
