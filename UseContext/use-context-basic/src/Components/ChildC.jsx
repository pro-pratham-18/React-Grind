import React, { useContext } from 'react'
import { userContext } from '../../../../myproject/src/App'

const ChildC = () => {
    // const {user,userfunc} =useContext(userContext);
    // function change_data2(){
    //     userfunc({name:"mohan",age:"25",rollno:"34"})
    // }
    return (
        <div>
        {/* <input type="button" value="change" className='border' onClick={change_data2} />
        <p>Name:{user.name} form child C</p>
        <p>Age:{user.age} From child C</p> */}
        <p className='border rounded bg-red-300 px-4'>Press <p className='inline font-semibold'>Change</p> to Toggle</p>
        </div>
    )
}



export default ChildC
