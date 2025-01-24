import { Navigate } from 'react-router-dom';
import { useStore } from '/src/store/store';

export const PhoneRoute = ({ children }) => {
    const { account } = useStore();

    return account.phone_number ? children : <Navigate to='/forgot-password' />;
};
