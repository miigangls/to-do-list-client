import React from 'react';
import {useRoutes} from 'hookrouter';
import Tasks from './layout';
import Login from './login'
//import {UserAutContext} from '../providers/userAut'

const routes = {
    '/': () => <Login />,
    '/tasks': () => <Tasks />
};

function App(props) {
    const routeResult = useRoutes(routes);
   
    return (<>
            {routeResult}
        </>
    );
}

export default App;