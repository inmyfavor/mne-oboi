import { createSlice } from '@reduxjs/toolkit';

export interface PageMode {
  mode: number;
};

const initialState: PageMode = {
  mode: 0,
};

export const pageModeSlice = createSlice({
  name: 'pageMode',
  initialState,
  reducers: {
    goForward: (state) => {
      if (state.mode < 5) {
        state.mode += 1;
      }
    },
    goBack: (state) => {
      if (state.mode > 0) {
        state.mode -= 1;
      }
    },
  },
})

export const { goForward, goBack } = pageModeSlice.actions;

export default pageModeSlice.reducer