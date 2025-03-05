import { useEffect } from "react";

const useGetDataHook = (
    service,
    accessToken,
    setDatas,
    setLoading,
    reGetDatas,
    setReGetDatas
) => {
    useEffect(() => {
        if (!reGetDatas) {
            service(accessToken, setDatas, setLoading, setReGetDatas);
        }
    }, [reGetDatas]);
};

export default useGetDataHook;
