import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

import { decrement, increment, incrementByAmount, resetcount } from './features/Counter/CounterSlice'

import { FetchTodos } from './features/Todo/TodoSlice';

const App = () => {

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
    function handleclick(){
        dispatch(FetchTodos());
    }
    return ( 
        <div>
        <input type="button" value="Fetch Todo" className='border' onClick={handleclick}/>
        {isloading? <p>loading...</p>:""}
        {data && data.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
        ))}
        {isError?<p>An error occured</p>:" "}
        <div className='flex gap-4'>
                <p>Count:{value}</p>
                <input type="button" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 duration-300 ' value="Increase" onClick={Inc}/>
                <input type="button" className='border rounded px-2 bg-blue-800 text-white hover:scale-105 duration-300 ' value="Decrease" onClick={Dec}/>
            </div>
        </div>
    )
}


export default App

