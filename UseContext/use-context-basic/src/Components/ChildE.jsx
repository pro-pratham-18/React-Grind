import React, { useContext, useState } from 'react'
import { userContext } from '../../../../myproject/src/App'


const ChildE = () => {
    const [active,setactive]=useState(true);
    const {user,userfunc}=useContext(userContext);
    function change_data(){
        userfunc({name:"joshi",age:21,rollno:46});
        setactive(!active);
    }

    function change_data2(){
        userfunc({name:"prathamesh",age:24,rollno:29})
        setactive(!active);
    }
  return (
    <div className='bg-cyan-100 rounded border flex flex-col p-2'>
        <input type="button" className='border bg-emerald-300 font-semibold' value="Change"onClick={active?change_data:change_data2}/>
        <p>Roll No. : {user.rollno}</p>
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>State variable status: {active?"True":"False"}</p>                                          
        
    </div>
  )
}

// boolean variable value dont render on ui to make them render use ternary as used in line 23, by rendering a string

export default ChildE





