
import React, {useState} from 'react'
import { useEffect } from 'react'

const App = () => {
    const [count,setcount]=useState(0);
    const [name,setname]=useState("");

    function upcount(){
        setcount(count+1);
    }

     // variation 1 , on initial rendering, runs on every render(runs 2 times in dev mode as mount happens twice , in production mode only one time)
    // useEffect(() => {     
    //   console.log("UseEffect Alert");
    // })

    // variation 2 , runs only on first render or initial render(in dev mode runs two times as there are two mounts, in production one time )
    // useEffect(() => {
    //   console.log("empty dpendency list");
    // }, [])
    
    //variation 3,  runs when the value of the dependency list variable is changed,
    // in dev mode/phase, on initial rendering ,side effect runs 2 times as mount happens twice , and the cleanup(one unmount happens) runs between the two sideeffects. when state changes, re-render -> cleanup(of old state) -> side-effect
    //in prod mode/phase ,  on initial rendering , siden effect runs 1 times as ony one mount, and no cleanup as no unmount there.when state changes,re-render -> cleanop(of old state) -> sideeffct

    // useEffect(() => {
    //   console.log("Side effect");
    //   return () => {
    //     console.log("Cleanup");
    //   }
    // }, [count])

    //variation 4, similar like 3 , useeffct runs when any of the statevariables in dependemcy list change
    // useEffect(() => {
    //   console.log("Side effect");
    //   return () => {
    //     console.log("Cleanup");
    //   }
    // }, [count,name])
  return (
    <div>
      <button onClick={upcount} className='btn'>Click to Re-Render</button>
      <p>{count}</p>
      <input type="text" className='input_txt' onChange={(e)=>{setname(e.target.value)}} />
      <p>The entered text is :{name}</p>
    </div>
  )
}



export default App