import { create } from "zustand";
import Cookies from "js-cookie";

const useLogin = create((set) => ({
  token: Cookies.get("authToken") || null,
  username: Cookies.get("username") || null,
  roles: Cookies.get("roles") || null,
  login: (accessToken, username, roles) => {
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
    set({ token: accessToken, username, roles });
  },
  logout: () => {
    Cookies.remove("authToken");
    Cookies.remove("username");
    Cookies.remove("roles");
    set({ token: null, username: null, role: null });
  },
}));

export default useLogin;
