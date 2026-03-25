import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';

//light dark mode toggle program (state variable is string)

const Mycontext =createContext();

const App = () => {
  const [mode,setMode]=useState("Light");
  return (
    <div id={mode}>
      <Mycontext.Provider value={{mode,setMode}}>
        <ChildA/>
      </Mycontext.Provider>
      <p>Curent Mode:{mode} (at parent)</p>
    </div>
  )
}

export default App
export{Mycontext}

