import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(
    lazy(() => import('views/dashboard/Default')),
);

// utilities routing

const UtilsCluster = Loadable(lazy(() => import('views/utilities/Cluster')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(
    lazy(() => import('views/utilities/MaterialIcons')),
);
const UtilsTablerIcons = Loadable(
    lazy(() => import('views/utilities/TablerIcons')),
);

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// custom

const IAMSetting = Loadable(
    lazy(() => import('views/utilities/iam/IamSettingPage')),
);
const IAMRegister = Loadable(
    lazy(() => import('views/utilities/iam/IamRegisterPage')),
);
const IAMUpdate = Loadable(
    lazy(() => import('views/utilities/iam/IamUpdatePage')),
);
const NotFound = Loadable(lazy(() => import('views/NotFound')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/kube-form-FE',
    element: <MainLayout />,
    children: [
        {
            path: '/kube-form-FE',
            element: <DashboardDefault />,
        },
        {
            path: '/kube-form-FE/dashboard/default',
            element: <DashboardDefault />,
        },
        {
            path: '/kube-form-FE/utils/cluster',
            element: <UtilsCluster />,
        },
        {
            path: '/kube-form-FE/utils/util-shadow',
            element: <UtilsShadow />,
        },
        {
            path: '/kube-form-FE/icons/tabler-icons',
            element: <UtilsTablerIcons />,
        },
        {
            path: '/kube-form-FE/icons/material-icons',
            element: <UtilsMaterialIcons />,
        },
        {
            path: '/kube-form-FE/sample-page',
            element: <SamplePage />,
        },
        {
            path: '/kube-form-FE/iam/setting',
            element: <IAMSetting />,
        },
        {
            path: '/kube-form-FE/iam/register',
            element: <IAMRegister />,
        },
        {
            path: '/kube-form-FE/iam/update',
            element: <IAMUpdate />,
        },
        {
            path: '/kube-form-FE/*',
            element: <NotFound />,
        },
    ],
};

export default MainRoutes;
