import { useEffect } from "react";

const useSupportGetDataHook = (
    accessToken,
    service,
    setDatas,
    setLoadingDatas,
    setReGetDatas,
    modalType
) => {
    useEffect(() => {
        if (modalType) {
            service(accessToken, setDatas, setLoadingDatas, setReGetDatas);
        }
    }, [modalType]);
};

export default useSupportGetDataHook;
