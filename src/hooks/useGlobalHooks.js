import { useState, useRef } from "react";
import { useStore } from "../store/store";
import { useLocation } from "react-router-dom";

const useGlobalHooks = () => {
    const store = useStore();
    const accessToken = store.account.accessToken;
    const username = store.account.username;
    const role = store.account.role;
    const priority = store.account.priority;

    const trigger = useRef(null);

    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [loadingButton, setLoadingButton] = useState(false);
    const [loadingData, setLoadingData] = useState(false);
    const [loadingSubData, setLoadingSubData] = useState(false);

    const [datas, setDatas] = useState([]);
    const [subDatas, setSubDatas] = useState([]);
    const [getDetailsData, setGetDetailsData] = useState([]);
    const [reGetDatas, setReGetDatas] = useState(false);

    const [disableDefaultValue, setDisableDefaultValue] = useState(false);

    const [hamburger, setHamburger] = useState(false);
    const [accordion, setAccordion] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");

    return {
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        loadingButton,
        setLoadingButton,
        disableDefaultValue,
        setDisableDefaultValue,
        hamburger,
        setHamburger,
        accessToken,
        username,
        role,
        priority,
        accordion,
        setAccordion,
        loadingData,
        setLoadingData,
        reGetDatas,
        setReGetDatas,
        datas,
        setDatas,
        location,
        showModal,
        setShowModal,
        modalType,
        setModalType,
        trigger,
        getDetailsData,
        setGetDetailsData,
        subDatas,
        setSubDatas,
        loadingSubData,
        setLoadingSubData,
    };
};

export default useGlobalHooks;
