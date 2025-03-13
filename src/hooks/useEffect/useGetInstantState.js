import { useEffect } from "react";

const useGetInstantState = (setState, value) => {
    useEffect(() => {
        setState(value);
    }, [value]);
};

export default useGetInstantState;
