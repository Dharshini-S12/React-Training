// import React,{useState} from "react";
// function Hookhandle(){
//     const initialCount=0;
//     const [count,setCount] = useState(initialCount);
//     return(
//         <div>
//             <p>Count{count}</p>
//            <button onClick={()=>setCount(prevCount => prevCount+1)}>Increment</button>
//            <button onClick={()=>setCount(prevCount => prevCount-1)}>DEcrement</button>
//            <button onClick={()=>setCount(initialCount)}>Reset</button>
//         </div>
//     )
// }
// export default Hookhandle;
// import React,{useState} from "react";
// function Hookhandle(){
//     const initial = 0;
//     const [count,setCount] = useState(initial);
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(count-1)}>Decrement</button>
//             <button onClick={()=>setCount(initial)}>Reset</button>
//         </div>
//     )
// }
// export default Hookhandle;
import React,{useState} from 'react';
function Hookhandle(){
    const [count , setCount] = useState(0)
    return(
        <div>
            <button onClick={()=>setCount(prevcount => prevcount + 1)}>{count}</button>
           
        </div>
    )
}
export default Hookhandle;