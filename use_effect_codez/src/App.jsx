import React,{useState,useEffect} from 'react'
import Timer from './components/Timer'

// code for conditional rendering of the timer

const App = () => {
    const [show,setshow]=useState(true);
    function toggle_show(e){
        setshow(!show);
    }
    return(
        <div>
            <input type="button" value="Remove Timer" className='border bg-cyan-100' onClick={toggle_show}/>
            {show && <Timer/>}
        </div>
    )
}
 // unmounting(removing) it(Timer) from here causes the cleanup function to run 
export default App
