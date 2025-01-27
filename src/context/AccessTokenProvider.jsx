import React, { createContext, useState } from "react";
const AccessTokenContext = createContext();

const AccessTokenProvider = ({ children }) => {
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

export { AccessTokenContext };

export default AccessTokenProvider;
