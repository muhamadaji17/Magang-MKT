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
