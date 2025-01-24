import { useState } from "react";

const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false); // State untuk show/hide password

  const handlePasswordToggle = () => {
    setShowPassword((prevState) => !prevState); // Toggle state
  };

  return { showPassword, handlePasswordToggle }; // Return state dan handler
};

export default usePasswordToggle;
