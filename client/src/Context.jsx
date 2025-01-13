import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  );
};

export const useCart = () => useContext(Context);