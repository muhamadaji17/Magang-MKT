import { useState, useRef } from 'react';

export const useGlobalHook = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [datas, setDatas] = useState();
    const [loadingDatas, setLoadingDatas] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const trigger = useRef();

    return {
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        loading,
        setLoading,
        datas,
        setDatas,
        loadingDatas,
        setLoadingDatas,
        showAddModal,
        setShowAddModal,
        trigger,
    };
};
