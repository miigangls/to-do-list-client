import {closeSession, login, register } from './fetch';
import FirebaseContext from '../firebase/context';
import {auth, db, fire, storage} from './config'

export { FirebaseContext
    , closeSession
    , login
    , register
    , auth
    , db
    , fire
    , storage
}

