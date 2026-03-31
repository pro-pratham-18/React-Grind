import React, { useRef, useState } from 'react'

const FlexiTimer = () => {

    const [count,setCount]=useState(0);
    const countRef =useRef(null);
    function handle_start(){
        countRef.current = setInterval(() => {
            setCount(count=>count+1)
        }, 1000);
    }

    function handle_stop(){
        clearInterval(countRef.current);
        countRef.current=null;
    }

    function handle_reset(){
        handle_stop();
        setCount(0);
    }

    return (
        <div className='h-dvh w-dvw bg-indigo-950 flex flex-col justify-center items-center gap-3'>
        <p className='text-white'>: {count}</p>
        <input type="button" value="Start" onClick={handle_start} className='border rounded px-2 bg-blue-800 text-white hover:scale-105 duration-300 focus:scale-110 '/>
        <input type="button" value="Stop" onClick={handle_stop}  className='border rounded px-2 bg-blue-800 text-white hover:scale-105 duration-300 focus:scale-110 '/>
        <input type="button" value="Reset" onClick={handle_reset} className='border rounded px-2 bg-blue-800 text-white hover:scale-105 duration-300 focus:scale-110 ' />
        </div>
    )
}

export default FlexiTimer
