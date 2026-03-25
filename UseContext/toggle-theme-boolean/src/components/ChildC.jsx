import React, { useContext, useState } from 'react'
import { Mycontext } from '../App'

const ChildC = () => {
    const {mode,setMode}=useContext(Mycontext);
    
    function handleclick(){
        if(mode===true){
            setMode(false)
        }
        else{
            setMode(true)
        }
    }
    return (
        <div>
            <button onClick={handleclick}>{mode?"Dark":"Light"}</button>
            <p>Curent Mode:{mode?"Light":"Dark"} (at Child)</p>
        </div>
    ) 
}

export default ChildC

