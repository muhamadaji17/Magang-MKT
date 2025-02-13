import { useEffect } from 'react';
import { GetUnitServices, SearchUnitServices } from '../services';

export const useUnitHook = (
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
                GetUnitServices(
                    accessToken,
                    setDatas,
                    setLoadingDatas,
                    setReGetDatas
                );
            } else {
                const timerSearchData = setTimeout(() => {
                    SearchUnitServices(
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
