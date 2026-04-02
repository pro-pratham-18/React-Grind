import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

const App = () => {
    const [count,setCount]=useState(0);
    const [input,setInput]=useState(0);

    function expensive(num){
        console.log("inside expensive task");
        for(let i=0 ;i<=1000000000;i++){}
            return num*2;
    }

    const double=useMemo(()=>expensive(input),[input]);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>
                Increment
            </button>
            <div>
                count:{count} <br />
                Double:{double}
            </div>

            <input type="number" placeholder="enter number" vlaue={input} onChange={(e)=>setInput(e.target.value)} className='border'/>
        </div>
    )
}

// agar useMemo me aap chahte hai ki argument change hone par function run ho , toh argument aur dependency list variable same rakhiye 
// generally same hi rakha jata hai 


export default App







