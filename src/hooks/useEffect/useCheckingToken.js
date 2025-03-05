import { useEffect } from 'react';

const useCheckingToken = ({ account, type, logout }) => {
    useEffect(() => {
        if (type === 'required' && !account?.accessToken) {
            logout();
        }
    }, [type, account?.accessToken, logout]);
};

export default useCheckingToken;
