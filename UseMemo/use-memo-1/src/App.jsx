import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const doubled = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]); // 
  return (
    <>
      <h1>{doubled}</h1>👈 dependency list 

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input onChange={(e) => setText(e.target.value)} />
    </>
  );
}
// paste these points on gpt to understand again 



// after using UseMemo the function only runs when the value of the dependency list variable changes, 
// if not used useMemo, the function computes at every render , and the variable creation(of that variable in which the function is assigned) happens on everyrender
// the useMemo only stores last changed value of the functions argument , if the last stored value changes and argument input is of that value again then it will recompute
// changing of argument variable has no effect , it runs only when dependency list variable changes

// initial declaration or initialization of the dependecy list variable counts as a changed

// empty dependncy list pe bhi chalega function (depends on mount , in dev mode , 2 times , in production mode ,one times)

//If argument changes but dependency doesn’t →
//React ignores it and returns cached value (stale result) (mtlb old argument ki computed value)

// useMemo is used for caching the functinal variable's vlaue and useCallback is used for the functions refernece

//in useMemo the computed value of the function is memoized but in useCallback the function reference is memoized

// using UseMemeo doesnt stops re-initialization or re-creation of the variables(to which functions are assigned) as well as the assigned functions 


export default App





