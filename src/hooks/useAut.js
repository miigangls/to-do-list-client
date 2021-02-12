import React, { useEffect, useState } from 'react';
import {auth} from '../firebase';
import { useCookies } from 'react-cookie';
import {COOKIE_NAME, COOKIE_OPTIONS} from '../firebase/cookies'

function useAuthenticated() {
    const [cookies, setCookie] = useCookies([COOKIE_NAME])
    , {user } = cookies[COOKIE_NAME] || {}
    
    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            if( user ) {
                setCookie(COOKIE_NAME, {
                    user,
                  }, COOKIE_OPTIONS)
            } else {
                setCookie(COOKIE_NAME, {}, COOKIE_OPTIONS)
            }
        });
        return () => unsuscribe();
    }, []);

    return {
        userId: user.uid
    };
}

export default useAuthenticated;