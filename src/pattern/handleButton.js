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
