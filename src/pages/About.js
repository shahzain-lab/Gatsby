import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/Layout';

export default function About(){
    return(
        <Layout>
            <div>
            This is About page
            <br />
            <button onClick={() =>
               navigate('/')
              }>
                Back to Home
            </button>
            </div>
        </Layout>
    )
}