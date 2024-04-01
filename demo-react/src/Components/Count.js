import React,{useState} from 'react';
function Count(){
    const initial = 0;
    const [count, setCount]= useState(initial)
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=> setCount(count+5)}>Increment</button>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
            <button onClick={()=> setCount(initial)}>Reset</button>
        </div>
    )
}
export default Count;