import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from './settings/settingsSlice'
import stopSlice from './stop/stopSlice'

export const store = configureStore({
  reducer: {stop: stopSlice, settings: settingsSlice},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch