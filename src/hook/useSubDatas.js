import { useEffect } from "react";

export const useDataSub = (funcFetchData, extraOptions) => {
  const { submitType } = extraOptions;

  useEffect(() => {
    if (submitType) {
      funcFetchData(extraOptions.accessToken, extraOptions);
    }
  }, [submitType]);
};
