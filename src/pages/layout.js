import React from 'react';
import  {Content} from '../components'

import Header from './tasks/header'
import Add from './tasks/add'
import Filters from './tasks/filters'
import Tasks from './tasks/tasks'

 const Layout = () => {
    return (
        <div className="container">
            <Content>
                <Header/>
                <Add /> 
            </Content>
            <Content>
                <Filters />
                <Tasks /> 
            </Content>
        </div>
    );
};

export default Layout