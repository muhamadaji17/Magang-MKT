import cookie from "cookiejs";

export const useAuthToken = () => {
  return cookie.get("authToken");
};
