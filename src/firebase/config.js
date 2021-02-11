
import firebase from 'firebase'
import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import {apiKey
  , authDomain
  , projectId
  , storageBucket
  , messagingSenderId
  , appId
  , measurementId } from '../env'

const CONFIG = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  };

const fire = firebase.initializeApp(CONFIG);
const auth = app.auth()
const db = app.firestore()
const storage =  app.storage()

export {fire, auth , db, storage};