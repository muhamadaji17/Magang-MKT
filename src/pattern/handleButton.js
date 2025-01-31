export const handleSubmitData = (data, postData, ...res) => {
    postData(data, ...res);
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

export const handleShowModal = (showModal, setShowModal) => {
    setShowModal(!showModal);
};

export const handleModal = (e, trigger, setShowModal) => {
    e.stopPropagation();
    if (e.target === trigger.current) {
        setShowModal(false);
    }
};
