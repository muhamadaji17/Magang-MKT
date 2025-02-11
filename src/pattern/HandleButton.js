export const handleSubmitData = ({
  data,
  dataId,
  postData,
  resetField,
  state,
  setState,
  navigate,
  accessToken,
  setShowModal,
  setUpdateData,
  setLoading,
}) => {
  postData({
    data,
    dataId,
    resetField,
    state,
    setState,
    navigate,
    setLoading,
    setShowModal,
    accessToken,
    setUpdateData,
  });
};

export const handleShowPassword = (showPassword, setShowPassword) => {
  setShowPassword(!showPassword);
};

export const handleShowModal = (setShowModal) => {
  setShowModal((prev) => !prev);
};
