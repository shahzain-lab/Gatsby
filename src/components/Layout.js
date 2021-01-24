import React from 'react';
import Counter from './counter';

export default function Layout ({children}){
    return(
        <div>
            <div>
                {children}
            </div>
            <Counter title="Counter App"/>
            
        </div>
    )
}