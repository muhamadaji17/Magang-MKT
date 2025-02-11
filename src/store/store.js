import { create } from 'zustand';
import Cookies from 'js-cookie';

export const useStore = create((set) => ({
    account: {
        accessToken: Cookies.get('accessToken') || '',
        username: Cookies.get('username') || '',
    },

    phone_number: '',

    updatePhoneNumber: (phone_number) => set({ phone_number }),

    updateAccount: (updatedData) => {
        Object.entries(updatedData).forEach(([key, value]) => {
            Cookies.set(key, value, { secure: true, sameSite: 'strict' });
        });

        set((state) => ({
            account: {
                ...state.account,
                ...updatedData,
            },
        }));
    },

    logout: () => {
        ['username', 'accessToken'].forEach((key) => {
            Cookies.remove(key);
        });

        set({
            account: {
                accessToken: '',
                username: '',
            },
        });
    },
}));
