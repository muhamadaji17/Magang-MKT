export const handleSubmit = (data, service, extraOptions = {}) => {
  service(data, extraOptions);
};
