import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form"

const App = () => {

    const [active,SetActive]=useState(false);
    
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },              // issubmitting is true when the showdata(named) function is in the execution phase, before and after the execution the value of the issubmitting variable is false
  } = useForm();



  async function Showdata(data){
    console.log("submitting");
    await new Promise((resolve)=> setTimeout(resolve,5000));
    SetActive(true);
    console.log(data);
    console.log("First Name: ",data.FirstName);
    console.log("Middle Name: ",data.MiddleName);
    console.log("Last Name: ",data.LastName);
    console.log("Sbmitted");

  }

    const firstname=watch('FirstName');
    const secondname=watch('FirstName');
    const thirdname=watch('FirstName');

    return (
        <div className='bg-indigo-950 text-white'  >
            <form className='p-4' onSubmit={handleSubmit(Showdata)}>
        
            <div className='flex gap-3'>
                <label>First Name: </label>
                <input type="text " className="text-white  border outline-none"{...register('FirstName',
                    {
                        required:{value: true,message:'*required '},
                        minLength:{value:2,message:'*atleast 2 alphabets'},
                        maxLength:{value:15,message:'*atmost 15 alphabets'},
                        pattern:{
                            value:/^[A-Za-z]+$/,
                            message:"Only Letters"
                        }
                    }
                    )} />
                {errors.FirstName?<p className='text-red-600'>{errors.FirstName.message}</p>:"" }
            </div>
            <br />
            <div className='flex gap-3'>
                <label>Middle Name: </label>
                <input type="text" className="border outline-none" {...register('MiddleName',
                    {
                        required:{value: true,message:'*required '},
                        minLength:{value:2,message:'*atleast 2 alphabets'},
                        maxLength:{value:15,message:'*atmost 15 alphabets'},
                        pattern:{
                            value:/^[A-Za-z]+$/,
                            message:"Only Letters"
                        }
                    }
                    )}/>
                {errors.FirstName?<p className='text-red-600'>{errors.FirstName.message}</p>:"" }
            </div>
            <br />
            <div className='flex gap-3'>
                <label>Last Name: </label>
                <input type="text" className="border outline-none" {...register('LastName',
                    {
                        required:{value: true,message:'*required '},
                        minLength:{value:2,message:'*atleast 2 alphabets'},
                        maxLength:{value:15,message:'*atmost 15 alphabets'},
                        pattern:{
                            value:/^[A-Za-z]+$/,
                            message:"Only Letters"
                        }
                    }
                    )}/>
                {errors.LastName?<p className='text-red-600'>{errors.LastName.message}</p>:"" }
            </div>
            <br />
            <input type="submit" disabled={isSubmitting} value={isSubmitting?"Submitting":"Submit"} className=' text-indigo-950 rounded bg-cyan-200 px-2 font-semibold hover:scale-110 duration-300  focus:scale-105' />
        </form>
        {active?(<p>You Have Submitted The Form Successfully !!</p>):""}
        </div>
    )
}

// to prevent multiple submits while subitting , we disable the buttom until issubmitting becomes false again.
export default App
