import React from 'react';
import { closeSession } from '../../firebase/fetch'

const Header = () => {

    async function onClick (e, ) {
        e.preventDefault();
        await closeSession() 
    }


    return (<div className="row">
            <header className="input-filter">
                <div style={{marginRight: 'auto'}} ></div>
                <h2>Lista de tareas</h2>
                <div style={{marginLeft: 'auto'}} >
                    <button onClick={onClick}  className="button-primary">
                        <i class="fas fa-power-off"></i>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;