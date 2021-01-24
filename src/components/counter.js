import React, {useState} from 'react';


export default function Counter(){
   const [counter , setCounter] = useState(0)
   
    return(
        <div>
            <h3>{counter}</h3>
            <br />
            <button onClick={() => setCounter( counter + 1 )}>increment</button>
            <button onClick={() => setCounter( counter - 1 )}>decrement</button>
        </div>
    )
}