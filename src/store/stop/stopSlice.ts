import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface StopState {
  entities: any[]
}

const initialState: StopState = {
    entities: [],
}

export const stopSlice = createSlice({
  name: 'stop',
  initialState,
  reducers: {
    increment: (state) => {
      state.entities.push({})
    },
    decrement: (state) => {
        state.entities.push({})
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
        state.entities.push({})
    },
  },
})

export const { increment, decrement, incrementByAmount } = stopSlice.actions

export default stopSlice.reducer