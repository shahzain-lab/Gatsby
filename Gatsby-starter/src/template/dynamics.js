import React from 'react';

export default function DynamicPage({pageContext}){
    return(
        <div>
    <div>Hello again from {pageContext.name}</div>
    
    <div>This page is create dynamically at Build Time</div>
    </div>
    )
}