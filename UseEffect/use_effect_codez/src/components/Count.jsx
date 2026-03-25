import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count,setcount]=useState(0);

    useEffect(() => {
        const intervalId=setInterval(()=>{
            setcount(prev=>prev+1)
        },1000);
    
      return () => {
        clearInterval(intervalId);
        console.log("Cleanup");
      }
    }, [])
    
  return (
    <div>
      <p>count:{count}</p>
    </div>
  )
}

export default Count
