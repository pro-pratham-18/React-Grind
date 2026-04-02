import { configureStore } from '@reduxjs/toolkit'      // importing configureStore

import counterReducer from '../features/Counter/CounterSlice'
import todoReducer from '../features/Todo/TodoSlice'


export const store = configureStore({          // creation of a store 
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
}) 

 



