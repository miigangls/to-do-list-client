
import React, { createContext } from 'react';
import  useAuthenticated from '../hooks/useAut';

export const UserAutContext = createContext('');

export default ({ children }) => {
  const [stateUserAut] = useAuthenticated();

  return (
    <UserAutContext.Provider
      value={{stateUserAut}}>
      {children}
    </UserAutContext.Provider>
  );
};