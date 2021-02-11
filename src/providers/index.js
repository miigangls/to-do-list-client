import React  from 'react';
import {FirebaseContext} from '../firebase'
import  useAuthenticated from '../hooks/useAut';


export const Provider = ({ children }) => {
  
  return (
    <FirebaseContext.Provider
      value={{
        FirebaseContext,
        user: useAuthenticated
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};