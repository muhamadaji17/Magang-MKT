import { useEffect } from "react";

const useGetInstantState = (setState, value) => {
    useEffect(() => {
        setState(value);
    }, []);
};

export default useGetInstantState;
