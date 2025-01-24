export const handleSubmitData = ({
  data,
  resetField,
  postData,
  state,
  setState,
  navigate,
  setLoading,
}) => {
  postData({ data, resetField, state, setState, navigate, setLoading });
};

export const handleShowPassword = (showPassword, setShowPassword) => {
  setShowPassword(!showPassword);
};
