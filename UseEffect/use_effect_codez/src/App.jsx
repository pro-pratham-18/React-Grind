import React,{useState,useEffect} from 'react'
import Timer from './components/Timer'
//------------------------------------------------------------------------------------------------------------------
//app code of timer component
// code for conditional rendering of the timer

// const App = () => {
//     const [show,setshow]=useState(true);
//     function toggle_show(e){
//         setshow(!show);
//     }
//     return(
//         <div>
//             <input type="button" value="Remove Timer" className='border bg-cyan-100' onClick={toggle_show}/>
//             {show && <Timer/>}
//         </div>
//     )
// }
 // unmounting(removing) it(Timer) from here causes the cleanup function to run 

 //------------------------------------------------------------------------------------------------------------------------------------

 //app code of Datafetch component

// import React from 'react'
// import DataFetch from './components/DataFetch'

// const App = () => {
//   return (
//     <div>
//       <DataFetch/>
//     </div>
//   )
// }


//--------------------------------------------------------------------------------------------------------

// appcode for count component ,(vanishing and inacarnating the timer using conditional rendering)

// import React, { useState } from 'react'
// import Count from '../../React-Grind/use_effect_codez/src/components/Count'


// const App = () => {
//   const [active,setactive]=useState(true);

//   function handleclick(){
//     setactive(!active)
//   }
//   return (
//     <div>
//       {active?(
//         <input type="button" value="Vanish" className='border' onClick={handleclick}/>
//       ):(
//         <input type="button" value="Incarnate" className='border' onClick={handleclick} />
//       )}
//       {active && <Count/>}
//     </div>
//   )
// }
// // point - if the the state variable of the child component changes then its not must for parent component (let's say app here) to re-render
// // but if state variable of the parent component changes then child component re-renders as well
// export default App

//-------------------------------------------------------------------------------------------------------------------------------------------------------------






