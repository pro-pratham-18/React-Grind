import React from 'react'
import { useState, useEffect } from 'react';



const DataFetch = () => {
    
    const[data,setdata]=useState([]);
    const [loading,setloading]=useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(data=>{
            setdata(data);
            setloading(false);
        })
    
    }, [])
    
  return (
    <div>
        {loading?(
            <p>Loading</p>
        ):(
        <div>
            {
                data.map(element=>(
                    <div>
                        <p>Id :{element.id}</p>
                        <p>UserId:{element.userId}</p>
                        <p>Title :{element.title}</p>
                    </div>
                ))
            }
        </div>
        )}
    </div>
  )
}

// ternary operator gives output in a single elemnt(div preferred)
// the map function also demands evrything inside a single element(div)
// kisi bhi function ke andar ka part ham generally ek div ke andar lihte hai 

export default DataFetch


