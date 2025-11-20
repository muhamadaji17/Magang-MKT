import Cookies from "js-cookie";

export const setCookies = (response) => {
  Cookies.set("accessToken", response.data.data.AccessToken.accessToken);
  Cookies.set("username", response.data.data.user.username);
};

export const removeCookies = () => {
  Cookies.remove("accessToken");
  Cookies.remove("username");
};
