import { useContext } from "react";

export const useCustomContext = (context) => {
  const contextValue = useContext(context);
  if (!contextValue) {
    throw new Error(
      `${context.displayName || "Context"} must be used within its provider`
    );
  }
  return contextValue;
};
