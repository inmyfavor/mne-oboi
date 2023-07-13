import { createSlice } from '@reduxjs/toolkit';

export interface MoreModal {
  showMore: boolean;
  plus: object | undefined;
};

const initialState: MoreModal = {
    showMore: false,
    plus: undefined,
};

export const moreModalSlice = createSlice({
  name: 'moreModal',
  initialState,
  reducers: {
    showMore: (state) => {
      state.showMore = true;
      state.plus = {transform: 'rotate(45deg)'};
    },
    closeMore: (state) => {
      state.showMore = false;
      state.plus = undefined;
    }
  },
})

export const { showMore, closeMore } = moreModalSlice.actions;

export default moreModalSlice.reducer