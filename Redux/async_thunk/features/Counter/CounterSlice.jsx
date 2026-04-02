
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({          //normal type slice
  name: 'counter',
  initialState:{
    value:0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    resetcount: (state) => {
      state.value = 0
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += Number (action.payload)                     // the addition was happennig like sting hence changed its type to number
    }
  }
},
);
export const { increment, decrement, incrementByAmount,resetcount} = counterSlice.actions
export default counterSlice.reducer