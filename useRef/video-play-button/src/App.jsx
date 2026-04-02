import React, { useRef, useState } from 'react'

import Waterflow from "./assets/waterflow.mp4"





const App = () => {
    const vidRef = useRef();

    const [active,setActive]=useState(false);

    function handleclick(){
        const newactive=!active;
        setActive(newactive);                // setactive is async thats why we used a different variable to store the toggled value           // it is async but await is not allowed here 

        if (newactive) {
        vidRef.current.play();
        }

        else{
            vidRef.current.pause();
        }
        }
    return (
        <div>
            <video src={Waterflow} ref={vidRef} width="200" type="vide0/mp4" ></video>
            <input  type="button" value="Play" className='border' onClick={handleclick} />
            <p>{active}</p>
        </div>
    )
}


export default App


