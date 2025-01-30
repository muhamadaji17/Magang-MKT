import { create } from "zustand";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  token: Cookies.get("authToken") || null,
  login: (accessToken) => {
    Cookies.set("authToken", accessToken, {
      expires: 1,
      secure: true,
      sameSite: "Strict",
    });
    set({ token: accessToken });
  },

  logout: () => {
    Cookies.remove("authToken");
    set({ token: null });
  },
}));

export default useAuthStore;
