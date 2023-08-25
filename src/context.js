import React, {useState, useContext} from 'react';

const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
  return <AppContext.Provider value="Hellog">{children}</AppContext.Provider>
}

// custom hook

export {AppContext, AppContextProvider}