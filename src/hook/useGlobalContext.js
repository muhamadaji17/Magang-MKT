import { PhoneNumberContext } from "../context/PhoneNumberProvider";
import { useCustomContext } from "./useCustomContext";

export const usePhoneNumber = () => {
  return useCustomContext(PhoneNumberContext);
};
