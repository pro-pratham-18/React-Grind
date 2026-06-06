import React, { useEffect, useState } from 'react'

const FullTimer = () => {
    const [count , setcount]=useState(0);
    const [running ,setrunning]=useState(false);

    useEffect(() => {
        let intervalId;
        if(running){
            intervalId =setInterval(() => {
            setcount(prev=>{
                if(prev==59){
                    return 0;
                }
                return prev+1;
            });
        }, 1000);
    }
      return () => {
        clearInterval(intervalId);
      }
    }, [running])

    function prime(){
        setcount(0);
        setrunning(false);
    }
    return (
        <div className='bg-gray-800 rounded-2xl p-1'>
            <p className='text-yellow-300 my-4'>Timer</p> <p className=' text-yellow-300 my-4'>{count}</p>
            <input className='border text-yellow-300 rounded px-2 mx-3 hover:scale-103 active:scale-100 duration-300' type="button" value="Start" onClick={()=>{setrunning(true)}} /> 
            <input className='border text-yellow-300 rounded px-2 mx-3 hover:scale-103 active:scale-100 duration-300' type="button" value="Stop" onClick={()=>{setrunning(false)}}/>
            <input className='border text-yellow-300 rounded px-2 mx-3 hover:scale-103 active:scale-100 duration-300' type="button" value="Reset" onClick={prime} />
            {running?<p className='text-yellow-300 my-4'>The timer is running!!</p >:<p className='text-yellow-300 my-4'>The Timer stopped!!</p> }
        </div>
    )
}



// using  <input type="button" value="reset" onClick={()=>{setcount(0)}}/> for reset only resets the timer , the clock keeps running , to avoid this i used one function prime , which is triggering two functions , to set the count 0 , and to stop the timer as well


export default FullTimer
