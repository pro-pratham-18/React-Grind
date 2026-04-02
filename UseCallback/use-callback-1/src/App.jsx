import React, { useCallback } from 'react'
import Child from './components/Child'
import { useState } from 'react'
import { useEffect } from 'react'

// use case 1 of useCallback , to stop the nuncessary re-render of the child component 
// use case 2 ,handling expensive operations using useCallback
//basically cases areare same

const App = () => {
  useEffect(() => {
    console.log("Parent rendered");
  })
 
  // const handleclick=()=>{                   // before using callback
  //   setCount(count+1);
  // }

   const handleclick=useCallback(()=>{                   // before using callback
    setCount(count+1);
  },[]                                             //now the function will only get declared one time , although the functionality is disturbed  in this example
  );

  const [count,setCount]=useState(0);
  return (
    <div>
      <div>
        Count:{count}
      </div>
      <br />
      <div>
        <input type="button" value="Increase" className='border' onClick={handleclick} />
      </div>
      <br /> <br />
      <div>
        <Child buttonName="Click Me " handleclick={handleclick} />
      </div>
    </div>
  ) 
}

// to stop the child component from re-render when the parent component is re-rendered , just wrap the child component in React.memo
// after using react memo , the child will get only re -rendered when the passing data changes.

// react-memo child component ko re-render hone se tab tak hi bacha payega jab tak attribute/variable tranfer ho raha hai .
// jaise hi function tranfer karoge toh parent component ke re-render hone par child-component bhi re-render ho jayega kyuki parent component ke re-render hone par parent component me declared function ka refernce change hojata hai(kyuki parent component re-render hone par function firse declare hota hai) islye react passing data ko as a change consider karta hai , aur data change pe toh child component re-render hona hi hai, islye child component re-render hojata hai.

// now, to make sure that the function in the parent component doesnt get declared again on re-rendering of the parent component , we use callback , so the new reference wont get created , react wont consider it as a change in passing data , and hence the child component won't get re-renderd

// the main objective of using UseCallback is to declare a function only when the variable of the dependency list changes , when useCallback is not used , the function gets decalred on every render



export default App


