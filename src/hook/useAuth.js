const useAuth = () => {
  const username = sessionStorage.getItem("name");
  const role = sessionStorage.getItem("role");

  return {
    username,
    role,
  };
};

export default useAuth;
