import React,{useState,useEffect} from 'react'

const Timer = () => {
    const [count,setcount]=useState(0);
    function upcount(){
        setcount(count+1)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setcount(prevsec=>prevsec+1)
        }, 2000);

    return () => {
        clearInterval(intervalId);   // used for cleanup , though not getting used here 
        console.log("stopped and cleaned");
      }
    },[])
  return (
    <div>
        <h1>Timer:{count}</h1>
    </div>
  )
}

export default Timer
