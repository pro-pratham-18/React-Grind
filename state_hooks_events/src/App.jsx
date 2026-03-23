import React, {useState} from 'react'
import { useEffect } from 'react'

import prathamesh2 from "./assets/prathamesh2.jpg"
import Loginbtn from './components/Loginbtn'
import Logoutbtn from './components/Logoutbtn'

// image passing using props (parent)
// const App= () => {
//   return (
//     <div className="p-2 bg-amber-300 ">
//       <Navbar image={prathamesh2}/>
//       </div>
//   )
// }



// counting using props as parent-child function passing (parent)
// const App = () => {
//   const [count,setcount]=useState(0);

//   function handleclick(){
//     setcount(count+1);
//   }
//   return (
//     <>
//     <Navbar CountClick={handleclick} count1={count}/>
//     </>
//   )
// }


// state shifting (parent)               showing data after click
// const App = () => {
//     const [name,setname]=use   State('');
//     const [name2,setname2]=useState('');
//   return ( 
//     <div>
//         <Navbar name={name} setname={setname} name2={name2} setname2={setname2}/>
//     </div>
//   )
// }



// child syncing                                                 (A)
// const App = () => {
//     const [name,setname]=useState('');
//     return (
//     <div>
//       <Navbar name={name} setname={setname} title="Child 1"/>
//       <Navbar name={name} setname={setname} title="Child 2"/>
//     </div>
//   )
// }

// no child syncing , both child  having different states         (B)
// const App = () => {
//     const [name,setname]=useState('');
//     const [name2,setname2]=useState('');
//     return (
//     <div>
//       <Navbar name={name} setname={setname} title="Child 1"/>
//       <Navbar name={name2} setname={setname2} title="Child 2"/>
//     </div>
//   )
// }


//
// const App = 
//     using if -else 

//     if (isloggedIn) {
//         return (
//             <Logoutbtn/>    
//         )
//     }
//     else{
//         return (
//             <Loginbtn/>
//         )
//     }

//     using ternary operator(return kr andar ayega)

//     return (
//         <div>
//             {isloggedIn ? <Logoutbtn/> : <Loginbtn/>}
//         </div>
//     )

//     using logical operators(return ke andar , aur if bahar ) 

//     const [isloggedIn,setloggedIn] =useState(false);

//     if(!isloggedIn){
//         return(
//             <Loginbtn/>
//         )
//     }

//     return(
//         <div>
//             {isloggedIn && <Logoutbtn/>}
//         </div>
//     )
    
    


// }


// const App = () => {
//     const [Active,setActive]=useState(true);
//     function handleclick(){
//         alert("clicked");
        
//     }
    
//   return (
//     <div className='h-dvh w-dvw flex flex-col justify-center items-center bg-amber-200'>
//     <input type="button" value="email" className={Active? "bg-pink-500 text-white border": "bg-green-300 text-black border" } onClick={()=>{setActive(!Active),handleclick()}}/>         // toggling classes using states for style changes on events(click,change etc) , by using ternaty operrators 
//     <p className=' bg-blue-500 text-white' onMouseOver={handleclick}>this is para</p>
//     </div>
//   )
// }


// multiple function wroking on single event happening , (if want only one function then dont write prime fucntion)
// const App = () => {
//     function handlechange(e){            // ham e(event info) function me bhi likh sakte hai , event(e.g. onchange ,onclick) me function ka naam(e.g. handleclick,handlechange) likh kar 
//         console.log("Itna likh diya hai tumne:",e.target.value);
//     }

//     function handleclick(e){
//         console.log("Handle click wala fucntion");
//     }

//     function prime(e){
//         handlechange(e);
//         handleclick(e);
//     }
//   return (

//     <div>
//         <input type="text" className='border' onChange={prime} />
//         <input type="button" value="Click Me" className='border bg-amber-200' />
//     </div>
//   )
// }


// form submit pay event triggering 


// const App = () => {
//     function handlesubmit(e){

//         alert("form has been submitted")
//     }
//   return (
//     <div>
//         <form onSubmit={handlesubmit}>  
//             <input type="email" className='border' />
//             <input type="submit" value="Submit" className="border"/>
//         </form>
//     </div>
//   )
// }

// point : using function without arrow function fornat in onclick immediately triggers that function call (even that event is not triggered)
// example <p onClick={alert("clicked")}></p> if used like this alert message shows without evem clciking the p
// valid for other fucntions (userdfined / built-in ) as well


// event propgation logic : by default, event on parent does not triggers event on child , but when on child , it triggers the event of the parent as well , this is called event bubbling , the event moves up the dom tree , to prevent this , we use stoppropogation()


// flex-box one click directinon chhange program using boolean state hook
// const App = () => {
//     const [active , setactive]=useState(true);
//   return (
//     <div className='h-dvh w-dvw bg-amber-100 p-5 '>
//         <div className={active?'h-50 w-70 bg-blue-400 border p-2 flex gap-4':'h-50 w-70 bg-blue-400 border p-2 flex flex-col gap-4'} >
//             <div className=' bg-green-400 border h-8 w-10'>Box1</div>
//             <div className=' bg-green-400 border h-8 w-10'>Box2</div>
//             <div classNaffme=' bg-green-400 border h-8 w-10'>Box3</div>
//             <div className=' bg-green-400 border h-8 w-10' >Box4</div>
//         </div>
//         <input type="Submit" value='Change Direction' className=' text-yellow-400 bg-black ' onClick={()=>setactive(!active)} />
//     </div>

//   )
// }







