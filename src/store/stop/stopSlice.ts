import type { PayloadAction } from '@reduxjs/toolkit'
import { Stop } from '../../models/stop'
import { MockedStops } from '../../mocks/stops'
import { createSlice } from '@reduxjs/toolkit'

export interface StopState {
    entities: Stop[]
}

const initialState: StopState = {
    entities: MockedStops,
}

export const stopSlice = createSlice({
  name: 'stop',
  initialState,
  reducers: {
    increment: (state) => {
    // TODO: Implement logic
    //   state.entities.push({})
    },
    decrement: (state) => {
        // TODO: Implement logic
        // state.entities.push({})
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
        // TODO: Implement logic
        // state.entities.push({})
    },
  },
})

export const { increment, decrement, incrementByAmount } = stopSlice.actions

export default stopSlice.reducer