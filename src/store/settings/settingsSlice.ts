import { createSelector, PayloadAction } from '@reduxjs/toolkit'
import { Stop } from '../../models/stop'
import { MockedStops } from '../../mocks/stops'
import { createSlice } from '@reduxjs/toolkit'
import { Settings, ThemeOption } from '../../models/settings'
import { RootState } from '../store'
import { LatLng } from '../../models/position'

export interface SettingsState {
  settings: Settings;
}

const initialState: SettingsState = {
  settings: {
    theme: 'dark',
    location: null
  },
}

export const stopSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state,  action: PayloadAction<ThemeOption>) => {
      state.settings.theme = action.payload
    },
    setLocation: (state,  action: PayloadAction<LatLng>) => {
      state.settings.location = action.payload
    },
  },
})

export const { setTheme, setLocation } = stopSlice.actions

const selectSettingsState = (state: RootState) => state
export const selectTheme = createSelector(selectSettingsState, (state) => state.settings.settings.theme)
export const selectLocation = createSelector(selectSettingsState, (state) => state.settings.settings.location)

export default stopSlice.reducer