import { AccessTokenContext } from "../context/AccessTokenProvider";
import { PhoneNumberContext } from "../context/PhoneNumberProvider";
import { useCustomContext } from "./useCustomContext";

export const useAccessToken = () => {
  return useCustomContext(AccessTokenContext);
};

export const usePhoneNumber = () => {
  return useCustomContext(PhoneNumberContext);
};
