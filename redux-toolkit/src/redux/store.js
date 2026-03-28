import { configureStore } from '@reduxjs/toolkit'      // importing configureStore

import counterReducer from '../features/Counter/CounterSlice'

export const store = configureStore({          // creation of a store 
    reducer: {
        counter: counterReducer
    }
}) 

 



