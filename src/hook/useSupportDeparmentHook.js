import { useEffect } from 'react';
import { GetDepartmentsServices } from '../services';

export const useSupportDepartmentHook = (
    accessToken,
    setDatas,
    setLoadingDatas,
    setReGetDatas,
    modalType
) => {
    useEffect(() => {
        if (modalType) {
            GetDepartmentsServices(
                accessToken,
                setDatas,
                setLoadingDatas,
                setReGetDatas
            );
        }
    }, [modalType]);
};
