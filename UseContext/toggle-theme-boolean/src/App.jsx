import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';

// program for (light / dark) mode toggle  (here state variable is boolean)

const Mycontext =createContext();

const App = () => {
  const [mode,setMode]=useState(true);
  return (
    <div id={mode?"light":"dark"}>
      <Mycontext.Provider value={{mode,setMode}}>
        <ChildA/>
      </Mycontext.Provider>
      <p>Curent Mode:{mode?"Light":"Dark"} (at parent)</p>
    </div>
  )
}

export default App
export{Mycontext}

