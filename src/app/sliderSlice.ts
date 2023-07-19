import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Slider {
    value: string;
};

const initialState: Slider = {
    value: '3000',
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
    },
  },
})

export const { setValue } = sliderSlice.actions;

export default sliderSlice.reducer