import { create } from 'zustand';

export const useStore = create((set) => ({
    account: {
        accessToken: '',
        username: '',
        role_name: '',
        company: '',
        phone_number: '',
    },
    // Fungsi untuk mengupdate sebagian dari `account`
    updateAccount: (updatedData) =>
        set((state) => ({
            account: {
                ...state.account,
                ...updatedData,
            },
        })),
}));
