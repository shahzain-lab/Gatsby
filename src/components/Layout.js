import React from 'react';
import Counter from './counter';
import { navigate } from 'gatsby';

export default function Layout ({children}){
    return(
        <div>
            <div>
                {children}
            </div>
            <Counter title="Counter App"/>
            <br />
            <button onClick={() =>
               navigate('/')
              }>
                Back to Home
            </button>
        </div>
    )
}