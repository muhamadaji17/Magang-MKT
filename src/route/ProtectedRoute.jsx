import { Navigate } from 'react-router-dom';
import { useStore } from '/src/store/store';

export const ProtectedRoute = ({ children, type }) => {
    const { account } = useStore();

    return type === 'phone' ? (
        account.phone_number ? (
            children
        ) : (
            <Navigate to='/forgot-password' />
        )
    ) : type === 'not-login' ? (
        account.accessToken ? (
            <Navigate to='/dashboard' />
        ) : (
            children
        )
    ) : type === 'login' ? (
        account.accessToken ? (
            children
        ) : (
            <Navigate to='/login' />
        )
    ) : null;
};

export default ProtectedRoute;
