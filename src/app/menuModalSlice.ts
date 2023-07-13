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
    showModal: (state) => {
      state.visible = true;
    },
    closeModal: (state) => {
      state.visible = false;
    }
  },
})

export const { showModal, closeModal } = menuModalSlice.actions;

export default menuModalSlice.reducer