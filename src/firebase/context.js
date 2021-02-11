import React, { createContext } from 'react';
import {auth, db, fire, storage} from './config'
const FirebaseContext = createContext({auth, db, fire, storage});

export default FirebaseContext;