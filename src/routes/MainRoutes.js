import React, { lazy } from 'react';

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

const MainRoutes = {
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
            element: <UtilsCluster />,
        },
        {
            path: '/utils/cluster/status',
            element: <UtilsClusterStatus />,
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
            element: <IAMSetting />,
        },
        {
            path: '/iam/register',
            element: <IAMRegister />,
        },
        {
            path: '/iam/update',
            element: <IAMUpdate />,
        },
        {
            path: '/*',
            element: <NotFound />,
        },
    ],
};

export default MainRoutes;
