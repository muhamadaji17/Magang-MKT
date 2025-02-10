import { useEffect } from 'react';
import { GetUnitServices, SearchDepartmentServices } from '../services';

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
            if (query.trim() === '') {
                GetUnitServices(
                    accessToken,
                    setDatas,
                    setLoadingDatas,
                    setReGetDatas
                );
            } else {
                const timerSearchData = setTimeout(() => {
                    SearchDepartmentServices(
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
