import { combineReducers } from '@reduxjs/toolkit';
import ThemeSlice from '../slices/ThemeSlice';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import CartSlice from '../slices/CartSlice';
import FavoriteSlice from '../slices/FavoriteSlice';
import FilterSlice from '../slices/FilterSlice';

const rootReducer = combineReducers({
  theme: ThemeSlice,
  cart: CartSlice,
  favorite: FavoriteSlice,
  filter: FilterSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
