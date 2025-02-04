import { useState, useRef } from 'react';
import { useStore } from '../store/store';

export const useDashboardHook = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingDatas, setLoadingDatas] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showModalId, setShowModalId] = useState(false);
    const [modalType, setModalType] = useState('');
    const [getId, setGetId] = useState(null);
    const [reGetDatas, setReGetDatas] = useState(false);
    const trigger = useRef(null);

    const store = useStore();
    const accessToken = store.account.accessToken;
    const username = store.account.username;

    return {
        datas,
        setDatas,
        loadingDatas,
        setLoadingDatas,
        showAddModal,
        setShowAddModal,
        trigger,
        accessToken,
        username,
        loading,
        setLoading,
        getId,
        setGetId,
        showModalId,
        setShowModalId,
        modalType,
        setModalType,
        reGetDatas,
        setReGetDatas,
    };
};
