import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count,setcount]=useState(0);
    useEffect(() => {
        const intervalid=setInterval(() => {
            setcount(prev=>prev+1)
        }, 1000);
      return () => {
        console.log("cleanup");
      }
    }, [])
    
    return (
        <div>
            Timer:{count}
        </div>
    )
}

export default Timer
