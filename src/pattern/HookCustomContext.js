import { PhoneNumberContext } from "../context/PhoneNumberProvider";
import { AccessTokenContext } from "../context/TokenContextProvider";
import { useCustomContext } from "../hook";

export const useAccessToken = () => {
  return useCustomContext(AccessTokenContext);
};

export const usePhoneNumber = () => {
  return useCustomContext(PhoneNumberContext);
};
