import React from 'react'
import { useParams } from 'react-router';   
const ParamComp = () => {
    const {id} = useParams();
    return (
        <div>
            <p>The Id is : {id}</p>
        </div >
    )
}

export default ParamComp





  
