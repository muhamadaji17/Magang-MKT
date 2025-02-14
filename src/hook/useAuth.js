import cookie from "cookiejs";

export const useAuthToken = () => {
  return cookie.get("authToken");
};

export const useAuthUsername = () => {
  return cookie.get("username");
};
