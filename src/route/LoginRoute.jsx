import { Navigate } from 'react-router-dom';
import { useStore } from '/src/store/store';

export const LoginRoute = ({ children }) => {
    const { accessToken } = useStore();

    return accessToken ? children : <Navigate to='/login' />;
};
