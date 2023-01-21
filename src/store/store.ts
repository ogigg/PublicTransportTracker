import { configureStore } from '@reduxjs/toolkit'
import stopSlice from './stop/stopSlice'

export const store = configureStore({
  reducer: {stop: stopSlice},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch