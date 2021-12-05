import React from 'react'
import { Router } from '@reach/router';
import Client from '../components/client';
import Client1 from '../components/client1';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const app = () => {
    return (
        <Layout>
            <h2>App page contains client-side routes</h2>
            <br/>
            <Router basepath="/app">
                <Client1 path="/client-2" />
                <Client path="/" />
            </Router>
            <Link to="/app/client-2">visit client-2</Link>
        </Layout>
    )
}

export default app
