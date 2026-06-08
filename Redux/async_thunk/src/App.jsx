import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

import { decrement, increment, incrementByAmount, reset } from '../features/Counter/CounterSlice'

import { FetchTodos } from '../features/Todo/TodoSlice';


const App = () => {

    const [amount,setamount]=useState(0);

    const isloading =useSelector((state)=>state.todo.isloading)              // we can name the useselector variable anuthing we want , i preferred the actual state names 
    const data =useSelector((state)=>state.todo.data)
    const isError =useSelector((state)=>state.todo.isError)

    const value =useSelector((state)=>state.counter.value)

    const dispatch=useDispatch(); 

    function Dec(){
         dispatch(decrement());
    }
    function Inc(){
        dispatch(increment());
    }
    function IncByAmount(){
        dispatch(incrementByAmount(amount))
    }
    function handleclick(){
        dispatch(FetchTodos());
    }
    function Reset(){
        dispatch(reset());
    }
    return ( 
        <div className='p-3 flex flex-col gap-4'>
            <div className='flex gap-4'>
                <p>Count:{value}</p>
                <input type="button" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 active:scale-95 duration-300 ' value="Increase" onClick={Inc}/>
                <input type="button" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 active:scale-95 duration-300 ' value="Decrease" onClick={Dec}/>
                <input type="button" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 active:scale-95 duration-300 ' value="Reset" onClick={Reset}/>
                <input type="button" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 active:scale-95 duration-300 ' value="IncByAmount" onClick={IncByAmount()}/>
                <input type="number" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 active:scale-95 duration-300 ' placeholder='enter number' onChange={(e)=>{setamount(e.target.value)}}/>
            </div>
            <div>
            <input className='border rounded px-2 bg-blue-800 text-white hover:scale-105 active:scale-95 duration-300 ' type="button" value="Fetch Todo" onClick={handleclick}/>
            {isloading? <p>loading...</p>:""}
            {data && data.map((todo) => (
                <div key={todo.id} className='flex gap-2 m-3'>
                    <p>{todo.id}.</p> 
                    <p>{todo.title}</p>
                </div>
            ))}
            {isError?<p>An error occured</p>:" "}
            </div>
        </div>
    )
}


export default App

