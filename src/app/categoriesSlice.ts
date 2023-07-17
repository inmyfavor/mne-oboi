import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Category {
    category: string;
    // btnClName: string;
};

const initialState: Category = {
    category: 'Детские обои',
    // btnClName: 'overline-button',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
        state.category = action.payload;
    },
    // setbtnClName: (state, action: PayloadAction<string>) => {
    //     state.btnClName = action.payload;
    // },
  },
})

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer