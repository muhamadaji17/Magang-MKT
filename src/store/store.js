import { create } from 'zustand';

export const useStore = create((set) => ({
    account: {
        accessToken: '',
        username: '',
        role_admin: '',
        company: '',
        phone_number: '',
    },
    updateAccount: (updatedData) =>
        set((state) => ({
            account: {
                ...state.account,
                ...updatedData,
            },
        })),
}));
