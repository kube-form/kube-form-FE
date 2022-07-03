import { useContext } from 'react';

import AuthContext from 'contexts/FirebaseContext';

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error('context must be use inside provider');

    return context;
};

export default useAuth;
