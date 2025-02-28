import { create } from 'zustand';
import Cookies from 'js-cookie';

export const useStore = create((set) => {
    const storedData = JSON.parse(sessionStorage.getItem('datas')) || {};

    return {
        account: {
            accessToken: Cookies.get('accessToken') || '',
            username: storedData.username || '',
            role: storedData.role || '',
            priority: storedData.priority || '',
        },

        updateAccount: (updatedData) => {
            Cookies.set('accessToken', updatedData.accessToken, {
                secure: true,
                sameSite: 'strict',
            });

            sessionStorage.setItem(
                'datas',
                JSON.stringify({
                    username: updatedData.username,
                    role: updatedData.role,
                    priority: updatedData.priority,
                })
            );

            set((state) => ({
                account: {
                    ...state.account,
                    ...updatedData,
                },
            }));
        },

        logout: () => {
            Cookies.remove('accessToken');

            sessionStorage.removeItem('datas');

            set({
                account: {
                    accessToken: '',
                    username: '',
                    role: '',
                    priority: '',
                },
            });
        },
    };
});
