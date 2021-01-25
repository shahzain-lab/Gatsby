import React from 'react';
import { Router } from '@reach/router';
import Login from '../user/Login';
import Profile from '../user/Profile';
import Home from '../user/Default';

export default function App(){
    return(
        <div>
            <Router basepath="/app">
                <Home path="/"/>
                <Login path="/login"/>
                <Profile path="/profile"/>
            </Router>
        </div>
    )
}