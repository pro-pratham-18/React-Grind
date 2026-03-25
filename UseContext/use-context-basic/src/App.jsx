import React, { createContext, useState } from 'react'
import ChildA from '../../React-Grind/use-context/src/Components/ChildA';
import ChildD from '../../React-Grind/use-context/src/Components/ChildD';

const userContext=createContext();

const App = () => {
  const [data,setdata]=useState({name:"prathamesh",age:20,rollno:46})
  return (
    <div className='h-dvh w-dvw bg-sky-300 p-5 flex flex-col items-center justify-center gap-3'>
      <userContext.Provider value={{user:data,userfunc:setdata}} >
      <ChildA/>
      <ChildD/>
      </userContext.Provider>
    </div>
  )
}



// point 
// alwaways use usecontext inside the child element
// for tranferring data to directly connected childs from parents , prefer props
// for tranferring data to far childs , then use useContext to skip intermideiate ones

// here , the heirarchy looks like 
// App
//  ├─ A → B → Cys use create context outside the parent function
// al
//  └─ D → E

// if we want to tranfer the data to child C , then even if we provide child A in provider , it will work, as c is inside a 
// similarly for e and d

// useState -> [] (when initializing the state)
//useContext -> {} (when consuming the data of created context)


export default App
export{userContext}


