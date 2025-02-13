import { useEffect } from 'react';
import { GetDepartmentsServices, SearchDepartmentServices } from '../services';

export const useDepartmentHook = (
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
                GetDepartmentsServices(
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
