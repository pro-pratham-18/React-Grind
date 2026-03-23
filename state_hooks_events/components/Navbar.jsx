import React ,{useState} from 'react'
import prathamesh from "../assets/prathamesh.jpg"
import Hero from "./Hero.jsx"


//props code , image passing using props [child]

// const Navbar = (props) => {
//   return (
//     <div className='bg-cyan-500 flex flex-col p-1 items-center h-40 w-50'>
//         <p className="text-amber-200"> this is the para 1</p> 
//         <img src={prathamesh} alt='pj' className='h-20 w-20'/>
//         <p className='text-xs'>this is para 2 , image is above this</p>
//         <Hero name="Joshi Jee"/>
//         <img src={props.image} alt="pj2" />
//     </div>
//   )
// }

// state hook 

// const Navbar = () => {
//   const [count,setCount]=useState(6);
//   return (
//     <div className='h-dvh w-dvw flex justify-center items-center text-center'>
//       <div className="bg-amber-300 border rounded p-3 ">
//         <p>You counted {count} times</p>
//         <button class="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" onClick={()=>{setCount(count+1)}}>Click Me</button>
//       </div>
//     </div>
//   )
// }



// counting using props as parent-child function passing (Child)
// const Navbar = (props) => {
//   return (
//     <div className='h-dvh w-dvw flex justify-center items-center flex-col text-center'>
//       <p>You Have Counted <h1 className='text-2xl font-bold'>{props.count1}</h1> Times</p>
//       <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
//       onClick={props.CountClick}>
//         Click Me
//       </button>
//     </div>
//   )
// }


//state shifting (child)

// const Navbar = (props) => {
//   return (
//     <div>
//         <input type="email" name="email" onChange={(e)=>{props.setname(e.target.value)}}/>
//         <input type="submit" value="Click me" onClick={()=>{props.setname2(props.name)}} />
//         <p>The updated value of the name is: {props.name2}</p>
//     </div>

//   )
// }


// child syncing                                                           (A,B)
// const Navbar = (props) => {                                 
//   return (
//     <div>
//         <p>{props.title}</p>
//         <input type="text" className='border' onChange={(e)=>{props.setname(e.target.value)}}/>
//         <p>The updated value of the name is: {props.name}</p>

//     </div>
//   )
// }

// export default Navbar










