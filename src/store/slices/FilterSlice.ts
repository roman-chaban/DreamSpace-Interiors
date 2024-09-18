import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPrices: [] as number[],
};

export const FilterSlice = createSlice({
  name: 'filter/products',
  initialState,
  reducers: {
    setSelectedPrices: (state, action) => {
      state.selectedPrices = action.payload;
    },
  },
});

export const { setSelectedPrices } = FilterSlice.actions;
export default FilterSlice.reducer;
