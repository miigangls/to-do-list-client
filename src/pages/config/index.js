import React, {useState} from 'react';
import Login from './login'; 
import Register from './register'

function App(props) {
    const [register, serResgister] =  useState(false)

    return (<>
           {(!register) ?  <Login onClickRegister={()=> serResgister(true)} /> : <Register onClickRegister={()=> serResgister(false)} />} 
        </>
    );
}

export default App;