import React, { createContext, useState, useContext } from 'react';


// Contexto para FS1
const FS1Context = createContext();

export const FS1Provider = ({ children }) => {
  const [fs1Id, setFs1Id] = useState(null);

  return (
    <FS1Context.Provider value={{ fs1Id, setFs1Id }}>
      {children}
    </FS1Context.Provider>
  );
};

export const useFS1 = () => useContext(FS1Context);

// Contexto para FS0
const FS0Context = createContext();

export const FS0Provider = ({ children }) => {
  const [fs0Id, setFs0Id] = useState(null);

  return (
    <FS0Context.Provider value={{ fs0Id, setFs0Id }}>
      {children}
    </FS0Context.Provider>
  );
};

export const useFS0 = () => useContext(FS0Context);
