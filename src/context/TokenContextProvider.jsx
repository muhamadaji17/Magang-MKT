import React, { createContext, useState } from "react";
const AccessTokenContext = createContext();

const TokenContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");

  const handleLogin = (values) => {
    setAccessToken(values);
  };

  return (
    <AccessTokenContext.Provider
      value={{ accessToken, setAccessToken, handleLogin }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};

export { TokenContextProvider, AccessTokenContext };
