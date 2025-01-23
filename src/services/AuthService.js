import { POST_AUTH } from '../api';
import { AlertForm } from '../utils/SweetAlert';

export const RegisterService = async (data, navigate, reset) => {
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
        reset();
        AlertForm({
            icon: 'error',
            text: error.response.data.message,
            title: 'Register Failed',
        });
        console.log(error);
    }
};

export const LoginService = async (data, navigate, reset, setAccessToken) => {
    try {
        const response = await POST_AUTH('auth/login', data);
        setAccessToken(response.data.data.accessToken);
        reset();
        AlertForm({
            icon: 'success',
            text: response.data.message,
            title: 'success',
        });
        console.log(response);
        navigate('/dashboard');
    } catch (error) {
        reset();
        AlertForm({
            icon: 'error',
            text: error.response.data.message,
            title: 'Login Failed',
        });
        console.log(error);
    }
};

export const ForgotPasswordService = async (
    data,
    setPhoneNumber,
    navigate,
    reset
) => {
    try {
        const response = await POST_AUTH('auth/forgot-password', data);
        if (!response.data.status) {
            reset();
            setPhoneNumber(false);
            AlertForm({
                icon: 'error',
                text: response.data.message,
                title: 'Verification Failed',
            });
            console.log(response);
        } else {
            setPhoneNumber(response.data.payload.phone_number);
            reset();
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
    }
};

export const SettingPasswordService = async (data, navigate, reset) => {
    try {
        const response = await POST_AUTH('auth/set-pass', data);
        if (!response.data.status) {
            reset();
            AlertForm({
                icon: 'error',
                text: response.data.message,
                title: 'Reset Password Failed',
            });
            console.log(response);
        } else {
            reset();
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
