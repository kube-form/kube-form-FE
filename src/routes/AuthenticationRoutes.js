import React, { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(
    lazy(() => import('views/pages/authentication/authentication3/Login3')),
);
const AuthRegister3 = Loadable(
    lazy(() => import('views/pages/authentication/authentication3/Register3')),
);

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/kube-form-FE',
    element: <MinimalLayout />,
    children: [
        {
            path: '/kube-form-FE/pages/login/login3',
            element: <AuthLogin3 />,
        },
        {
            path: '/kube-form-FE/pages/register/register3',
            element: <AuthRegister3 />,
        },
    ],
};

export default AuthenticationRoutes;
