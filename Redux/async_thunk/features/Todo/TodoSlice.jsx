


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const FetchTodos =createAsyncThunk("fetchtodos",async()=>{      //here, FetchTodos(variable) is called the action creator                     // the 3 actions are dispatched automatically as per the promise of the async function     
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();  // response.json() returns either resolved ,rejected  value of the promise or pendig promise.
});

const TodoSlice = createSlice({        // async-type slice
  name: 'todo',
  initialState:{
    isloading:false,
    data:null,
    isError:false
  },
  extraReducers:(builder)=>{
    builder.addCase(FetchTodos.fulfilled,(state,action)=>{
        state.isloading=false;
        state.data=action.payload               // action.payload is the resolved value of promise of response.json (here)
        console.log("data fetched successfully");
    })
    builder.addCase(FetchTodos.pending,(state,action)=>{
        state.isloading=true;
    })
    builder.addCase(FetchTodos.rejected,(state,action)=>{
        console.log("Error",action.error);  // action.payload is the rejected value of promise of response.json (here) , but we can use action.error here (best practice)
        state.isError=true;           
    })
  }
},
);

// we must dispatch the action creator variable inorder the perform the required async operation like fetch
// we generally dipatch action creator in app.jsx upon certain event(onclick....etc)

// different opeartions require different slice , always create a new slice file for a new operation/program  cuz it's considered best practice

// async type slice me 2 chheze export krte hai : 1) action creator 2) slice Object with .reducer

// normal type slice me 2 cheeze export krte hai : 1) action(incremenet,decrement.......etc)  2) slice Object with .reducer

// exporting point ==>   1) kisi  function ko const me declare krje bhi default export kar sakte hai (jasie yaha sliceobject ko kar rakha hai)
//                       2) only one default export allowed per file

export {FetchTodos};
export default TodoSlice.reducer




