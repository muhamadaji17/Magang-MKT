export const handleSubmitData = (data, postData, ...res) => {
    postData(data, ...res);
};

export const handleDeleteData = (id, deleteData, ...res) => {
    deleteData(id, ...res);
};

export const handleShowPassword = (setShowPassword, showPassword) => {
    setShowPassword(!showPassword);
};

export const handleShowConfirmPassword = (
    setShowConfirmPassword,
    showConfirmPassword
) => {
    setShowConfirmPassword(!showConfirmPassword);
};

export const handleShowModal = (showModal, setShowModal, setType, type) => {
    setType(type);
    setShowModal(!showModal);
};

export const handleCancelModalId = (showModal, setShowModal) => {
    setShowModal(!showModal);
};

export const handleShowModalId = (
    showModal,
    setShowModal,
    setGetId,
    id,
    setType,
    type
) => {
    setGetId(id);
    setType(type);
    setShowModal(!showModal);
};

export const handleModal = (e, trigger, setShowModal) => {
    e.stopPropagation();
    if (e.target === trigger.current) {
        setShowModal(false);
    }
};
