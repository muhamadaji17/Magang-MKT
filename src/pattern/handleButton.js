export const handleSubmitData = (data, postData) => {
  postData(data);
};

export const handleShowPassword = (setShowPassword, showPassword) => {
  setShowPassword(!showPassword);
};

export const handleLogout = () => {
  sessionStorage.clear();
  window.location.reload();
};
