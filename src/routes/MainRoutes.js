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
            path: '/kube-form-FE/utils/cluster/register',
            element: <UtilsCluster />,
        },
        {
            path: '/kube-form-FE/utils/cluster/status',
            element: <UtilsClusterStatus />,
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
        // custom path
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
