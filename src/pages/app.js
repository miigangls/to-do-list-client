import React from 'react';
import Layout from './layout';
import Login from './config/'; 
import UseAut from '../hooks/useAut'
import { CookiesProvider } from 'react-cookie';

function App(props) {
    const {userId} =  UseAut()
    return (<CookiesProvider>
           {(!userId) ?  <Login /> : <Layout />} 
        </CookiesProvider>
    );
}

export default App;