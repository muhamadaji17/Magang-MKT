import { POST_AUTH } from '../api';
import AlertForm from '../utils/SweetAlert';

export const RegisterService = async (data, navigate, reset, setLoading) => {
    setLoading(true);
    try {
        const response = await POST_AUTH('auth/register', data);
        reset();
        AlertForm({
            icon: 'success',
            text: response.data.message,
            title: 'success',
        });
        console.log(response);
        navigate('/login');
    } catch (error) {
        AlertForm({
            icon: 'error',
            text: error.response.data.message,
            title: 'Register Failed',
        });
        console.log(error);
    } finally {
        setLoading(false);
    }
};

export const LoginService = async (
    data,
    navigate,
    reset,
    updateAccount,
    setLoading
) => {
    setLoading(true);
    try {
        const response = await POST_AUTH('auth/login', data);
        const spec = {
            accessToken: response.data.data.accessToken,
            username: response.data.data.username,
        };
        updateAccount(spec);
        reset();
        AlertForm({
            icon: 'success',
            text: response.data.message,
            title: 'success',
        });
        console.log(response);
        navigate('/dashboard');
    } catch (error) {
        AlertForm({
            icon: 'error',
            text: error.response.data.message,
            title: 'Login Failed',
        });
        console.log(error);
    } finally {
        setLoading(false);
    }
};

export const ForgotPasswordService = async (
    data,
    updatePhoneNumber,
    navigate,
    reset,
    setLoading
) => {
    setLoading(true);
    try {
        const response = await POST_AUTH('auth/forgot-password', data);
        if (!response.data.status) {
            reset();
            AlertForm({
                icon: 'error',
                text: response.data.message,
                title: 'Verification Failed',
            });
            console.log(response);
        } else {
            updatePhoneNumber(data.phone_number);
            AlertForm({
                icon: 'success',
                text: response.data.message,
                title: 'Verification Success',
            });
            console.log(response);
            navigate('/setting-password');
        }
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};

export const SettingPasswordService = async (
    data,
    navigate,
    reset,
    setLoading,
    phone_number
) => {
    setLoading(true);
    const { otp, password } = data;

    try {
        const response = await POST_AUTH('auth/set-pass', {
            otp,
            phone_number,
            password,
        });
        if (!response.data.status) {
            reset();
            AlertForm({
                icon: 'error',
                text: response.data.message,
                title: 'Reset Password Failed',
            });
        } else {
            AlertForm({
                icon: 'success',
                text: response.data.message,
                title: 'success',
            });
            console.log(response);
            navigate('/login');
        }
    } catch (error) {
        console.log(error);
    }
};
