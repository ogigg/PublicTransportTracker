import { createSelector, PayloadAction } from '@reduxjs/toolkit'
import { Stop } from '../../models/stop'
import { MockedStops } from '../../mocks/stops'
import { createSlice } from '@reduxjs/toolkit'
import { Settings, ThemeOption } from '../../models/settings'
import { RootState } from '../store'

export interface SettingsState {
  settings: Settings;
}

const initialState: SettingsState = {
  settings: {
    theme: 'dark'
  },
}

export const stopSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state,  action: PayloadAction<ThemeOption>) => {
      state.settings.theme = action.payload
    },
  },
})

export const { setTheme } = stopSlice.actions

const selectSettingsState = (state: RootState) => state
export const selectTheme = createSelector(selectSettingsState, (state) => state.settings.settings.theme)

export default stopSlice.reducer