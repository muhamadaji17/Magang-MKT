import { useEffect } from "react";

export const useGetDataWithSearchHook = (
    accessToken,
    query,
    setDatas,
    setLoadingData,
    setLoadingSearch,
    setReGetDatas,
    reGetDatas,
    service,
    searchService
) => {
    useEffect(() => {
        if (!reGetDatas) {
            if (
                Object.keys(query).length === 0 ||
                Object.values(query).every((value) => value === "")
            ) {
                service(accessToken, setDatas, setLoadingData, setReGetDatas);
            } else {
                const timerSearchData = setTimeout(() => {
                    searchService(
                        query,
                        accessToken,
                        setDatas,
                        setLoadingSearch,
                        setReGetDatas
                    );
                }, 500);
                return () => clearTimeout(timerSearchData);
            }
        }
    }, [query, reGetDatas]);
};

export const useGetDataHook = (
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
