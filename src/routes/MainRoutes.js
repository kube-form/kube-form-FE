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

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />,
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />,
        },

        {
            path: '/utils/cluster',
            element: <UtilsCluster />,
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
    ],
};

export default MainRoutes;
