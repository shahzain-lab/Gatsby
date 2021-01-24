import React from 'react';
import { Link, navigate } from 'gatsby';
import Counter from '../components/counter';

export default function About(){
    return(
        <div>
            This is About page
            <br />
            <Counter />
            <hr/>
            <button onClick={() =>
               navigate('/')
              }>
                Back to Home
            </button>
        </div>
    )
}