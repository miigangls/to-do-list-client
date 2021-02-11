import React from 'react';
import  {Content} from '../components'
import Header from './header'
import Add from './add'

 const Layout = () => {
    return (
        <div className="container">
            <Content>
                <Header/>
                <Add /> 
            </Content>
        </div>
    );
};

export default Layout