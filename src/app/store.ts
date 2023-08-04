import { configureStore } from '@reduxjs/toolkit';
import menuModalReducer from './menuModalSlice';
import moreModalReducer from './moreModalSlice';
import categoriesReducer from './categoriesSlice';
import sliderReducer from './sliderSlice';
import pageModeReducer from './pageModeSlice';
import optionCardReducer from './optionCardSlice'

export const store = configureStore({
  reducer: {
    menuModal: menuModalReducer,
    moreModal: moreModalReducer,
    categories: categoriesReducer,
    slider: sliderReducer,
    pageMode: pageModeReducer,
    optionCard: optionCardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch