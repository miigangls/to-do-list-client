import React, {useState} from 'react';
import Login from './login'; 
import Register from './register'

function App(props) {
    const [register, setResgister] =  useState(false)

    return (<>
           {(!register) ?  <Login onClickRegister={()=> setResgister(true)} /> : <Register onClickRegister={()=> setResgister(false)} />} 
        </>
    );
}

export default App;