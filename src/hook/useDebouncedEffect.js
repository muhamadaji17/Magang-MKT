import { useEffect } from "react";

export const useDebauncedEffect = ({
  fn,
  deps,
  delay = 300,
  condition = true,
}) => {
  useEffect(() => {
    if (!condition) {
      fn();
      return;
    }

    const handler = setTimeout(() => fn(), delay);

    return () => clearTimeout(handler);
  }, [...deps]);
};
