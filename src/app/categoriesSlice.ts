import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Category {
    category: string;
};

const initialState: Category = {
    category: 'Детские обои',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
        state.category = action.payload;
    },
  },
})

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer