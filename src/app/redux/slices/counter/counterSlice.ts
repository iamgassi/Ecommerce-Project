import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../../store'

// Define the state shape
interface CounterState {
  value: number
}

// Define the initial state
const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // state.value is correctly typed as number
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Thunk action with proper typing
export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// Selector with proper typing
export const selectCount = (state: { counter: CounterState }) => state.counter.value

export default counterSlice.reducer
