import React, { useContext, useState } from 'react'
import { Mycontext } from '../App'

const ChildC = () => {
    const {mode,setMode}=useContext(Mycontext);
    
    function handleclick(){
        if(mode==="Light"){
            setMode("Dark")
        }
        else{
            setMode("Light")
        }
    }
    return (
        <div>
            <button onClick={handleclick}>{mode}</button>
            <p>Curent Mode:{mode} (at Child)</p>
        </div>
    ) 
}

export default ChildC

