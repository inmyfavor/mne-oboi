import { configureStore } from '@reduxjs/toolkit'
import menuModalReducer from './menuModalSlice'

export const store = configureStore({
  reducer: {
    menuModal: menuModalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch