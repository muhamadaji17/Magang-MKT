import { Navigate } from 'react-router-dom';
import { useStore } from '/src/store/store';

export const LoginRoute = ({ children }) => {
    const { account } = useStore();

    return account.accessToken ? children : <Navigate to='/login' />;
};
