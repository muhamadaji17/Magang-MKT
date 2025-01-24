import { create } from "zustand";

const useOtpStore = create((set) => ({
  otpData: {
    created: null,
    createdAt: null,
    exp_otp: null,
    id: null,
    jam_keluar: null,
    otp: null,
    phone_number: null,
    start_otp: null,
    status: false,
    updated: null,
    updatedAt: null,
  },

  setOtpData: (payload) =>
    set({
      otpData: payload,
    }),
  getOtpData: () => get().otpData,
}));

export default useOtpStore;
