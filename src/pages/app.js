import React from 'react';
import Layout from './layout';
import Login from './config/'; 
import UseAuthenticated from '../hooks/useAuthenticated'
import { CookiesProvider } from 'react-cookie';

function App(props) {
    const {userId} =  UseAuthenticated()
    return (<CookiesProvider>
           {(!userId) ?  <Login /> : <Layout />} 
        </CookiesProvider>
    );
}

export default App;