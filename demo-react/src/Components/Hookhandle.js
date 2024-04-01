import React,{useState} from "react";
function Hookhandle(){
    const initialCount=0;
    const [count,setCount] = useState(initialCount);
    return(
        <div>
            <p>Count{count}</p>
           <button onClick={()=>setCount(prevCount => prevCount+1)}>Increment</button>
           <button onClick={()=>setCount(prevCount => prevCount-1)}>DEcrement</button>
           <button onClick={()=>setCount(initialCount)}>Reset</button>
        </div>
    )
}
export default Hookhandle;