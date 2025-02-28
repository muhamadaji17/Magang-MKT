import { useEffect } from 'react';

export const useGetAboutHook = (
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
