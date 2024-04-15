import React, { createContext, useState, useContext } from 'react';

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
