import { useState, useRef } from 'react';
import { useStore } from '../store/store';

export const useDashboardHook = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingDatas, setLoadingDatas] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showModalId, setShowModalId] = useState(false);
    const [modalType, setModalType] = useState('');
    const [getDetailsData, setGetDetailsData] = useState(null);
    const [reGetDatas, setReGetDatas] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [query, setQuery] = useState({});
    const [subData, setSubData] = useState([]);
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
        getDetailsData,
        setGetDetailsData,
        showModalId,
        setShowModalId,
        modalType,
        setModalType,
        reGetDatas,
        setReGetDatas,
        hamburger,
        setHamburger,
        query,
        setQuery,
        subData,
        setSubData,
    };
};
