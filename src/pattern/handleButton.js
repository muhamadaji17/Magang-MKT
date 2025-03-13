export const handleSubmitData = (data, postData, ...res) => {
    postData(data, ...res);
};

export const handleShowPassword = (setShowPassword, showPassword) => {
    setShowPassword(!showPassword);
};

export const handleShowModal = (setShowModal, setType, type) => {
    setType(type);
    setShowModal(true);
};

export const handleShowModalId = (
    showModal,
    setShowModal,
    setGetDetailsData,
    data,
    setType,
    type
) => {
    setGetDetailsData(data);
    setType(type);
    setShowModal(!showModal);
};

export const handleCancelModal = (setShowModal) => {
    setShowModal(false);
};

export const handleCloseBgModal = (e, trigger, setShowModal) => {
    e.stopPropagation();
    if (e.target === trigger.current) {
        setShowModal(false);
    }
};

export const saveEvents = (
    datas,
    EditBannerDateService,
    accessToken,
    setShowModal,
    setLoadingData,
    setReGetDatas
) => {
    const changedEvents = datas.filter((event) => event.hasChanged);
    changedEvents.forEach((data) => {
        EditBannerDateService(
            data,
            accessToken,
            setShowModal,
            setLoadingData,
            setReGetDatas
        );
    });
};

export const handleFileChange = (e, setPreviewImage, setPreviewImageName) => {
    const file = e.target.files[0];
    if (file) {
        setPreviewImage(URL.createObjectURL(file));
        setPreviewImageName(file.name);
    } else {
        setPreviewImage("");
        setPreviewImageName("");
    }
};

export const handleChange = (e, key, setDatas, setReGetDatas) => {
    setReGetDatas(false);
    setDatas((prev) => ({
        ...prev,
        [key]: e.target.value,
    }));
};
