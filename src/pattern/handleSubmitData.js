export const handleSubmitData = (data, service, extraOptions = {}) => {
  service(data, extraOptions);
};
