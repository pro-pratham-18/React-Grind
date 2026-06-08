import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0
  },
  reducers: {
    increment: (state) => { 
      state.value += 1
    }, 
    reset: (state)=>{
      state.value =0;
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += Number (action.payload)
    }
  }
})

export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions
export default counterSlice.reducer

// the reducer fucntion must be synchrounous , means it must return the result after performing the action immediately.
// as the async operations take time ,so for them the async thunk is used

