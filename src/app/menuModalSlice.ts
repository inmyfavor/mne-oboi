import { createSlice } from '@reduxjs/toolkit'
// import { RootState } from './store';

export interface MenuModal {
  visible: boolean;
};

const initialState: MenuModal = {
  visible: false,
};

export const menuModalSlice = createSlice({
  name: 'menuModal',
  initialState,
  reducers: {
    show: (state) => {
      state.visible = true;
    },
    close: (state) => {
      state.visible = false;
    }
  },
})

export const { show, close } = menuModalSlice.actions;
// export const menuModalSelector = (state: RootState) => state.menuModalReducer;

export default menuModalSlice.reducer