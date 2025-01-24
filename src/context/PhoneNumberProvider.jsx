import React, { createContext, useState } from "react";

// Membuat Context
const PhoneNumberContext = createContext();

const PhoneNumberProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <PhoneNumberContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </PhoneNumberContext.Provider>
  );
};

export default PhoneNumberProvider;
export { PhoneNumberContext };
