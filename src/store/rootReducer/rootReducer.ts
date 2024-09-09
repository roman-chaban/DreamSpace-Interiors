import { combineReducers } from '@reduxjs/toolkit';
import { store } from '../store';
import ThemeSlice from '../slices/ThemeSlice';
import { PersistPartial } from 'redux-persist/es/persistReducer';

const rootReducer = combineReducers({
  theme: ThemeSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
