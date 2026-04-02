import React, { useCallback, useEffect, useRef, useState } from 'react'

const ExpComp = () => {
    const [count,setCount]=useState(0);
    const [text,setText]=useState("");


    const previousFunction =useRef(null);

    const ExpCalc=useCallback(()=>{
        console.log("Running Expensive Calculation....");
        let result =0;
        for(let i=0;i<100000000;i++){
            result+=i;
        }
        return result;
    },[])


    useEffect(()=>{
        if(previousFunction.current){
            if(previousFunction.current=== ExpCalc){
                console.log("Function Not re-created");
            }
            else{
                console.log("Function Got Re-created ")
            }

        }
        else{
            console.log("Function got Re-created")
        }
    },[ExpCalc])
    return (
        <div>
            <input 
            type="text"
            value ={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder='type something'/>
            <p>Expenisve Calculation Result:{ExpCalc()}</p>
            <input type="button" value="Increment Count" onClick={()=>setCount(count+1)} />
            <p>{count}</p>
        </div>
    )
};

export default ExpComp


//we use useCallback to prevent a function from re-declaration or re-run when ui re-renders
//we use Usememo to prevent a function from re-run or re-compute when ui-re renders
// when using only useCallback , re-run of the always happens when ui re-renders
// when using only useMemo , re-cration of the function always happens when ui re-renders

//usecallback se ham kisi function ko ek baar declare karwake baar baar call kar sakte hai such that woh same refernce ko point karega.

//when using Use callback , the function will get decalred/created only when the variable of dependency list changes
// empty dependency list create's the function only one time , now the reference can be used many times


// point : to update the state variable every time you change the input field , make the state variable and value of input(either text,number or any which works) as same, and add onClick to the input and update the state variable using state function having e.target.value


//for useCallback generally if function like () the dependency array []  if (argument) the [argument]  , means same rkaho




