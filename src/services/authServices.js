import { POST_AUTH } from '../api';
import { AlertForm } from '../components/atoms';

export const LoginService = async (
    data,
    navigate,
    reset,
    updateAccount,
    setLoadingButton
) => {
    setLoadingButton(true);
    try {
        const response = await POST_AUTH('auth/login', data);
        const spec = {
            accessToken: response.data.data.AccessToken.accessToken,
            username: response.data.data.user.username,
            role: response.data.data.roles.roleName,
            priority: response.data.data.roles.priority,
        };
        updateAccount(spec);
        reset();
        AlertForm({
            icon: 'success',
            text: response.data.message,
            title: 'success',
        });
        navigate('/dashboard');
    } catch (error) {
        AlertForm({
            icon: 'error',
            text: error.response.data.message,
            title: 'Login Failed',
        });
    } finally {
        setLoadingButton(false);
    }
};
