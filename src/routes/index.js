import { useRoutes } from 'react-router-dom';
// import config from 'config';
import useAuth from 'hooks/useAuth';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const { user } = useAuth();
    return useRoutes([MainRoutes(!!user), AuthenticationRoutes]);
}
