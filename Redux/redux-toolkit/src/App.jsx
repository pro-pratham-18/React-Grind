import React, { useState } from 'react'
import { store } from './redux/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/Counter/CounterSlice'

const App = () => {
    const [amount,setAmount]=useState(0);
    const count =useSelector((state)=>state.counter.value)
    const dispatch =useDispatch();

    function handle_Inc_By_Mount(){
        dispatch(incrementByAmount(amount));
    }
    function handle_reset(){
        dispatch(reset());
    }
    function Dec(){
        dispatch(decrement());
    }
    function Inc(){
        dispatch(increment());
    }

    return ( 
        <div className='p-4 bg-black h-dvh '>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-yellow-300'>Count Value : <span className='font-bold'>{count}</span> </p>
            <div className='flex gap-4'>
                <input type="button" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 duration-300 ' value="Increase" onClick={Inc}/>
                <input type="button" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 duration-300 ' value="Decrease" onClick={Dec}/>
            </div>
            </div>
            <br />
            <div className='flex flex-col items-center gap-4'>
                <div className='flex gap-3'>
                <input type="number" className='border outline-none text-yellow-300 ' placeholder='enter number' id=""  onChange={(e)=>{setAmount(e.target.value)}}/>
                <input type="submit" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 duration-300 ' value="Submit" onClick={handle_Inc_By_Mount}/>
            </div>
            <div>
                <input type="button" value="Reset" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 duration-300 ' onClick={handle_reset}/>
            </div>
            </div>
        </div>
    )  
}

//short steps for setup:
// create store                      //store
// wrap app func in Provider       //provider
// create slice                  //slice
// register reducer at store          // reducer 


  
// to accesss the state value from the store we must use , useSelector Hook (see line 6)

// kisi bhi action ko execute karwana hai toh use dispatch karna padega by using useDispatch Hook 

// reducer function contains the logic of the action (increment , decrement , incrementbyamount) and manipulates the state based on that logic

//the store is used to manage the state variables

// make sure to export and import the reducing functions(increment,decrement ...etc) 

export default App

