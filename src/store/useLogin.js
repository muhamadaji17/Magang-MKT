import { create } from "zustand";
import Cookies from "js-cookie";

const useLogin = create((set) => ({
  token: Cookies.get("authToken") || null,
  username: Cookies.get("username") || null,
  roles: Cookies.get("roles") || null,
  userId: Cookies.get("userId") || null,
  login: (accessToken, username, roles, userId) => {
    Cookies.set("authToken", accessToken, {
      expires: 1,
      secure: true,
      sameSite: "strict",
    });
    Cookies.set("username", username, {
      expires: 1,
      secure: true,
      sameSite: "strict",
    });
    Cookies.set("roles", roles, {
      expires: 1,
      secure: true,
      sameSite: "strict",
    });
    Cookies.set("userId", userId, {
      expires: 1,
      secure: true,
      sameSite: "strict",
    });
    set({ token: accessToken, username, roles, userId });
  },
  logout: () => {
    Cookies.remove("authToken");
    Cookies.remove("username");
    Cookies.remove("roles");
    Cookies.remove("userId");
    set({ token: null, username: null, role: null, userId: null });
  },
}));

export default useLogin;
