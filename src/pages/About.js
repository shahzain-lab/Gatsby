import React from 'react';
import { Link, navigate } from 'gatsby';

export default function About(){
    return(
        <div>
            This is About page
            <hr/>
            <button onClick={() =>
               navigate('/')
              }>
                Back to Home
            </button>
        </div>
    )
}