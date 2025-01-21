import { create } from 'zustand';

export const useStore = create((set) => ({
    accessToken: '',
    phone_number: '',
    setAccessToken: (token) => set({ accessToken: token }),
    setPhoneNumber: (number) => set({ phone_number: number }),
}));
