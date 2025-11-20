import { useEffect } from "react";

export const useDebauncedEffect = ({ fn, deps, delay = 300, condition }) => {
  useEffect(() => {
    if (!condition) {
      fn();
      return;
    }

    const handler = setTimeout(() => fn(), delay);

    return () => clearTimeout(handler);
  }, [...deps]);
};
