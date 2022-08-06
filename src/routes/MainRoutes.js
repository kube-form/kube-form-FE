import React, { lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(
    lazy(() => import('views/dashboard/Default')),
);

// contents routing

const UtilsCluster = Loadable(
    lazy(() => import('views/contents/cluster/Cluster')),
);
const UtilsClusterStatus = Loadable(
    lazy(() => import('views/contents/cluster/ClusterStatus')),
);

const UtilsShadow = Loadable(lazy(() => import('views/contents/Shadow')));
const UtilsMaterialIcons = Loadable(
    lazy(() => import('views/contents/MaterialIcons')),
);
const UtilsTablerIcons = Loadable(
    lazy(() => import('views/contents/TablerIcons')),
);

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// custom

const IAMSetting = Loadable(
    lazy(() => import('views/contents/iam/IamSettingPage')),
);
const IAMRegister = Loadable(
    lazy(() => import('views/contents/iam/IamRegisterPage')),
);
const IAMUpdate = Loadable(
    lazy(() => import('views/contents/iam/IamUpdatePage')),
);
const NotFound = Loadable(lazy(() => import('views/NotFound')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = (isLoggedIn) => {
    return {
        path: '',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <DashboardDefault />,
            },
            {
                path: '/dashboard/default',
                element: <DashboardDefault />,
            },
            {
                path: '/utils/cluster/register',
                element: isLoggedIn ? <UtilsCluster /> : <Navigate to="/" />,
            },
            {
                path: '/utils/cluster/status',
                element: isLoggedIn ? (
                    <UtilsClusterStatus />
                ) : (
                    <Navigate to="/" />
                ),
            },
            {
                path: '/utils/util-shadow',
                element: <UtilsShadow />,
            },
            {
                path: '/icons/tabler-icons',
                element: <UtilsTablerIcons />,
            },
            {
                path: '/icons/material-icons',
                element: <UtilsMaterialIcons />,
            },
            {
                path: '/sample-page',
                element: <SamplePage />,
            },
            // custom path
            {
                path: '/iam/setting',
                element: isLoggedIn ? <IAMSetting /> : <Navigate to="/" />,
            },
            {
                path: '/iam/register',
                element: isLoggedIn ? <IAMRegister /> : <Navigate to="/" />,
            },
            {
                path: '/iam/update',
                element: <IAMUpdate />,
            },
        ],
    };
};

export default MainRoutes;
