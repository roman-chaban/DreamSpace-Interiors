import { combineReducers } from '@reduxjs/toolkit';
import { store } from '../store';
import ThemeSlice from '../slices/ThemeSlice';

const rootReducer = combineReducers({
  theme: ThemeSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof store.getState>;
