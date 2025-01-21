import React, { createContext, useEffect, useState } from "react";
const TokenContext = createContext();

const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (values) => {
    setToken(values);
  };

  return (
    <TokenContext.Provider value={{ token, handleLogin }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContextProvider, TokenContext };
