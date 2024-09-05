import { combineReducers } from '@reduxjs/toolkit';
import { store } from '../store';

const rootReducer = combineReducers({});

export default rootReducer;

export type RootState = ReturnType<typeof store.getState>;
