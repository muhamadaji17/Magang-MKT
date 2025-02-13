import { useEffect } from 'react';
import { GetPositionServices, SearchPositionServices } from '../services';

export const usePositionHook = (
    accessToken,
    query,
    setDatas,
    setLoadingDatas,
    setReGetDatas,
    reGetDatas
) => {
    useEffect(() => {
        if (accessToken) {
            if (
                Object.keys(query).length === 0 ||
                Object.values(query).every((value) => value === '')
            ) {
                GetPositionServices(
                    accessToken,
                    setDatas,
                    setLoadingDatas,
                    setReGetDatas
                );
            } else {
                const timerSearchData = setTimeout(() => {
                    SearchPositionServices(
                        query,
                        accessToken,
                        setDatas,
                        setLoadingDatas,
                        setReGetDatas
                    );
                }, 500);
                return () => clearTimeout(timerSearchData);
            }
        }
    }, [query, reGetDatas]);
};
