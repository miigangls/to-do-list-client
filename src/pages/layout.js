import React, {useState} from 'react';
import  {Content} from '../components'

import Header from './tasks/header'
import Add from './tasks/add'
import Filters from './tasks/filters'
import Tasks from './tasks/tasks'

 const Layout = () => {
     const [loading, setLoading] = useState(true)
    return (
        <div className="container">
            <form id="abc">            
                <Content>
                    <Header/>
                    <Add  /> 
                </Content>
                <Content>
                    <Tasks /> 
                </Content>
            </form>
        </div>
    );
};

export default Layout