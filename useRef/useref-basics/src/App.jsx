import React, { useEffect, useRef, useState } from 'react'

const App = () => {
    const [count,setCount]=useState(0);
    
    const value = useRef(0);                    // 1st use , useRef used to keep the updated value of the variable retained even after ui re-rendering 
    const btnRef=useRef();                      // 2nd use , used to create a reference such that by using  that reference we can select a particular element in a dom and can perform different operations on that element like styling etc...

    function handleclick(){
        setCount(count+1)
        value.current=value.current+1;
        console.log(value.current);
    }
    function handleclick2(){
        btnRef.current.style.backgroundColor="red"
    }
    useEffect(() => {
        console.log("i run on every render");
    },)
    return (
        <div>
            <input type="button" value="click" className='border' onClick={handleclick} />
            <p>Count:{count}</p>
            <input type="button" value="Click 2" ref={btnRef} onClick={handleclick2} />
        </div>
    )
} 

// 1st use points :

// when not used useRef, the value variable gets initialized with certain value(which we gave) everytime the UI re renders 
// jaise useState me state variable change hone par UI re -render hota hai, useRef me state variable change hone par UI re -render NAHI HOTA HAI!!
// means we can use useRef to perists its value or retains the updated value of its variable

// 2nd use  points :
// generally used when action is in an element and we need to alter other element



export default App
