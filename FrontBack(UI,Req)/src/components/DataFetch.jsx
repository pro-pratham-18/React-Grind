import React from 'react'
import { useState, useEffect } from 'react';

// https://jsonplaceholder.typicode.com/posts , url to fetch the random data 

const DataFetch = () => {
    
    const[data,setdata]=useState([]);
    const [loading,setloading]=useState(false);

    async function fetchData(){

        setloading(true);

        setTimeout(() => { // will get loaded after 2 sec
            console.log("settimeout running");
        }, 2000);
        await fetch("http://localhost:3000/")  // the request send to the localhost backend 
        .then(response=>response.json())
        .then(data=>{
            setdata(data);
            console.log(data);
            setloading(false);
        })
    }
    function ClearData(){
        setdata([]);
    }
    
  return (
    <div className='p-4 bg-neutral-500 w-dvw h-dvh' >
        <div className='flex gap-4 '>
            <input type="button" value="FetchData" className='border bg-blue-600 text-white rounded px-3 hover:bg-blue-500 active:scale-98 duration-300 ' onClick={fetchData} />
            <input type="button" value="ClearData" className='border bg-blue-600 text-white rounded px-3 hover:bg-blue-500 active:scale-98 duration-300 ' onClick={ClearData} />
        </div>
        {loading?<p>Loading...</p>:""}
        <div className='p-1'>
            {
                data && data.map(element=>(                   // as this is the js code so it will be under the curly brackets 
                    <div className='border my-3 p-3 rounded-2xl bg-black text-yellow-300 ' key={element.id}>
                        <p>Id : {element.id}</p>
                        <p>Name : {element.name}</p>
                        <p>age : {element.age}</p> <br />
                    </div>
                ))
            }
        </div>
    </div>
  )
}




// ternary operator gives output in a single elemnt(div preferred)
// the map function also demands evrything inside a single element(div)
// kisi bhi function ke andar ka part ham generally ek div ke andar lihte hai 
// we must the give the unique key in the div of the map function 

export default DataFetch



