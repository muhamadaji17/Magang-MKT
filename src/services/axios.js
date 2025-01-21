import axiosInstance from './axiosInstance';

export const loginAuth = async (dataForm) => {
    try {
        const res = await axiosInstance.post('/login', dataForm, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'Login Failed');
    }
};

export const registerAuth = async (dataForm) => {
    try {
        const res = await axiosInstance.post('/register', dataForm, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'Register Failed');
    }
};

export const forgotPassword = async (dataForm) => {
    try {
        const res = await axiosInstance.post('/forgot-password', dataForm, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'Reset Password Failed');
    }
};

export const resetPassword = async (dataForm) => {
    try {
        const res = await axiosInstance.post('/set-pass', dataForm, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'Reset Password Failed');
    }
};
