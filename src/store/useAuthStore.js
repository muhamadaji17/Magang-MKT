import { create } from "zustand";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  token: Cookies.get("authToken") || null,
  username: Cookies.get("username") || null,
  login: (accessToken, username) => {
    Cookies.set("authToken", accessToken, {
      expires: 1,
      secure: true,
      sameSite: "Strict",
    });
    Cookies.set("username", username, {
      expires: 1,
      secure: true,
      sameSite: "Strict",
    });
    set({ token: accessToken, username: username });
  },

  logout: () => {
    Cookies.remove("authToken");
    Cookies.remove("username");
    set({ token: null, username: null });
  },
}));

export default useAuthStore;
