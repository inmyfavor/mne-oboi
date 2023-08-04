import { createSlice } from '@reduxjs/toolkit';

export interface OptionCard {
    cardStyle: string;
};

const initialState: OptionCard = {
    cardStyle: 'option-unselected',
};

export const optionCardSlice = createSlice({
  name: 'optionCard',
  initialState,
  reducers: {
    select: (state) => {
        state.cardStyle = 'option-selected';
    },
    unselect: (state) => {
        state.cardStyle = 'option-unselected';
    }
  },
})

export const { select, unselect } = optionCardSlice.actions;

export default optionCardSlice.reducer