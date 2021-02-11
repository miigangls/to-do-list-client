import React, { useEffect, useState } from 'react';
import {auth} from '../firebase';

function useAuthenticated() {
    const [ stateUserAut, setUserAut] = useState(null);

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            if( user ) {
                setUserAut(user);
            } else {
                setUserAut(null);
            }
        });
        return () => unsuscribe();
    }, []);

    return stateUserAut;
}

export default useAuthenticated;