import React, {useState} from 'react';


export default function Counter({title}){
   const [counter , setCounter] = useState(0)
   
    return(
        <div>
            <h1>{title}</h1>
            <h3>{counter}</h3>
            <button onClick={() => setCounter( counter + 1 )}>increment</button>
            <button onClick={() => setCounter( counter - 1 )}>decrement</button>
        </div>
    )
}