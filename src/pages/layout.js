import React from 'react';
import  {Content} from '../components'

import Header from './tasks/header'
import Tasks from './tasks/tasks'

 const Layout = () => {
    return (
        <div className="container">            
                <Content>
                    <Header/>
                </Content>
                <Content>
                    <Tasks /> 
                </Content>
        </div>
    );
};

export default Layout